# You need to install Pillow: pip install pillow
import os
from PIL import Image

def compress_image(input_path, output_path, max_size_kb=50):
    try:
        print(f"\n[INFO] Processing: {input_path}")

        # Skip if already small enough
        file_size_kb = os.path.getsize(input_path) // 1024
        if file_size_kb < max_size_kb:
            print(f"[SKIP] {input_path} ({file_size_kb}KB) is already < {max_size_kb}KB")
            return

        ext = os.path.splitext(input_path)[1].lower()

        with Image.open(input_path) as img:
            print(f"[INFO] Opened image. Format: {img.format}, Mode: {img.mode}, Size: {img.size}")

            if ext in ['.jpg', '.jpeg']:
                quality = 85
                print(f"[INFO] Compressing as JPEG. Starting quality={quality}")
                while True:
                    img.save(output_path, 'JPEG', quality=quality, optimize=True)
                    out_size_kb = os.path.getsize(output_path) // 1024
                    print(f"[DEBUG] Tried quality={quality} -> {out_size_kb}KB")
                    if out_size_kb <= max_size_kb or quality <= 20:
                        break
                    quality -= 5

            elif ext == '.png':
                print(f"[INFO] Compressing as PNG with varying compression levels")
                img = img.convert("RGBA")
                for compress_level in range(9, -1, -1):
                    img.save(output_path, 'PNG', optimize=True, compress_level=compress_level)
                    out_size_kb = os.path.getsize(output_path) // 1024
                    print(f"[DEBUG] Tried compress_level={compress_level} -> {out_size_kb}KB")
                    if out_size_kb <= max_size_kb:
                        break

            elif ext == '.webp':
                quality = 80
                print(f"[INFO] Compressing as WEBP. Starting quality={quality}")
                while True:
                    img.save(output_path, 'WEBP', quality=quality, method=6)
                    out_size_kb = os.path.getsize(output_path) // 1024
                    print(f"[DEBUG] Tried quality={quality} -> {out_size_kb}KB")
                    if out_size_kb <= max_size_kb or quality <= 20:
                        break
                    quality -= 5

            else:
                print(f"[WARN] Unsupported format: {ext} for {input_path}")
                return

        final_size_kb = os.path.getsize(output_path) // 1024
        print(f"[SUCCESS] Compressed {input_path} -> {output_path} ({final_size_kb}KB)")

    except Exception as e:
        print(f"[ERROR] Failed to compress {input_path}. Reason: {e}")


# Example usage for a folder:
folder = "/Users/omkar.darekar@cohesity.com/WORK/naturehills/NatureHills-static/images/services/"
print(f"\n[INFO] Starting compression for folder: {folder}")

if not os.path.isdir(folder):
    print(f"[ERROR] The folder does not exist: {folder}")
else:
    for fname in os.listdir(folder):
        fpath = os.path.join(folder, fname)
        if os.path.isfile(fpath):
            outpath = os.path.join(folder, fname)  # Overwrite original
            compress_image(fpath, outpath, max_size_kb=50)

print("\n[INFO] Compression run finished.")

