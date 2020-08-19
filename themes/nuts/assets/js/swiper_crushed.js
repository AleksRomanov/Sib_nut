const swiperCrushed = () => {
    let swiperCrushed = new Swiper('.catalog__container-crushed', {
        spaceBetween: 10,
        init: false,
        // allowTouchMove: true,

        breakpoints: {
            1920: {
                direction: 'horizontal',
                slidesPerView: 3,
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
            nextEl: '.catalog__slide-controls-crushed--next',
            prevEl: '.catalog__slide-controls-crushed--prev',
        },
    });
    window.swiperCrushed = {
        swiper: swiperCrushed
    };
};

export default swiperCrushed;
