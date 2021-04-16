const swiperEastPacking = () => {
    let swiperEastPacking = new Swiper('.catalog__container-east', {
        init: false,
        spaceBetween: 10,
        preloadImages: false,
        lazy: true,

        navigation: {
            nextEl: '.catalog__slide-controls-east--next',
            prevEl: '.catalog__slide-controls-east--prev',
        },

        breakpoints: {
            1920: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
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
                var fullScreenImageSlide = document.querySelectorAll('.catalog__container-east-slide');
                var popupFullScreen = document.querySelector('.catalog__east--full');
                var pageBody = document.querySelector('body');
                var closeButton = document.querySelector('.catalog__east-full-close');


                fullScreenImageSlide.forEach(function (imageSlide) {
                    imageSlide.addEventListener('click', function () {
                        popupFullScreen.classList.add('catalog__east-show');
                        pageBody.classList.add('overflow-hidden--js');
                        swiperFull.init();
                        swiperFull.slideReset();
                        swiperFull.slideTo(swiperEastPacking.clickedIndex);
                    })
                })
                closeButton.addEventListener('click', function () {
                    popupFullScreen.classList.remove('catalog__east-show');
                    pageBody.classList.remove('overflow-hidden--js');
                })
            }
        }
    });

    let swiperFull = new Swiper('.show-full-east--js', {
        init: false,
        preloadImages: false,
        lazy: true,
        zoom: true,
        centeredSlides: true,
        slidesPerView: 1,
        autoHeight: false,

        // navigation: {
        //     nextEl: '.catalog__slide-controls-east--next',
        //     prevEl: '.catalog__slide-controls-east--prev',
        // },

    });
    window.swiperEastPacking = {
        swiper: swiperEastPacking
    };
};

export default swiperEastPacking;
