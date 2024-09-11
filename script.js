// ... previous JavaScript code ...

// Example for sound1 (repeat for other sounds)
const sound1 = document.getElementById('sound1');
const playButton1 = document.getElementById('playButton1');
const pauseButton1 = document.getElementById('pauseButton1');
const stopButton1 = document.getElementById('stopButton1');
const controls1 = document.getElementById('controls1');

playButton1.addEventListener('click', () => {
    sound1.play();
    controls1.style.display = 'block'; 
});

pauseButton1.addEventListener('click', () => {
    sound1.pause();
});

stopButton1.addEventListener('click', () => {
    sound1.pause();
    sound1.currentTime = 0; 
    controls1.style.display = 'none'; 
});

// ... rest of the JavaScript code ...


// Handle click events for archive images
archiveImages.forEach(image => {
    image.addEventListener('click', () => {
        const pdfSrc = image.getAttribute('data-pdf');
        const imageOverlay = image.parentNode; // Get the parent .image-overlay element

        if (pdfSrc) {
            pdfCanvas.src = pdfSrc;
            pdfViewer.classList.remove('hidden'); // Show the PDF viewer

            // Add the border class to the image overlay
            imageOverlay.classList.add('bordered');
        } else {
            console.error('No PDF source found for this image.');
        }
    });
});

const images = document.querySelectorAll('.archive-image');
const avsluttButton = document.getElementById('avslutt');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // remove active class from all images
    images.forEach((img) => img.classList.remove('active'));
    // add active class to the clicked image
    image.classList.add('active');
  });
});

avsluttButton.addEventListener('click', () => {
  // remove active class from all images
  images.forEach((img) => img.classList.remove('active'));
});