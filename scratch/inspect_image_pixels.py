import cv2
import numpy as np

img = cv2.imread("assets/deshi-chakra-circular-logo.png")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

print("Unique gray values count:", len(np.unique(gray)))
print("Min gray:", gray.min(), "Max gray:", gray.max(), "Mean gray:", gray.mean())

# Let's count how many pixels are dark (e.g. < 50) and how many are light (e.g. > 200)
dark_pixels = np.sum(gray < 50)
light_pixels = np.sum(gray > 200)
mid_pixels = np.sum((gray >= 50) & (gray <= 200))

print("Dark pixels (<50):", dark_pixels)
print("Light pixels (>200):", light_pixels)
print("Mid pixels (50-200):", mid_pixels)
