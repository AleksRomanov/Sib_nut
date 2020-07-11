const swiperProductsPacking = () => {
    new Swiper('.catalog__wrapper-box-packing', {
        spaceBetween: 8,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            1200: {
                slidesPerView: 7,
                allowTouchMove: false,
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

export default swiperProductsPacking;
