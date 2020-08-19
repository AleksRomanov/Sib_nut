const swiperMembrane = () => {
    let swiperMembrane = new Swiper('.catalog__container-membrane', {
        spaceBetween: 10,
        init: false,
        // allowTouchMove: true,

        breakpoints: {
            1920: {
                direction: 'horizontal',
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 2,
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
            nextEl: '.catalog__slide-controls-membrane--next',
            prevEl: '.catalog__slide-controls-membrane--prev',
        },
    });
    window.swiperMembrane = {
        swiper: swiperMembrane
    };
};

export default swiperMembrane;
