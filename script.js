document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const videos = document.querySelectorAll('.video-carousel video');
    const prevButton = document.querySelector('#prev');
    const nextButton = document.querySelector('#next');
    
    // Animation de l'apparition des sections
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
    const triggerHeight = window.innerHeight / 1.3;  // Ajuster selon l'effet souhaité

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerHeight) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});


    function showVideo(index) {
        videos.forEach((video, i) => {
            video.style.display = (i === index) ? 'block' : 'none';
        });
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? videos.length - 1 : currentIndex - 1;
        showVideo(currentIndex);
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex === videos.length - 1) ? 0 : currentIndex + 1;
        showVideo(currentIndex);
    });

    // Show the first video initially
    showVideo(currentIndex);
});
