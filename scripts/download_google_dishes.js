const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const https = require('https');

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with ${res.statusCode}`));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => { stream.close(); resolve(); });
    }).on('error', reject);
  });
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled',
      '--window-size=1600,1000'
    ],
    ignoreDefaultArgs: ['--enable-automation']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1600, height: 1000 });
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36');

    await page.goto('https://www.google.com/search?q=Chill+Mama+%E2%80%93+Fusion+Indian+Food+Truck+Morrisville+NC', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 4000));

    // Extract all dish details (title, description, price if available, and image URL)
    const dishesData = await page.evaluate(() => {
      const results = [];
      // Search for menu items / dish cards
      const allImgs = Array.from(document.querySelectorAll('img'));
      
      allImgs.forEach(img => {
        const src = img.src || '';
        if (src.includes('googleusercontent.com') || src.includes('gstatic.com') || src.startsWith('data:image')) {
          // find nearest text / label
          let parent = img.parentElement;
          let label = '';
          for (let i = 0; i < 4 && parent; i++) {
            const text = parent.innerText || '';
            if (text.length > 3 && text.length < 150) {
              label = text.replace(/\n+/g, ' - ').trim();
              break;
            }
            parent = parent.parentElement;
          }
          if (img.naturalWidth > 70 || src.includes('grass-cs')) {
            results.push({
              src,
              alt: img.alt || '',
              label: label || img.alt,
              w: img.naturalWidth,
              h: img.naturalHeight
            });
          }
        }
      });
      return results;
    });

    console.log(`Extracted ${dishesData.length} items`);
    const dishesDir = path.join(__dirname, '..', 'public', 'images', 'google_dishes');
    if (!fs.existsSync(dishesDir)) fs.mkdirSync(dishesDir, { recursive: true });

    const savedDishes = [];
    for (let i = 0; i < dishesData.length; i++) {
      const item = dishesData[i];
      let filename = `dish_${i + 1}`;
      if (item.label) {
        const cleanName = item.label.slice(0, 30).toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
        if (cleanName) filename = `${cleanName}_${i + 1}`;
      }

      if (item.src.startsWith('data:image')) {
        const matches = item.src.match(/^data:image\/([a-zA-Z]+);base64,(.+)$/);
        if (matches) {
          const ext = matches[1] === 'jpeg' ? 'jpg' : matches[1];
          const filepath = path.join(dishesDir, `${filename}.${ext}`);
          fs.writeFileSync(filepath, Buffer.from(matches[2], 'base64'));
          savedDishes.push({ file: `/images/google_dishes/${filename}.${ext}`, label: item.label, alt: item.alt });
          console.log(`Saved base64: ${filename}.${ext} (${item.label})`);
        }
      } else if (item.src.startsWith('http')) {
        const filepath = path.join(dishesDir, `${filename}.jpg`);
        try {
          await download(item.src, filepath);
          savedDishes.push({ file: `/images/google_dishes/${filename}.jpg`, label: item.label, alt: item.alt });
          console.log(`Saved http: ${filename}.jpg (${item.label})`);
        } catch (e) {
          console.log(`Failed download ${filename}:`, e.message);
        }
      }
    }

    fs.writeFileSync(path.join(dishesDir, 'manifest.json'), JSON.stringify(savedDishes, null, 2));
    console.log(`Manifest saved with ${savedDishes.length} dishes!`);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await browser.close();
  }
})();
