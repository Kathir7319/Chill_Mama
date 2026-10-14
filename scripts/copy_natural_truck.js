const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\Extreme\\.gemini\\antigravity\\brain\\dd4860f5-6e51-4607-bf87-add87d3e4ab3\\natural_food_truck_1792004701171.jpg';
const dest1 = path.join(__dirname, '..', 'public', 'images', 'food_truck_night.jpg');
const dest2 = path.join(__dirname, '..', 'public', 'images', 'natural_crowded_truck.jpg');

fs.copyFileSync(src, dest1);
fs.copyFileSync(src, dest2);

console.log('Successfully copied natural crowded food truck image to:');
console.log(dest1, fs.statSync(dest1).size, 'bytes');
console.log(dest2, fs.statSync(dest2).size, 'bytes');
