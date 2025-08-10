// ===== Language Toggle =====
const btnEn = document.getElementById('btn-en');
const btnMr = document.getElementById('btn-mr');
const aboutEn = document.getElementById('about-en');
const aboutMr = document.getElementById('about-mr');

if (btnEn && btnMr && aboutEn && aboutMr) {
    btnEn.addEventListener('click', () => {
        aboutEn.style.display = 'block';
        aboutMr.style.display = 'none';
        btnEn.classList.add('active');
        btnMr.classList.remove('active');
    });

    btnMr.addEventListener('click', () => {
        aboutEn.style.display = 'none';
        aboutMr.style.display = 'block';
        btnMr.classList.add('active');
        btnEn.classList.remove('active');
    });
}

// ===== Swiper Carousel =====
if (typeof Swiper !== 'undefined') {
    new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

// ===== YouTube Video Carousel =====
const videos = document.querySelectorAll('.carousel-video');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.getElementById('nextVideoBtn');
let currentIndex = 0;

function showVideo(index) {
    videos.forEach((video, i) => {
        if (i === index) {
            video.style.display = 'block';
            video.src = video.src.replace("&autoplay=0", "&autoplay=1");
        } else {
            video.style.display = 'none';
            video.src = video.src.replace("&autoplay=1", "&autoplay=0");
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active-dot', i === index);
    });
}

function nextVideo() {
    currentIndex = (currentIndex + 1) % videos.length;
    showVideo(currentIndex);
}

if (nextBtn) {
    nextBtn.addEventListener('click', nextVideo);
}

// ===== YouTube IFrame API for Auto-Advance =====
let players = [];
function onYouTubeIframeAPIReady() {
    videos.forEach((video, i) => {
        players[i] = new YT.Player(video, {
            events: {
                'onStateChange': function (event) {
                    if (event.data === YT.PlayerState.ENDED) {
                        nextVideo();
                    }
                }
            }
        });
    });
}

// Load YouTube IFrame API
const ytTag = document.createElement('script');
ytTag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(ytTag);

// Initial video display
if (videos.length > 0) {
    showVideo(currentIndex);
}

// ===== Gallery Loader =====
document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById('carousel-track');

    async function loadGallery() {
        let data = {};
        try {
            const response = await fetch('gallery.json');
            if (!response.ok) {
                console.error(`HTTP error! Status: ${response.status}`);
                return;
            }
            data = await response.json();
        } catch (err) {
            console.error('Failed to fetch or parse JSON:', err);
            return;
        }

        try {
            if (!data || typeof data !== 'object') {
                throw new Error('Gallery data is not valid.');
            }

            const images = [];
            Object.values(data).forEach(arr => {
                if (Array.isArray(arr)) {
                    arr.forEach(path => {
                        if (typeof path === 'string' && path.trim() !== '') {
                            images.push(path.trim());
                        }
                    });
                }
            });

            if (images.length === 0) {
                throw new Error('No valid images found.');
            }

            const finalImages = [...images, ...images];
            const imageElements = [];

            finalImages.forEach(path => {
                const img = document.createElement('img');
                img.src = path;
                img.alt = 'Gallery image';
                img.onerror = () => {
                    console.warn(`⚠️ Could not load image: ${path}`);
                    img.remove();
                };
                track.appendChild(img);
                imageElements.push(img);
            });

            const promises = imageElements.map(img => {
                return new Promise(resolve => {
                    if (img.complete) resolve();
                    else img.onload = resolve;
                });
            });

            Promise.all(promises).then(() => {
                track.classList.add('animate');
            });

        } catch (err) {
            console.error('Gallery processing error:', err);
            track.innerHTML = `<p style="color: red; text-align: center;">Could not load gallery images.</p>`;
        }
    }

    if (track) loadGallery();
});

// ===== Disable Right-Click =====
document.addEventListener('contextmenu', event => event.preventDefault());
