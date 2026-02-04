import os
import sys
from PIL import Image
from pathlib import Path

# Configuration
PUBLIC_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'public')
TARGET_WIDTHS = [640, 1024, 1920]  # Responsive widths
EXTENSIONS = {'.png', '.jpg', '.jpeg'}

def optimize_image(file_path):
    """
    Convert image to WebP and generate resized versions.
    """
    try:
        with Image.open(file_path) as img:
            # Convert to RGB if necessary (e.g. for PNG with transparency being saved as JPEG, though WebP handles RGBA)
            # For WebP, RGBA is fine.
            
            # 1. Generate WebP Base
            webp_path = file_path.with_suffix('.webp')
            if not webp_path.exists() or webp_path.stat().st_mtime < file_path.stat().st_mtime:
                print(f"Converting to WebP: {file_path.name}")
                img.save(webp_path, 'WEBP', quality=85)
            
            # 2. Generate Resized Versions (for srcset)
            original_width, original_height = img.size
            
            for width in TARGET_WIDTHS:
                if width >= original_width:
                    continue # Don't upscale
                
                # Calculate height to keep aspect ratio
                ratio = width / original_width
                height = int(original_height * ratio)
                
                resized_img = img.resize((width, height), Image.Resampling.LANCZOS)
                
                # Save as WebP
                resized_name = f"{file_path.stem}-{width}w.webp"
                resized_path = file_path.parent / resized_name
                
                if not resized_path.exists() or resized_path.stat().st_mtime < file_path.stat().st_mtime:
                    print(f"Generating resized: {resized_name}")
                    resized_img.save(resized_path, 'WEBP', quality=80)

    except Exception as e:
        print(f"Error processing {file_path}: {e}")

def main():
    print(f"Scanning directory: {PUBLIC_DIR}")
    
    count = 0
    for root, _, files in os.walk(PUBLIC_DIR):
        for file in files:
            file_path = Path(root) / file
            if file_path.suffix.lower() in EXTENSIONS:
                # Skip already resized versions (look for -XXXw patterns)
                if file_path.stem[-1] == 'w' and file_path.stem[-2].isdigit():
                     continue
                     
                optimize_image(file_path)
                count += 1
                
    print(f"Processed {count} source images.")

if __name__ == "__main__":
    # Check dependencies
    try:
        import PIL
    except ImportError:
        print("Pillow is not installed. Installing...")
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
        # Re-import after install
        import PIL
        
    main()
