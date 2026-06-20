import cv2
import numpy as np

img = cv2.imread("assets/deshi-chakra-circular-logo.png", cv2.IMREAD_GRAYSCALE)
h, w = img.shape

# Downsample to 80x40
resized = cv2.resize(img, (80, 40), interpolation=cv2.INTER_AREA)

# Print ASCII art
for row in resized:
    line = "".join("#" if pixel < 180 else " " for pixel in row)
    print(line)
