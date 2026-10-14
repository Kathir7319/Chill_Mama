const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'public', 'images', 'google_dishes');
const destDir = path.join(__dirname, '..', 'public', 'images', 'dishes');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const mapping = {
  'chicken_sandwich_one_photo_22.jpg': 'chicken_burger.jpg',
  'monk_burger_one_review_23.jpg': 'monk_burger.jpg',
  'paneer_tikka_roll_one_photo_24.jpg': 'paneer_frankie.jpg',
  'breakfast_burrito_one_photo_25.jpg': 'chicken_frankie.jpg',
  'masala_puri_6_reviews_13.jpg': 'masala_puri.jpg',
  'crunch_fix_chaat_2_photos_14.jpg': 'crunch_chaat.jpg',
  'peri_peri_fries_one_review_15.jpg': 'peri_peri_fries.jpg',
  'peri_peri_gobi_bites_one_rev_19.jpg': 'gobi_bites.jpg',
  'peri_peri_popcorn_chicken_bite_20.jpg': 'popcorn_chicken.jpg',
  'cajun_potato_4_reviews_18.jpg': 'cajun_potatoes.jpg',
  'fusion_pepper_mushroom_2_rev_16.jpg': 'pepper_mushroom.jpg',
  'bun_maska_2_reviews_on_17.jpg': 'bun_maska.jpg',
  'veg_9_reviews_one_phot_21.jpg': 'veg_special.jpg'
};

for (const [src, dest] of Object.entries(mapping)) {
  const srcFile = path.join(srcDir, src);
  const destFile = path.join(destDir, dest);
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destFile);
    console.log(`Copied: ${src} -> ${dest}`);
  } else {
    console.warn(`Source not found: ${srcFile}`);
  }
}

console.log('Organize complete!');
