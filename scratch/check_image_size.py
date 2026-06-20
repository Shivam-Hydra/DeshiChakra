import cv2
img = cv2.imread("assets/deshi-chakra-circular-logo.png")
print("Image shape:", img.shape)
# Save a cropped version containing just the circle (usually the top square)
h, w, _ = img.shape
# Let's crop to a square at the top of the image
# Typically if h > w, the logo is at the top, and text is below.
# Let's print the logo shape and some info.
