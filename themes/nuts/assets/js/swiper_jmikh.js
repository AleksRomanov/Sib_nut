const swiperJmikh = () => {
    var swiperJmikh = new Swiper('.catalog__slider-jmikh', {
        spaceBetween: 10,
        init: false,
        // allowTouchMove: true,

        breakpoints: {
            1920: {
                // direction: 'horizontal',
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
                // height: 1024,
            },
            320: {
                // allowTouchMove: true,
                slidesPerView: 1,
            }
        },

        on: {
            init: function () {
                var fullScreenImageSlide = document.querySelectorAll('.catalog__slider-jmikh-slide');
                var popupOilFullScreen = document.querySelector('.catalog__jmikh--full');
                var pageBody = document.querySelector('body');
                var closeButton = document.querySelector('.catalog__jmikh-full-close');


                fullScreenImageSlide.forEach(function (imageSlide) {
                    imageSlide.addEventListener('click', function () {
                        popupOilFullScreen.classList.add('catalog__jmikh-show');
                        pageBody.classList.add('overflow-hidden--js');
                        swiperFull.init();
                        swiperFull.slideReset();
                        swiperFull.slideTo(swiperProductsPacking.clickedIndex);
                    })
                })
                closeButton.addEventListener('click', function () {
                    popupOilFullScreen.classList.remove('catalog__jmikh-show');
                    pageBody.classList.remove('overflow-hidden--js');
                })
            }
        }

    });

    var swiperFull = new Swiper('.show-full-jmikh--js', {
        init: false,
        // Disable preloading of all images
        // preloadImages: false,
        // Enable lazy loading
        // lazy: true,
        zoom: true,
        centeredSlides: true,
        slidesPerView: 1,
        autoHeight: true,

        // navigation: {
        //     nextEl: '.catalog__slide-controls--next',
        //     prevEl: '.catalog__slide-controls--prev',
        // },

    });

    window.swiperJmikh = {
        swiper: swiperJmikh
    };
};

export default swiperJmikh;
