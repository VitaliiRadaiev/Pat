let $gallerSlider = document.querySelector('.gallery__slider');
if($gallerSlider) {
    let dataSlider = new Swiper($gallerSlider.querySelector('.swiper-container'), {
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        slidesPerView: 'auto',
        spaceBetween: 0,
        speed: 800,
        loop: true,
        preloadImages: false,
        watchSlidesVisibility: true,
        lazy: {
        	loadPrevNext: true,
        },
        navigation: {
            nextEl: $gallerSlider.querySelector('.gallery__btn-next'),
            prevEl: $gallerSlider.querySelector('.gallery__btn-prev'),
        },
    });
    
}