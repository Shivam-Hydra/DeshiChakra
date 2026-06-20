import cv2
import numpy as np

img = cv2.imread("assets/deshi-chakra-circular-logo.png", cv2.IMREAD_GRAYSCALE)
h, w = img.shape
print("Image dimensions:", w, "x", h)

# Threshold
_, thresh = cv2.threshold(img, 200, 255, cv2.THRESH_BINARY_INV)

# Find contours
contours, _ = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
print("Total raw contours found:", len(contours))

# Filter contours
large_contours = []
for i, c in enumerate(contours):
    x, y, wc, hc = cv2.boundingRect(c)
    # Check size and if it touches boundary
    if wc < 15 or hc < 15:
        continue
    if x <= 10 or y <= 10 or (x + wc) >= w - 10 or (y + hc) >= h - 10:
        continue
    large_contours.append((i, wc, hc, cv2.contourArea(c)))

# Sort by area descending
large_contours.sort(key=lambda item: item[3], reverse=True)

print("Contours after filtering (showing top 20):")
for rank, (idx, wc, hc, area) in enumerate(large_contours[:20]):
    print(f"Rank {rank+1}: Contour ID {idx}, bounding rect: {wc}x{hc}, area: {area:.1f}")
