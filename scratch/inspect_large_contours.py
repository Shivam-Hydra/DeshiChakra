import cv2
import numpy as np

img = cv2.imread("assets/deshi-chakra-circular-logo.png", cv2.IMREAD_GRAYSCALE)
_, thresh = cv2.threshold(img, 200, 255, cv2.THRESH_BINARY_INV)
contours, _ = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

print("Contours with bounding box width or height > 300:")
found = 0
for i, c in enumerate(contours):
    x, y, wc, hc = cv2.boundingRect(c)
    if wc > 300 or hc > 300:
        print(f"ID {i}: pos ({x}, {y}), size {wc}x{hc}, area {cv2.contourArea(c):.1f}")
        found += 1

print("Total found:", found)
