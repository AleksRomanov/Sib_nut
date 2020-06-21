const swiperProducts = () => {
    new Swiper('.products__swiper', {
        slidesPerView: 3,
        spaceBetween: 0,
        direction: 'horizontal',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
};

export default swiperProducts;
