import cv2
import numpy as np

img = cv2.imread("assets/deshi-chakra-circular-logo.png", cv2.IMREAD_GRAYSCALE)
y, x = np.where(img < 150)
if len(x) > 0:
    print("Bounding box of all dark pixels:")
    print(f"X: {x.min()} to {x.max()} (width: {x.max() - x.min()})")
    print(f"Y: {y.min()} to {y.max()} (height: {y.max() - y.min()})")
else:
    print("No dark pixels found!")
