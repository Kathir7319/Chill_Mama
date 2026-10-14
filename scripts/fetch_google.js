const https = require('https');

const url = 'https://www.google.com/search?q=Chill+Mama+%E2%80%93+Fusion+Indian+Food+Truck&hl=en';

const req = https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    const matches = data.match(/https:\/\/(?:lh\d\.googleusercontent\.com|encrypted-tbn\d\.gstatic\.com)\/[^\s"'\\]+/g) || [];
    const unique = [...new Set(matches)];
    console.log('Found images count:', unique.length);
    console.log(unique.slice(0, 20));
  });
});

req.on('error', err => {
  console.error('Error:', err);
});
