import cv2
import numpy as np

# Load cropped image
img = cv2.imread("assets/cropped-logo.png", cv2.IMREAD_GRAYSCALE)
h, w = img.shape

# Threshold to get binary image
_, thresh = cv2.threshold(img, 200, 255, cv2.THRESH_BINARY_INV)

# Find contours
# RETR_CCOMP retrieves all contours and organizes them into a two-level hierarchy
contours, hierarchy = cv2.findContours(thresh, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_TC89_KCOS)

# Scale coordinates to fit inside 120x120 viewBox
margin = 4
scale = (120.0 - 2 * margin) / max(h, w)

svg_content = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" aria-label="Deshi Chakra logo">',
    '  <!-- Clean background matching the site theme -->',
    '  <rect width="120" height="120" rx="60" fill="#f7f4ea"/>',
    '  <g fill="#063f1c" stroke="none">'
]

# Write contours
for idx, contour in enumerate(contours):
    # Simplify slightly
    epsilon = 0.0012 * cv2.arcLength(contour, True)
    approx = cv2.approxPolyDP(contour, epsilon, True)
    
    # We filter out very small noise contours (less than 4 points or area < 20)
    if cv2.contourArea(contour) < 20 or len(approx) < 3:
        continue
        
    path_data = []
    for i, pt in enumerate(approx):
        x, y = pt[0]
        svg_x = margin + x * scale
        svg_y = margin + y * scale
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

print("Vector logo traced and saved to assets/logo.svg")
