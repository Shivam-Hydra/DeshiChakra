import cv2
import numpy as np

img = cv2.imread("assets/deshi-chakra-circular-logo.png", cv2.IMREAD_GRAYSCALE)
_, thresh = cv2.threshold(img, 220, 255, cv2.THRESH_BINARY_INV)

# Dilate with a 15x15 kernel to make thin lines very thick
kernel = np.ones((15, 15), np.uint8)
dilated = cv2.dilate(thresh, kernel, iterations=1)

# Downsample to 80x40
resized = cv2.resize(dilated, (80, 40), interpolation=cv2.INTER_AREA)

# Print ASCII art
for row in resized:
    line = "".join("#" if pixel > 50 else " " for pixel in row)
    print(line)
