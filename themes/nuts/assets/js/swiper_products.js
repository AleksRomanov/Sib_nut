const swiperProducts = () => {
    $('.products__slide').each(function () {
        var ths = $(this),
            thsh = ths.find('.products__slide-data').outerHeight();
            ths.find('.products__slide-image').css('min-height', thsh);
    });


    var mySwiper = new Swiper('.products__swiper', {
        slidesPerView: 3,
        spaceBetween: 0,
        direction: 'horizontal',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1200: {
                // height: 800,
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
                // height: 1024,
            },
            576: {
                slidesPerView: 1,
                // height: 1024,
            },
            320: {
                slidesPerView: 1,
            }
        }
        // on: {
        //     init: function () {
        //
        //         // mySwiper.update();
        //         // mySwiper.destroy();
        //     },
        // }
    });
};

export default swiperProducts;
