const swiperSertificates = () => {
    new Swiper('.sertificates__swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
};

export default swiperSertificates;
