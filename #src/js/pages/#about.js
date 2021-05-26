let $ourTeam = document.querySelector('.our-team');
if($ourTeam) {
    let dataSlider = new Swiper($ourTeam.querySelector('.our-team__slider'), {
        speed: 800,
        navigation: {
            nextEl: $ourTeam.querySelector('.slider-btn_next'),
            prevEl: $ourTeam.querySelector('.slider-btn_prev'),
        },
        
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 'auto',
                spaceBetween: 51,
            },
        },
    });
}