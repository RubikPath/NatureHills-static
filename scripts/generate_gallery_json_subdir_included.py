import os
import json

BASE_DIR = '../images-copy'
OUTPUT_JSON = 'PhotoGallery.json'
IMAGE_EXTENSIONS = ('.jpg', '.jpeg', '.png', '.webp')

gallery = {}

# Get parent directory to compute correct relative paths
BASE_PARENT = os.path.abspath(os.path.join(BASE_DIR, os.pardir))

for root, dirs, files in os.walk(BASE_DIR):
    # Key: relative folder inside BASE_DIR
    rel_dir = os.path.relpath(root, BASE_DIR)
    rel_dir = '' if rel_dir == '.' else rel_dir

    # Get all images in this folder
    image_files = [
        os.path.join(root, f)
        for f in files
        if f.lower().endswith(IMAGE_EXTENSIONS)
    ]

    # Path relative to BASE_PARENT so your site can use it directly
    rel_paths = [
        os.path.relpath(path, BASE_PARENT) for path in image_files
    ]

    if rel_paths:
        gallery[rel_dir] = rel_paths

with open(OUTPUT_JSON, 'w') as f:
    json.dump(gallery, f, indent=2)

print(f'✅ Gallery JSON created: {OUTPUT_JSON}')

