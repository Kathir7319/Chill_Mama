from PIL import Image
import numpy as np

img = Image.open('public/images/chill_mama_logo.png').convert('RGBA')
arr = np.array(img)

# Flood fill transparency from outside
# The badge has a white outline (R > 200, G > 200, B > 200).
# Outside the badge is dark teal/brown where R < 100, G < 100, B < 100.
# Let's use floodfill from corners or BFS to turn outside dark pixels transparent!
from collections import deque

h, w, c = arr.shape
mask = np.zeros((h, w), dtype=bool)

# BFS from the four edges
q = deque()
for x in range(w):
    q.append((0, x))
    q.append((h - 1, x))
for y in range(h):
    q.append((y, 0))
    q.append((y, w - 1))

# Check if a pixel is background: not part of the white border and dark/teal
def is_bg(y, x):
    r, g, b, a = arr[y, x]
    # White border has high brightness
    if r > 180 and g > 180 and b > 180:
        return False
    # Orange / red badge content
    if r > 120 and (r > g + 30):
        return False
    # The outside background is dark teal / brownish
    return True

visited = np.zeros((h, w), dtype=bool)

while q:
    y, x = q.popleft()
    if visited[y, x]:
        continue
    visited[y, x] = True

    if is_bg(y, x):
        mask[y, x] = True
        for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
                q.append((ny, nx))

# Apply transparency
clean_arr = arr.copy()
clean_arr[mask, 3] = 0

clean_img = Image.fromarray(clean_arr)
clean_img.save('public/images/chill_mama_logo_transparent.png')
print("Saved clean transparent logo: public/images/chill_mama_logo_transparent.png")
