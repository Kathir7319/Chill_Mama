const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images', 'google_dishes');
const files = fs.readdirSync(dir);

console.log('Files in google_dishes:');
files.forEach(f => {
  const stat = fs.statSync(path.join(dir, f));
  console.log(`${f}: ${stat.size} bytes`);
});
