const swiperMembrane = () => {
    var swiperMembrane = new Swiper('.catalog__container-membrane', {
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
            nextEl: '.catalog__slide-controls-membrane--next',
            prevEl: '.catalog__slide-controls-membrane--prev',
        },

        on: {
            init: function () {
                var fullScreenImageSlide = document.querySelectorAll('.catalog__container-membrane-slide');
                var popupOilFullScreen = document.querySelector('.catalog__membrane--full');
                var pageBody = document.querySelector('body');
                var closeButton = document.querySelector('.catalog__membrane-full-close');


                fullScreenImageSlide.forEach(function (imageSlide) {
                    imageSlide.addEventListener('click', function () {
                        popupOilFullScreen.classList.add('catalog__membrane-show');
                        pageBody.classList.add('overflow-hidden--js');
                        swiperFull.init();
                        swiperFull.slideReset();
                        swiperFull.slideTo(swiperMembrane.clickedIndex);
                    })
                })
                closeButton.addEventListener('click', function () {
                    popupOilFullScreen.classList.remove('catalog__membrane-show');
                    pageBody.classList.remove('overflow-hidden--js');
                })
            }
        }
    });

    var swiperFull = new Swiper('.show-full-membrane--js', {
        init: false,
        preloadImages: false,
        lazy: true,
        zoom: true,
        centeredSlides: true,
        slidesPerView: 1,
        autoHeight: true,

        navigation: {
            nextEl: '.catalog__slide-controls-membrane--next',
            prevEl: '.catalog__slide-controls-membrane--prev',
        },

    });

    window.swiperMembrane = {
        swiper: swiperMembrane
    };
};

export default swiperMembrane;
