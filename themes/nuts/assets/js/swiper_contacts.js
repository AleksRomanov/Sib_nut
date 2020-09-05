const swiperContacts = () => {


    $('.contacts__slide').each(function () {
        var ths = $(this),
            thsh = ths.find('.contacts__slide-image-title').outerHeight();
            ths.find('.contacts__slide-data').css('min-height', thsh);
    });


    var mySwiper = new Swiper('.contacts__swiper', {
        slidesPerView: 3,
        spaceBetween: 0,
        direction: 'horizontal',
        navigation: {
            nextEl: '.contacts__slide-controls--next',
            prevEl: '.contacts__slide-controls--prev',
        },
        breakpoints: {
            1920: {
                // height: 800,
                slidesPerView: 3,
            },
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
        },
        on: {
            init: function () {

                // mySwiper.update();
                // mySwiper.destroy();
            },
        }
    });
};

export default swiperContacts;
