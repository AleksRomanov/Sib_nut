const swiperProductsPackingKernel = () => {
    let swiperProductsPackingKernel = new Swiper('.sal-slider-kernel--js', {
        // init: false,
        // zoom: true,
        spaceBetween: 8,
        // preloadImages: false,
        lazy: true,

        navigation: {
            nextEl: '.catalog__slide-controls--next',
            prevEl: '.catalog__slide-controls--prev',
        },

        breakpoints: {
            1200: {
                slidesPerView: 4,
                // allowTouchMove: false,
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
                var fullScreenImageSlide = document.querySelectorAll('.catalog__wrapper-box-packing-slide');
                var popupFullScreen = document.querySelector('.catalog__kernel--full');
                var pageBody = document.querySelector('body');
                var closeButton = document.querySelector('.catalog__full-close');


                fullScreenImageSlide.forEach(function (imageSlide) {
                    imageSlide.addEventListener('click', function () {
                        popupFullScreen.classList.add('show-full-catalog--js');
                        pageBody.classList.add('overflow-hidden--js');
                        swiperFull.init();
                        swiperFull.slideReset();
                        swiperFull.slideTo(swiperProductsPackingKernel.clickedIndex);
                    })
                })
                closeButton.addEventListener('click', function () {
                    popupFullScreen.classList.remove('show-full-catalog--js');
                    pageBody.classList.remove('overflow-hidden--js');
                })
            }
        }
    });

    let swiperFull = new Swiper('.catalog__wrapper-box-packing--full', {
        init: false,
        preloadImages: false,
        lazy: true,
        zoom: true,
        centeredSlides: true,
        slidesPerView: 1,
        autoHeight: false,

        navigation: {
            nextEl: '.catalog__slide-controls--next',
            prevEl: '.catalog__slide-controls--prev',
        },

    });
    window.swiperProductsPackingKernel = {
        swiper: swiperProductsPackingKernel
    };
};

export default swiperProductsPackingKernel;
