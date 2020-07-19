const swiperQuality = () => {
    new Swiper('.quality__wrapper', {
        spaceBetween: 20,
        slidesPerView: 4,
        // width: 1280,
        // slidesPerColumnFill: 'row',
        // slidesPerColumn: 4,
        // autoHeight: true,
        // height: 1280,


        breakpoints: {
            1790: {
                direction: 'vertical',
                slidesPerView: 4,
                height: 1280,
            },
            1200: {
                direction: 'vertical',
                height: 1400,
                // width: 1280,
                slidesPerView: 4,
            },
            768: {
                direction: 'horizontal',
                slidesPerView: 1,
                // height: 1200,
            },
            320: {
                direction: 'horizontal',
                slidesPerView: 1,
                height: 640
            },
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }

    });

};

export default swiperQuality;
