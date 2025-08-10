// Bootstrap JS (only keep one version to avoid conflicts)
const bootstrapScript = document.createElement('script');
bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
document.head.appendChild(bootstrapScript);

document.getElementById('openAmenitiesBtn').addEventListener('click', function () {
        var amenitiesModal = new bootstrap.Modal(document.getElementById('amenitiesModal'));
        amenitiesModal.show();
    });

// Hero Image Background Switcher
document.addEventListener('DOMContentLoaded', async () => {
    const bg1 = document.querySelector('.hero-bg-1');
    const bg2 = document.querySelector('.hero-bg-2');

    try {
        const response = await fetch('hero-images.json');
        if (!response.ok) {
            console.error('Failed to load JSON');
            return;
        }

        const data = await response.json();
        const images = data.images;

        if (!Array.isArray(images) || images.length === 0) {
            console.error('No images found in JSON.');
            return;
        }

        let index = 0;
        let isBg1Active = true;

        // Initial image
        bg1.style.backgroundImage = `url('${images[0]}')`;
        bg1.classList.add('active');

        setInterval(() => {
            index = (index + 1) % images.length;

            if (isBg1Active) {
                bg2.style.backgroundImage = `url('${images[index]}')`;
                bg2.classList.add('active');
                bg1.classList.remove('active');
            } else {
                bg1.style.backgroundImage = `url('${images[index]}')`;
                bg1.classList.add('active');
                bg2.classList.remove('active');
            }

            isBg1Active = !isBg1Active;
        }, 3000);

    } catch (error) {
        console.error('Error loading hero images:', error);
    }
});

// Disable Right-Click Context Menu
document.addEventListener('contextmenu', event => event.preventDefault());
