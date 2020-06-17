const swiperSertificates = () => {
    new Swiper('.sertificates__swiper', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
