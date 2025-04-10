// This script optimizes videos for web and mobile using FFmpeg
// Requires FFmpeg to be installed on your system
// Run with: node scripts/optimize-video.js

import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const inputVideo = path.join(__dirname, '../public/assets/videos/hero_compressed_g.mp4');
const outputMobileVideo = path.join(__dirname, '../public/assets/videos/hero_mobile.mp4');
const outputTabletVideo = path.join(__dirname, '../public/assets/videos/hero_tablet.mp4');

// Create directory if it doesn't exist
const outputDir = path.join(__dirname, '../public/assets/videos');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// FFmpeg commands
// Mobile version - target ~1.5MB (360p, lower bitrate)
const mobileCmd = `ffmpeg -i "${inputVideo}" -vf "scale=640:-2" -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 64k -movflags +faststart "${outputMobileVideo}"`;

// Tablet version - target ~3MB (540p, medium bitrate)
const tabletCmd = `ffmpeg -i "${inputVideo}" -vf "scale=960:-2" -c:v libx264 -crf 24 -preset slow -c:a aac -b:a 96k -movflags +faststart "${outputTabletVideo}"`;

console.log('Starting video optimization...');

// Execute mobile optimization
exec(mobileCmd, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error optimizing mobile video: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log('FFmpeg log:', stderr);
  }
  
  const mobileSize = fs.statSync(outputMobileVideo).size / (1024 * 1024);
  console.log(`Mobile video optimized: ${mobileSize.toFixed(2)} MB`);
  
  // After mobile completes, run tablet optimization
  exec(tabletCmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error optimizing tablet video: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log('FFmpeg log:', stderr);
    }
    
    const tabletSize = fs.statSync(outputTabletVideo).size / (1024 * 1024);
    console.log(`Tablet video optimized: ${tabletSize.toFixed(2)} MB`);
    console.log('Video optimization complete.');
  });
}); 