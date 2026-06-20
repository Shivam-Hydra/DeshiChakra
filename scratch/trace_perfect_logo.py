import cv2
import numpy as np

# Load original image
img = cv2.imread("assets/deshi-chakra-circular-logo.png", cv2.IMREAD_GRAYSCALE)
h, w = img.shape

# Threshold to get binary image
_, thresh = cv2.threshold(img, 200, 255, cv2.THRESH_BINARY_INV)

# Find all contours
contours, hierarchy = cv2.findContours(thresh, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_TC89_KCOS)

# Circle parameters
cx, cy = 614, 490
max_r = 442

# We want to crop to a tight bounding box around the circle
# The circle bounding box is from cx - 442 to cx + 442, cy - 442 to cy + 442
# Left: 172, Right: 1056, Top: 48, Bottom: 932
crop_x1 = cx - max_r
crop_y1 = cy - max_r
crop_size = 2 * max_r  # 884

# Scale to fit inside 120x120 viewBox with margin 4
margin = 4
scale = (120.0 - 2 * margin) / crop_size

svg_content = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" aria-label="Deshi Chakra logo">',
    '  <!-- Clean background matching the site theme -->',
    '  <rect width="120" height="120" rx="60" fill="#f7f4ea"/>',
    '  <g fill="#063f1c" stroke="none">'
]

valid_count = 0
for idx, contour in enumerate(contours):
    # Simplify slightly
    epsilon = 0.0012 * cv2.arcLength(contour, True)
    approx = cv2.approxPolyDP(contour, epsilon, True)
    
    if len(approx) < 3 or cv2.contourArea(contour) < 20:
        continue
        
    # Check if all points are within the circle radius
    pts = approx.reshape(-1, 2)
    dists = np.sqrt((pts[:, 0] - cx)**2 + (pts[:, 1] - cy)**2)
    
    # If the contour lies outside the circle, discard it
    if np.max(dists) > max_r + 5:
        continue
        
    path_data = []
    for pt in approx:
        x, y = pt[0]
        # Translate based on crop coordinates and scale
        svg_x = margin + (x - crop_x1) * scale
        svg_y = margin + (y - crop_y1) * scale
        path_data.append(f"{svg_x:.2f} {svg_y:.2f}")
        
    # Build SVG path
    path_str = f"M {path_data[0]} " + " ".join([f"L {p}" for p in path_data[1:]]) + " Z"
    svg_content.append(f'    <path d="{path_str}"/>')
    valid_count += 1

svg_content.append('  </g>')
svg_content.append('</svg>')

with open("assets/logo.svg", "w") as f:
    f.write("\n".join(svg_content))

print(f"Perfect vector logo generated! Kept {valid_count} contours.")
