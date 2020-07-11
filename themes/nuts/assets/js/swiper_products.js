const swiperProducts = () => {
    new Swiper('.products__swiper', {
        slidesPerView: 3,
        spaceBetween: 0,
        direction: 'horizontal',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init: function () {
                $('.products__slide').each(function () {
                    var ths = $(this),
                        thsh = ths.find('.products__slide-data').outerHeight();
                        ths.find('.products__slide--oil').css('min-height', thsh);
                })
            },
        }
    });
};

export default swiperProducts;

