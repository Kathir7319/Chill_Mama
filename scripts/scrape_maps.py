import urllib.request
import urllib.parse
import json
import re

url = "https://www.google.com/maps/search/Chill+Mama+10420+Chapel+Hill+Rd+Morrisville+NC"
req = urllib.request.Request(
    url,
    headers={
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9"
    }
)

try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8', errors='ignore')
        print("Page length:", len(html))
        # Look for photo urls: lh5.googleusercontent.com or googleusercontent.com/p/
        photos = re.findall(r'https://lh[3-6]\.googleusercontent\.com/[^\s"\'\\]+', html)
        photos += re.findall(r'https://streetviewpixels-pa\.googleapis\.com/[^\s"\'\\]+', html)
        photos += re.findall(r'https://lh[3-6]\.ggpht\.com/[^\s"\'\\]+', html)
        unique_photos = list(set(photos))
        print(f"Found {len(unique_photos)} photos:")
        for p in unique_photos[:20]:
            print(p)
except Exception as e:
    print("Error:", e)
