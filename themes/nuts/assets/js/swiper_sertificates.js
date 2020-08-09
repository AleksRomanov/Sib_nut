const swiperSertificates = () => {
    new Swiper('.sertificates__swiper', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: '.certificates__slider-controls--next',
            prevEl: '.certificates__slider-controls--prev',
        },

        breakpoints: {
            1200: {
                slidesPerView: 3,
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

export default swiperSertificates;
