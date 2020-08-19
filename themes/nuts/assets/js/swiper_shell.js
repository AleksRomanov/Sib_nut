const swiperShell = () => {
    let swiperShell = new Swiper('.catalog__container-shell', {
        // slidesPerView: 2,
        init: false,
        spaceBetween: 10,
        // direction: 'horizontal',
        breakpoints: {
            1920: {
                direction: 'horizontal',
                slidesPerView: 3,
            },
            1200: {
                // height: 800,
                slidesPerView: 1,

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
        },
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


