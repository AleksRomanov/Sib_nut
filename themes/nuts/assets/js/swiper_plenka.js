const swiperPlenka = () => {
    new Swiper('.catalog__container-plenka', {
        spaceBetween: 2,
        allowTouchMove: true,
        navigation: {
            nextEl: '.catalog__slide-controls-plenka--next',
            prevEl: '.catalog__slide-controls-plenka--prev',
        },

        breakpoints: {
            1920: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            },
            // 768: {
            //     // slidesPerView: 7
            // },
            // 576: {
            //     slidesPerView: 1,
            //     // height: 1024,
            // },
            320: {
              allowTouchMove: true,
              slidesPerView: 1,
            }
        }
    });

};

export default swiperPlenka;
