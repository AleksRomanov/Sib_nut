const swiperMaps = () => {
    new Swiper('.map__container', {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: '.map__slider-control--next',
            prevEl: '.map__slider-control--prev',
        },

        breakpoints: {
            1200: {
                slidesPerView: 2,
                // height: 1024,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        }
    });
};

export default swiperMaps;
