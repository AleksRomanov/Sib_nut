const swiperPartners = () => {
    new Swiper('.swiper__partners', {
        // slidesPerView: 1,
        autoHeight: false,
        // direction: 'vertical',
        spaceBetween: 8,
        navigation: {
            nextEl: '.swiper__partners-controls--next',
            prevEl: '.swiper__partners-controls--prev',
        },

        breakpoints: {
            1920: {
                // height: 800,
                slidesPerView: 5,
            },
            1790: {
                // height: 800,
                slidesPerView: 5,
            },
            1200: {
                // height: 800,
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 1,
                // width: 655,
                // height: 1024,
            },
            576: {
                slidesPerView: 1,
                // height: 1024,
            },
            320: {
                slidesPerView: 1,
                // height: 640,
            }
        }
    });

};

export default swiperPartners;
