const swiperAbout = () => {
    new Swiper('.about__container', {
        // slidesPerView: 3,
        spaceBetween: 8,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            1200: {
                // height: 800,
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
                // height: 1024,
            },
            320: {
                height: 640,
            }
        }
    });

};

export default swiperAbout;
