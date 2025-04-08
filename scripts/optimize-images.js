import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public');
const outputDir = path.join(__dirname, '../public/assets/images/new-optimized');

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
  'cacao3.jpg',
  'dinner 2.jpg',
  'DSC_1025.jpg',
  'DSC_3521.jpg',
  'DSC_9084 2.jpg',
  'DSC_9522.jpg',
  'IMG_8229.JPG',
  'massage.jpg',
  'morning routine 2.jpg',
  'Photo2.jpg',
  'singing bowls 2.jpg',
  'sunsets .jpg',
  'surf 6.jpg',
  'TNL_9631 2.jpg',
  'TNL_9825 2.jpg',
  '5.JPG',
  '12.JPG',
  '18-2.JPG'
];

// Optimize each image
const optimizeImage = async (image) => {
  try {
    const inputPath = path.join(inputDir, image);
    // Clean the name for file saving - replace spaces with underscores and remove special characters
    const cleanName = path.basename(image, path.extname(image))
      .replace(/ /g, '_')
      .replace(/[()]/g, '')
      .replace(/[\s]/g, '_');
    
    // Mobile version
    await sharp(inputPath)
      .resize(mobileSettings.width)
      .jpeg({ quality: mobileSettings.quality })
      .toFile(path.join(outputDir, `${cleanName}-mobile.jpg`));
    
    // Desktop version
    await sharp(inputPath)
      .resize(desktopSettings.width)
      .jpeg({ quality: desktopSettings.quality })
      .toFile(path.join(outputDir, `${cleanName}-desktop.jpg`));
    
    console.log(`Optimized ${image}`);
  } catch (error) {
    console.error(`Error optimizing ${image}:`, error);
  }
};

// Process all images
const processImages = async () => {
  for (const image of images) {
    await optimizeImage(image);
  }
};

processImages(); 