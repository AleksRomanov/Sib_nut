const swiperShell = () => {
    new Swiper('.catalog__container-shell', {
        // slidesPerView: 2,
        spaceBetween: 10,
        // direction: 'horizontal',
        breakpoints: {
            1920: {
                direction: 'horizontal',
                slidesPerView: 2,
            },
            // 1200: {
            //     // height: 800,
            //     slidesPerView: 2,
            //
            // },
            // 768: {
            //     slidesPerView: 2,
            //     // width: 655,
            //     // height: 1024,
            // },
            // 576: {
            //     slidesPerView: 1,
            //     // height: 1024,
            // },
            320: {
                slidesPerView: 1,
                // height: 640,
            }
        },
        navigation: {
            nextEl: '.catalog__slide-controls-shell--next',
            prevEl: '.catalog__slide-controls-shell--prev',
        },
    });
};

export default swiperShell;
