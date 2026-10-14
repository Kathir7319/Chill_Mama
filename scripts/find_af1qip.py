import urllib.request
import re

url = "https://www.google.com/maps/search/Chill+Mama+10420+Chapel+Hill+Rd+Morrisville+NC"
req = urllib.request.Request(
    url,
    headers={
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9"
    }
)

with urllib.request.urlopen(req) as response:
    html = response.read().decode('utf-8', errors='ignore')

# Search for AF1Qip
photo_ids = set(re.findall(r'AF1Qip[A-Za-z0-9_-]+', html))
print(f"Found {len(photo_ids)} photo IDs:")
for pid in list(photo_ids)[:30]:
    print(f"https://lh5.googleusercontent.com/p/{pid}=w800-h600-k-no")

# Also search for Chill Mama data or place URL
places = re.findall(r'/maps/place/[^"]+', html)
print(f"Found places: {len(places)}")
for p in places[:5]:
    print(p)
