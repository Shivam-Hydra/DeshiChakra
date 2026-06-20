import cv2
import numpy as np

# Load image
img = cv2.imread("assets/deshi-chakra-circular-logo.png")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Smooth to reduce noise
blurred = cv2.medianBlur(gray, 9)

# Hough Circles
# Adjust param1 and param2 for precision
circles = cv2.HoughCircles(
    blurred,
    cv2.HOUGH_GRADIENT,
    dp=1,
    minDist=500,
    param1=50,
    param2=30,
    minRadius=300,
    maxRadius=600
)

if circles is not None:
    circles = np.uint16(np.around(circles))
    for i in circles[0, :]:
        x_c, y_c, r = i
        print(f"Found circle: Center ({x_c}, {y_c}), Radius {r}")
        
        # Crop square with 5px padding
        padding = 5
        x1 = max(0, x_c - r - padding)
        y1 = max(0, y_c - r - padding)
        x2 = min(img.shape[1], x_c + r + padding)
        y2 = min(img.shape[0], y_c + r + padding)
        
        cropped = img[y1:y2, x1:x2]
        cv2.imwrite("assets/cropped-logo.png", cropped)
        print("Cropped logo saved to assets/cropped-logo.png, shape:", cropped.shape)
        break
else:
    print("No circles found using HoughCircles. Let's try bounding box of upper half.")
    # Fallback to upper half bounding box
    h, w = gray.shape
    # Crop top 75%
    upper_half = img[0:int(h*0.75), :]
    # Threshold upper half
    gray_upper = gray[0:int(h*0.75), :]
    y, x = np.where(gray_upper < 200)
    if len(x) > 0:
        x1, y1 = x.min(), y.min()
        x2, y2 = x.max(), y.max()
        # Make it square
        width = x2 - x1
        height = y2 - y1
        size = max(width, height)
        
        # Adjust crop coordinates to keep it square and centered
        cx = (x1 + x2) // 2
        cy = (y1 + y2) // 2
        
        x1_sq = max(0, cx - size//2 - 5)
        y1_sq = max(0, cy - size//2 - 5)
        x2_sq = min(w, cx + size//2 + 5)
        y2_sq = min(h, cy + size//2 + 5)
        
        cropped = img[y1_sq:y2_sq, x1_sq:x2_sq]
        cv2.imwrite("assets/cropped-logo.png", cropped)
        print("Cropped logo saved using fallback bounding box to assets/cropped-logo.png")
