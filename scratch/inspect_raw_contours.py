import cv2
import numpy as np

img = cv2.imread("assets/deshi-chakra-circular-logo.png", cv2.IMREAD_GRAYSCALE)
_, thresh = cv2.threshold(img, 200, 255, cv2.THRESH_BINARY_INV)
contours, _ = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

raw_list = []
for i, c in enumerate(contours):
    x, y, wc, hc = cv2.boundingRect(c)
    raw_list.append((i, x, y, wc, hc, cv2.contourArea(c)))

# Sort by area descending
raw_list.sort(key=lambda item: item[5], reverse=True)

print("Top 15 Raw Contours:")
for rank, (idx, x, y, wc, hc, area) in enumerate(raw_list[:15]):
    print(f"Rank {rank+1}: Contour ID {idx}, pos: ({x}, {y}), size: {wc}x{hc}, area: {area:.1f}")
