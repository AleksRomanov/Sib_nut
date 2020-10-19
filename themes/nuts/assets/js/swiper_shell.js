const swiperShell = () => {
    var swiperShell = new Swiper('.catalog__container-shell', {
        // slidesPerView: 2,
        init: false,
        spaceBetween: 10,
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
            nextEl: '.catalog__slide-controls-shell--next',
            prevEl: '.catalog__slide-controls-shell--prev',
        },

        on: {
            init: function () {
                var fullScreenImageSlide = document.querySelectorAll('.catalog__container-shell-slide');
                var popupOilFullScreen = document.querySelector('.catalog__shell--full');
                var pageBody = document.querySelector('body');
                var closeButton = document.querySelector('.catalog__shell-full-close');


                fullScreenImageSlide.forEach(function (imageSlide) {
                    imageSlide.addEventListener('click', function () {
                        popupOilFullScreen.classList.add('catalog__shell-show');
                        pageBody.classList.add('overflow-hidden--js');
                        swiperFull.init();
                        swiperFull.slideReset();
                        swiperFull.slideTo(swiperShell.clickedIndex);
                    })
                })
                closeButton.addEventListener('click', function () {
                    popupOilFullScreen.classList.remove('catalog__shell-show');
                    pageBody.classList.remove('overflow-hidden--js');
                })
            }
        }
    });

    var swiperFull = new Swiper('.show-full-shell--js', {
        init: false,
        preloadImages: false,
        lazy: true,
        zoom: true,
        centeredSlides: true,
        slidesPerView: 1,
        autoHeight: true,

        navigation: {
            nextEl: '.catalog__slide-controls-shell--next',
            prevEl: '.catalog__slide-controls-shell--prev',
        },

    });

    window.swiperShell = {
        swiper: swiperShell
    };
};

export default swiperShell;


