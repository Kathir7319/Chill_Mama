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
      if (res.statusCode !== 200) return reject(new Error(`Status ${res.statusCode}`));
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
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36');
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    });

    console.log('Navigating to Google Maps for Chill Mama Morrisville...');
    await page.goto('https://www.google.com/maps/search/Chill+Mama+10420+Chapel+Hill+Rd+Morrisville+NC', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 6000));

    // Look for photo buttons or background images in Google Maps
    const photoUrls = await page.evaluate(() => {
      const urls = new Set();
      // Look in all elements with background-image or img src
      document.querySelectorAll('*').forEach(el => {
        const bg = window.getComputedStyle(el).backgroundImage;
        if (bg && bg.includes('googleusercontent.com/p/')) {
          const match = bg.match(/https:\/\/[^"')]+/);
          if (match) urls.add(match[0]);
        }
        if (el.tagName === 'IMG' && el.src && el.src.includes('googleusercontent.com/p/')) {
          urls.add(el.src);
        }
      });
      return Array.from(urls);
    });

    console.log(`Found ${photoUrls.length} Google Maps user photo URLs:`);
    photoUrls.forEach(u => console.log(u));

    const outDir = path.join(__dirname, '..', 'public', 'images', 'real_truck');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    for (let i = 0; i < photoUrls.length; i++) {
      // Get full resolution image by replacing =w...-h... with =w1200-h800-k-no
      let fullUrl = photoUrls[i].split('=')[0] + '=w1200-h800-k-no';
      const file = path.join(outDir, `real_photo_${i + 1}.jpg`);
      try {
        await download(fullUrl, file);
        console.log(`Downloaded real photo: real_photo_${i + 1}.jpg`);
      } catch (e) {
        console.log(`Error downloading ${i}:`, e.message);
      }
    }

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await browser.close();
  }
})();
