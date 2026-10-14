const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled',
      '--window-size=1400,900'
    ],
    ignoreDefaultArgs: ['--enable-automation']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1400, height: 900 });
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36');

    console.log('Navigating with stealth...');
    await page.goto('https://www.google.com/search?q=Chill+Mama+%E2%80%93+Fusion+Indian+Food+Truck+Morrisville+NC', { waitUntil: 'networkidle2', timeout: 30000 });
    
    console.log('URL:', page.url());
    console.log('Title:', await page.title());

    await new Promise(r => setTimeout(r, 4000));
    await page.screenshot({ path: path.join(__dirname, 'stealth_test.png') });

    const imgs = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img'))
        .map(i => ({ src: i.src, alt: i.alt, w: i.naturalWidth, h: i.naturalHeight }))
        .filter(i => i.src && i.w > 80 && i.h > 80);
    });

    console.log('Found large images:', imgs.length);
    imgs.forEach((img, i) => console.log(`[${i}] ${img.alt} (${img.w}x${img.h}): ${img.src.slice(0, 80)}`));

  } catch (err) {
    console.error('Stealth error:', err);
  } finally {
    await browser.close();
  }
})();
