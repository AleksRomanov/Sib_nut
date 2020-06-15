const swiperQuality = () => {
    new Swiper('.quality__wrapper', {
        direction: 'vertical',
        spaceBetween: 50,
        slidesPerView: 4,
        height: 1500,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


        // breakpoints: {
        //     1920: {
        //         // height: 500,
        //         slidesPerView: 1,
        //     },
        //     // 768: {
        //     //     slidesPerView: 1,
        //     //     // height: 1024,
        //     // },
        //     // 320: {
        //     //     height: 640,
        //     // }
        // }
    });

};

export default swiperQuality;
