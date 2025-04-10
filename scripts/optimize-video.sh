#!/bin/bash

# This script optimizes videos for web and mobile using FFmpeg
# Requires FFmpeg to be installed on your system
# Run with: bash scripts/optimize-video.sh

# Set working directory to project root
cd "$(dirname "$0")/.."

# Paths
INPUT_VIDEO="public/assets/videos/hero_compressed_g.mp4"
OUTPUT_MOBILE="public/assets/videos/hero_mobile.mp4"
OUTPUT_TABLET="public/assets/videos/hero_tablet.mp4"

echo "Starting video optimization..."

# Mobile version - target ~1.5MB (360p, lower bitrate)
ffmpeg -i "$INPUT_VIDEO" -vf "scale=640:-2" -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 64k -movflags +faststart "$OUTPUT_MOBILE"

# Get file size of mobile version
MOBILE_SIZE=$(du -h "$OUTPUT_MOBILE" | cut -f1)
echo "Mobile video optimized: $MOBILE_SIZE"

# Tablet version - target ~3MB (540p, medium bitrate)
ffmpeg -i "$INPUT_VIDEO" -vf "scale=960:-2" -c:v libx264 -crf 24 -preset slow -c:a aac -b:a 96k -movflags +faststart "$OUTPUT_TABLET"

# Get file size of tablet version
TABLET_SIZE=$(du -h "$OUTPUT_TABLET" | cut -f1)
echo "Tablet video optimized: $TABLET_SIZE"

echo "Video optimization complete." 