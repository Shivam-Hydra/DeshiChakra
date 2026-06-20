import cv2
import numpy as np

# Load the image
img = cv2.imread("assets/deshi-chakra-circular-logo.png", cv2.IMREAD_UNCHANGED)

# Check if image has alpha channel, if so use it or threshold based on color
if img.shape[2] == 4:
    # Use alpha channel or color
    # Logo is dark green on transparent/white background.
    # Let's extract the green channel or alpha
    alpha = img[:, :, 3]
    gray = cv2.cvtColor(img[:, :, :3], cv2.COLOR_BGR2GRAY)
    # Threshold: dark pixels on light background
    _, thresh = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY_INV)
    # Combine with alpha if needed
    thresh = cv2.bitwise_and(thresh, alpha)
else:
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY_INV)

# Find contours
contours, hierarchy = cv2.findContours(thresh, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_TC89_KCOS)

# Get bounding box of the logo to center and scale it to a standard 120x120 viewport
h, w = thresh.shape
# Find the overall bounding rect of all non-zero pixels
pts = np.argwhere(thresh > 0)
y1, x1 = pts.min(axis=0)
y2, x2 = pts.max(axis=0)

logo_w = x2 - x1
logo_h = y2 - y1
size = max(logo_w, logo_h)

# We want to scale the logo to fit within a 120x120 viewBox with a margin
margin = 4
scale = (120.0 - 2 * margin) / size

# SVG header
svg_content = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" aria-label="Deshi Chakra logo">',
    '  <!-- Clean background matching the site theme -->',
    '  <rect width="120" height="120" rx="60" fill="#f7f4ea"/>',
    '  <g fill="#063f1c" stroke="none">'
]

# Write contours as SVG paths
# We use hierarchy to determine if contour is outer (fill) or inner (hole/hole-like)
for idx, contour in enumerate(contours):
    # Simplify contour slightly to make the SVG file smaller and cleaner
    epsilon = 0.001 * cv2.arcLength(contour, True)
    approx = cv2.approxPolyDP(contour, epsilon, True)
    
    path_data = []
    for i, pt in enumerate(approx):
        x, y = pt[0]
        # Translate to center and scale
        svg_x = margin + (x - x1) * scale
        svg_y = margin + (y - y1) * scale
        if i == 0:
            path_data.append(f"M {svg_x:.2f} {svg_y:.2f}")
        else:
            path_data.append(f"L {svg_x:.2f} {svg_y:.2f}")
    path_data.append("Z")
    
    svg_content.append(f'    <path d="{" ".join(path_data)}"/>')

svg_content.append('  </g>')
svg_content.append('</svg>')

with open("assets/logo.svg", "w") as f:
    f.write("\n".join(svg_content))

print("SVG logo generated successfully at assets/logo.svg")
