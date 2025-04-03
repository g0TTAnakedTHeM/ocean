import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/assets/images');
const outputDir = path.join(__dirname, '../public/assets/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image optimization settings
const mobileSettings = {
  width: 300,
  quality: 80,
  format: 'jpeg'
};

const desktopSettings = {
  width: 600,
  quality: 80,
  format: 'jpeg'
};

// List of images to optimize
const images = [
  'IMG_8229.JPG',
  'hotel8 2.jpg',
  'TNL_9631 2.jpg',
  '5.JPG',
  'IMG_2830 2.jpg',
  'hotel3 2.jpg',
  'L1250573 2.jpg',
  'DSC_7136 2.JPG',
  'DSC_3165.JPG',
  'baleal.png',
  '17.JPEG'
];

// Optimize each image
for (const image of images) {
  try {
    const inputPath = path.join(inputDir, image);
    const baseName = path.basename(image, path.extname(image));
    
    // Mobile version
    await sharp(inputPath)
      .resize(mobileSettings.width)
      .jpeg({ quality: mobileSettings.quality })
      .toFile(path.join(outputDir, `${baseName}-mobile.jpg`));
    
    // Desktop version
    await sharp(inputPath)
      .resize(desktopSettings.width)
      .jpeg({ quality: desktopSettings.quality })
      .toFile(path.join(outputDir, `${baseName}-desktop.jpg`));
    
    console.log(`Optimized ${image}`);
  } catch (error) {
    console.error(`Error optimizing ${image}:`, error);
  }
} 