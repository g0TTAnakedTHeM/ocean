# Video Optimization for Web Performance

This directory contains scripts to help optimize videos for better web performance, particularly for mobile devices.

## Optimizing the Hero Video

The hero video is one of the largest assets on the website, and optimizing it can significantly improve load times. We've provided two methods to optimize the video:

### Using the Node.js Script

For those who prefer JavaScript:

1. Make sure you have Node.js installed
2. Ensure FFmpeg is installed on your system:
   - Mac: `brew install ffmpeg`
   - Ubuntu/Debian: `sudo apt install ffmpeg`
   - Windows: [Download FFmpeg](https://www.ffmpeg.org/download.html)
3. Run the script:
   ```
   node scripts/optimize-video.js
   ```

### Using the Shell Script

For those who prefer shell scripts:

1. Ensure FFmpeg is installed on your system (see above)
2. Make the script executable:
   ```
   chmod +x scripts/optimize-video.sh
   ```
3. Run the script:
   ```
   bash scripts/optimize-video.sh
   ```

## What the Scripts Do

The scripts create two optimized versions of the hero video:

1. **Mobile version (hero_mobile.mp4)**:
   - Resolution: 640px width (360p)
   - Target size: ~1.5MB
   - Higher compression (CRF 28)
   - Lower audio bitrate (64k)

2. **Tablet version (hero_tablet.mp4)**:
   - Resolution: 960px width (540p)
   - Target size: ~3MB
   - Medium compression (CRF 24)
   - Medium audio bitrate (96k)

The original video is kept for desktop users.

## Video Optimization Tips

- Use the lowest resolution that still looks good
- Choose an appropriate CRF value (18-28, where higher means more compression)
- Keep video length as short as possible
- Consider using WebM format for browsers that support it
- For background videos, remove audio entirely to save bandwidth 