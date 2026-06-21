import shutil

# Mapping: source media file -> destination tile name
# Order based on user's message:
# 1. Dairy & Milk Production       -> media__1781968936869.jpg  (milk bottle)
# 2. Fisheries & Aquaculture       -> media__1781969201724.jpg  (aquaculture aerial)
# 3. Greenhouse Produce            -> media__1781969361656.jpg  (greenhouse lettuce)
# 4. Fruit Orchards & Agro Produce -> media__1781969563332.jpg  (fruit basket)
# 5. Value Added Products          -> media__1781969680120.jpg  (dairy products)

brain = r"C:\Users\ASUS\.gemini\antigravity\brain\fed98f0b-5d92-458b-bbbc-f175c9ce9ae3"
dest  = r"c:\Users\ASUS\Desktop\Desi chakra website\assets\tiles"

mapping = [
    ("media__1781968936869.jpg", "tile-dairy.jpg"),
    ("media__1781969201724.jpg", "tile-fisheries.jpg"),
    ("media__1781969361656.jpg", "tile-greenhouse.jpg"),
    ("media__1781969563332.jpg", "tile-orchards.jpg"),
    ("media__1781969680120.jpg", "tile-valueadded.jpg"),
]

for src_name, dst_name in mapping:
    src = f"{brain}\\{src_name}"
    dst = f"{dest}\\{dst_name}"
    shutil.copy(src, dst)
    print(f"Copied {src_name} -> {dst_name}")

print("Done.")
