const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    console.log('Has natural_crowded_truck:', data.includes('natural_crowded_truck'));
    const matches = data.match(/\/images\/[a-zA-Z0-9_\-\.]+/g) || [];
    console.log('Images in HTML:');
    [...new Set(matches)].forEach(m => console.log(' - ' + m));
  });
}).on('error', err => {
  console.error('Error:', err.message);
});
