const swiperCrushed = () => {
    var swiperCrushed = new Swiper('.catalog__container-crushed', {
        spaceBetween: 10,
        init: false,
        preloadImages: false,
        lazy: true,
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
        navigation: {
            nextEl: '.catalog__slide-controls-crushed--next',
            prevEl: '.catalog__slide-controls-crushed--prev',
        },

        on: {
            init: function () {
                var fullScreenImageSlide = document.querySelectorAll('.catalog__container-crushed-slide');
                var popupOilFullScreen = document.querySelector('.catalog__crushed--full');
                var pageBody = document.querySelector('body');
                var closeButton = document.querySelector('.catalog__crushed-full-close');


                fullScreenImageSlide.forEach(function (imageSlide) {
                    imageSlide.addEventListener('click', function () {
                        popupOilFullScreen.classList.add('catalog__crushed-show');
                        pageBody.classList.add('overflow-hidden--js');
                        swiperFull.init();
                        swiperFull.slideReset();
                        swiperFull.slideTo(swiperCrushed.clickedIndex);
                    })
                })
                closeButton.addEventListener('click', function () {
                    popupOilFullScreen.classList.remove('catalog__crushed-show');
                    pageBody.classList.remove('overflow-hidden--js');
                })
            }
        }
    });

    var swiperFull = new Swiper('.show-full-crushed--js', {
        init: false,
        preloadImages: false,
        lazy: true,
        zoom: true,
        centeredSlides: true,
        slidesPerView: 1,
        autoHeight: true,

        navigation: {
            nextEl: '.catalog__slide-controls-crushed--next',
            prevEl: '.catalog__slide-controls-crushed--prev',
        },

    });

    window.swiperCrushed = {
        swiper: swiperCrushed
    };
};

export default swiperCrushed;
