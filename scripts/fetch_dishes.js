const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(dest);
      });
    }).on('error', reject);
  });
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,800']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36');

    console.log('Navigating to https://share.google/ZUrZ3djDNpN1wLkYH ...');
    await page.goto('https://share.google/ZUrZ3djDNpN1wLkYH', { waitUntil: 'networkidle2', timeout: 30000 });

    console.log('Current URL after redirect:', page.url());
    console.log('Page Title:', await page.title());

    // Wait 5 seconds for dynamic content / photos to load
    await new Promise(r => setTimeout(r, 5000));

    // Screenshot page for reference
    await page.screenshot({ path: path.join(__dirname, 'google_business_screenshot.png'), fullPage: false });
    console.log('Screenshot saved to scripts/google_business_screenshot.png');

    // Extract all image URLs on page
    const images = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs.map(img => ({
        src: img.src,
        alt: img.alt || '',
        width: img.naturalWidth || img.width,
        height: img.naturalHeight || img.height
      })).filter(img => img.src && (img.src.includes('googleusercontent.com') || img.src.includes('gstatic.com') || img.src.startsWith('http')));
    });

    console.log(`Found ${images.length} images on page:`);
    fs.writeFileSync(path.join(__dirname, 'extracted_images.json'), JSON.stringify(images, null, 2));

    images.slice(0, 15).forEach((img, i) => {
      console.log(`[${i}] ${img.alt || 'No alt'} (${img.width}x${img.height}) -> ${img.src.slice(0, 80)}...`);
    });

  } catch (err) {
    console.error('Error running puppeteer:', err);
  } finally {
    await browser.close();
  }
})();
