document.addEventListener('DOMContentLoaded', function() {
    // Initialisation du carrousel Swiper.js
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Initialisation de ScrollReveal
    ScrollReveal().reveal('[data-scroll]', {
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        origin: 'bottom',
        interval: 100,
    });
});
