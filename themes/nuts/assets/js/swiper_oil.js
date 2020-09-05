const swiperOil = () => {
    var swiperOil = new Swiper('.catalog__slider-oil', {
        spaceBetween: 10,
        init: false,
        centeredSlides: true,
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
                var fullScreenImageSlide = document.querySelectorAll('.catalog__slider-oil-slide');
                var popupOilFullScreen = document.querySelector('.catalog__oil--full');
                var pageBody = document.querySelector('body');
                var closeButton = document.querySelector('.catalog__oil-full-close');


                fullScreenImageSlide.forEach(function (imageSlide) {
                    imageSlide.addEventListener('click', function () {
                        popupOilFullScreen.classList.add('catalog__oil-show');
                        pageBody.classList.add('overflow-hidden--js');
                        swiperFull.init();
                        swiperFull.slideReset();
                        swiperFull.slideTo(swiperProductsPacking.clickedIndex);
                    })
                })
                closeButton.addEventListener('click', function () {
                    popupOilFullScreen.classList.remove('catalog__oil-show');
                    pageBody.classList.remove('overflow-hidden--js');
                })
            }
        }
        // navigation: {
        //     nextEl: '.catalog__slide-controls-membrane--next',
        //     prevEl: '.catalog__slide-controls-membrane--prev',
        // },
    });

    var swiperFull = new Swiper('.show-full-oil--js', {
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

    window.swiperOil = {
        swiper: swiperOil
    };
};

export default swiperOil;
