const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const jobs = [
  { in: 'src/assets/HNGO_LOGO.jpeg', out: 'src/assets/HNGO_LOGO', width: 192 },
  { in: 'src/assets/Dr_Ezebue_Edafe.jpeg', out: 'src/assets/Dr_Ezebue_Edafe', width: 840 },
  { in: 'src/assets/hero.jpeg', out: 'src/assets/hero', width: 1600 },
  { in: 'src/assets/story-panel.jpeg', out: 'src/assets/story-panel', width: 800 },
];

const galleryDir = 'src/assets/gallery';
for (const f of fs.readdirSync(galleryDir)) {
  const name = path.basename(f, '.jpeg');
  jobs.push({ in: path.join(galleryDir, f), out: path.join(galleryDir, name), width: 700 });
}

(async () => {
  for (const j of jobs) {
    const img = sharp(j.in).rotate().resize({ width: j.width, withoutEnlargement: true });
    await img.clone().jpeg({ quality: 78, mozjpeg: true }).toFile(j.out + '.jpg');
    await img.clone().webp({ quality: 76 }).toFile(j.out + '.webp');
    const jpgSize = fs.statSync(j.out + '.jpg').size;
    const webpSize = fs.statSync(j.out + '.webp').size;
    console.log(j.in, '->', (jpgSize / 1024).toFixed(0) + 'KB jpg', (webpSize / 1024).toFixed(0) + 'KB webp');
  }
})();
