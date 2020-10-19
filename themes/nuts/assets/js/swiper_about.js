const swiperAbout = () => {
    new Swiper('.about__container', {
        // slidesPerView: 3,
        autoHeight: false,
        spaceBetween: 8,
        preloadImages: false,
        lazy: true,
        navigation: {
            nextEl: '.about__swiper-control--next',
            prevEl: '.about__swiper-control--prev',
        },

        breakpoints: {
            1200: {
                // height: 800,
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 1,
                // height: 1024,
            },
            576: {
                slidesPerView: 1,
                // height: 1024,
            },
            320: {
                // height: 640,
            }
        }
    });

};

export default swiperAbout;
