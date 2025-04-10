#!/bin/bash

# This script optimizes all videos used in the website
# Requires FFmpeg to be installed on your system
# Run with: bash scripts/optimize-all-videos.sh

# Set working directory to project root
cd "$(dirname "$0")/.."

# Create optimized directory if it doesn't exist
mkdir -p public/assets/videos/optimized

echo "Starting video optimization for all site videos..."

# Videos used in VideoGrid component
VIDEOGRID_VIDEOS=(
  "11.mp4"
  "13-2.mp4"
  "19.mp4"
  "3.mp4"
  "12-2.mp4"
  "15.mp4"
)

# Process each VideoGrid video
for VIDEO in "${VIDEOGRID_VIDEOS[@]}"; do
  INPUT="public/assets/videos/$VIDEO"
  OUTPUT_MOBILE="public/assets/videos/optimized/${VIDEO%.mp4}_mobile.mp4"
  OUTPUT_TABLET="public/assets/videos/optimized/${VIDEO%.mp4}_tablet.mp4"
  
  echo "Optimizing $VIDEO..."
  
  # Mobile version - target ~1.5MB (360p, lower bitrate)
  echo "  Creating mobile version..."
  ffmpeg -y -i "$INPUT" -vf "scale=640:-2" -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 64k -movflags +faststart "$OUTPUT_MOBILE"
  
  # Get file size of mobile version
  MOBILE_SIZE=$(du -h "$OUTPUT_MOBILE" | cut -f1)
  echo "  Mobile version ($MOBILE_SIZE) created at: $OUTPUT_MOBILE"
  
  # Tablet version - target ~3MB (540p, medium bitrate)
  echo "  Creating tablet version..."
  ffmpeg -y -i "$INPUT" -vf "scale=960:-2" -c:v libx264 -crf 24 -preset slow -c:a aac -b:a 96k -movflags +faststart "$OUTPUT_TABLET"
  
  # Get file size of tablet version
  TABLET_SIZE=$(du -h "$OUTPUT_TABLET" | cut -f1)
  echo "  Tablet version ($TABLET_SIZE) created at: $OUTPUT_TABLET"
done

echo "All videos have been optimized successfully!" 