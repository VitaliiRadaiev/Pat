let $ports = document.querySelector('.ports');
if ($ports) {
    let dataSliderThembs;
    let dataSlider;

    dataSliderThembs = new Swiper($ports.querySelector('.ports__nav'), {
        speed: 800,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15,
                freeMode: false,
            },
            768: {
                slidesPerView: "auto",
                spaceBetween: 8,
                freeMode: true,
            },
        },
    });

    dataSlider = new Swiper($ports.querySelector('.ports__main-slider'), {
        spaceBetween: 0,
        speed: 800,
        effect: document.documentElement.clientWidth < 768 ? 'slide' : 'fade',
        preloadImages: false,
        lazy: {
            loadPrevNext: true,
        },
        navigation: {
            nextEl: $ports.querySelector('.slider-btn_next'),
            prevEl: $ports.querySelector('.slider-btn_prev'),
        },
        thumbs: {
            swiper: document.documentElement.clientWidth < 768 ? false : dataSliderThembs,
        }
    });

    if(document.documentElement.clientWidth < 768) {
        dataSlider.controller.control = dataSliderThembs;
        dataSliderThembs.controller.control = dataSlider;
    }
}