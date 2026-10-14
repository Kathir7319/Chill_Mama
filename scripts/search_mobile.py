import urllib.request
import re

url = "https://www.google.com/search?q=Chill+Mama+Fusion+Indian+Food+Truck+Morrisville+NC&tbm=isch"
req = urllib.request.Request(
    url,
    headers={
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
    }
)

with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

# find gstatic or encrypted-tbn0 images
thumbs = re.findall(r'https://encrypted-tbn0\.gstatic\.com/images\?q=tbn:[A-Za-z0-9_\-]+', html)
print(f"Found {len(thumbs)} image thumbs:")
for t in thumbs[:15]:
    print(t)
