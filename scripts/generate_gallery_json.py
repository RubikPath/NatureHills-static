import os
import json

BASE_DIR = '../images-copy'

IMAGE_EXTENSIONS = ('.jpg', '.jpeg', '.png', '.webp')

OUTPUT_JSON = 'gallery.json'

gallery = {}

for root, dirs, files in os.walk(BASE_DIR):
    rel_dir = os.path.relpath(root, BASE_DIR)
    rel_dir = '' if rel_dir == '.' else rel_dir

    image_files = [
        os.path.join(root, f)
        for f in files
        if f.lower().endswith(IMAGE_EXTENSIONS)
    ]

    rel_paths = [
        os.path.relpath(path, '.') for path in image_files
    ]

    if rel_paths:
        gallery[rel_dir] = rel_paths

with open(OUTPUT_JSON, 'w') as f:
    json.dump(gallery, f, indent=2)

print(f'✅ Gallery JSON created: {OUTPUT_JSON}')

