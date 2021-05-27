let $mainGallery = document.querySelector('.main-gallery');
if($mainGallery) {
    let $nav = $mainGallery.querySelector('.main-gallery__nav');
    let $images = $mainGallery.querySelector('.main-gallery__images');
    let dataNavSlider;
    let dataImagesslider;

    function mobileSlider() {
        if(document.documentElement.clientWidth <= 767 && $nav.dataset.mobile == 'false') {
            dataNavSlider = new Swiper($nav, {
                slidesPerView: 1,
                speed: 800,
                spaceBetween: 15,
            });

            $nav.dataset.mobile = 'true';

            //mySwiper.slideNext(0);
        }

        if(document.documentElement.clientWidth > 767) {
            $nav.dataset.mobile = 'false';

            if($nav.classList.contains('swiper-container-initialized')) {
                dataNavSlider.destroy();
            }
        }
    }

    mobileSlider();

    window.addEventListener('resize', () => {
        mobileSlider();
    })

    dataImagesslider = new Swiper($images, {
        spaceBetween: 20,
        speed: 800,
        effect: document.documentElement.clientWidth < 768 ? 'slide' : 'fade',
        preloadImages: false,
        autoHeight: true,
        lazy: {
            loadPrevNext: true,
        },
        navigation: {
            nextEl: $mainGallery.querySelector('.slider-btn_next'),
            prevEl: $mainGallery.querySelector('.slider-btn_prev'),
        },
        watchSlidesVisibility: true,
    });

    if(document.documentElement.clientWidth < 768) {
        dataImagesslider.controller.control = dataNavSlider;
        dataNavSlider.controller.control = dataImagesslider;
    }

    window.addEventListener('resize', () => {
        if(document.documentElement.clientWidth < 768) {
            dataImagesslider.controller.control = dataNavSlider;
            dataNavSlider.controller.control = dataImagesslider;
        } else {
            dataImagesslider.controller.control = false;
        }
    })


    let navItems = document.querySelectorAll('.main-gallery__nav-item');
    if(navItems.length) {
        navItems.forEach(item => {
            let id = item.dataset.index;
            item.addEventListener('click', () => {
                if(document.documentElement.clientWidth > 767.98) {
                    dataImagesslider.slideTo(id);
                    
                    item.classList.add('active');
                    navItems.forEach(i => {
                        if(i === item) return;
                        i.classList.remove('active')
                    })
                }
            })
        })
    }

}