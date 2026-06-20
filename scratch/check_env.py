import os
try:
    from PIL import Image
    print("PIL installed")
except ImportError:
    print("PIL not installed")

try:
    import cv2
    print("OpenCV installed")
except ImportError:
    print("OpenCV not installed")

try:
    import numpy as np
    print("NumPy installed")
except ImportError:
    print("NumPy not installed")

if os.path.exists("assets/deshi-chakra-circular-logo.png"):
    print("File exists, size:", os.path.getsize("assets/deshi-chakra-circular-logo.png"))
else:
    print("File does not exist")
