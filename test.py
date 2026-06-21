import glob

html = "<html><body>"
files = glob.glob("c:/Users/ASUS/Desktop/Desi chakra website/extracted/contents-docx/word/media/*")
for f in files:
    html += f'<img src="file:///{f}" width="200"><br>{f}<br>'
html += "</body></html>"
with open("c:/Users/ASUS/Desktop/Desi chakra website/test_images.html", "w") as f:
    f.write(html)
