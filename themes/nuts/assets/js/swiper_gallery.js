const swiperGallery = () => {
    var swiper = new Swiper('.gallery_container', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        preloadImages: false,
        lazy: true,


        navigation: {
            nextEl: '.gallery-control--next',
            prevEl: '.gallery-control--prev',
        },
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            dynamicMainBullets: 3,
            clickable: true,

            renderBullet(index, className) {
                return '<img class="' + className + ' swiper--bullet" src="themes/nuts/assets/images/gallery/bullets/' + index + '-bullet.jpg">';
            }
        },
        breakpoints: {
            1200: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        },
        on: {
            init: function () {
                var fullScreenImageSlide = document.querySelectorAll('.gallery_slide-image');
                var popupFullScreen = document.querySelector('.gallery--full-screen');
                var pageBody = document.querySelector('body');
                var closeButton = document.querySelector('.gallery__full-close');


                fullScreenImageSlide.forEach(function (imageSlide) {
                    imageSlide.addEventListener('click', function () {
                        popupFullScreen.classList.add('show-full-gallery--js');
                        pageBody.classList.add('overflow-hidden--js');
                        swiperFull.init();
                        swiperFull.slideReset();
                        swiperFull.slideTo(swiper.activeIndex);
                    })
                })
                closeButton.addEventListener('click', function () {
                    popupFullScreen.classList.remove('show-full-gallery--js');
                    pageBody.classList.remove('overflow-hidden--js');
                })
            },

            slideChange: function () {
                var galleryVideos = document.querySelectorAll('.video-gallery');

                galleryVideos.forEach(function (slidePause) {
                    slidePause.pause();
                });
            },
        }
    });

    var swiperFull = new Swiper('.gallery_container--full', {
        init: false,
        preloadImages: false,
        lazy: true,
        zoom: true,
        centeredSlides: true,
        slidesPerView: 1,
        autoHeight: true,

        navigation: {
            nextEl: '.gallery-control--next',
            prevEl: '.gallery-control--prev',
        },

        pagination: {
            el: '.swiper-video-pagination--full',
            dynamicBullets: true,
            dynamicMainBullets: 3,
            clickable: true,

            renderBullet(index, className) {
                return '<img class="' + className + ' swiper--bullet" src="themes/nuts/assets/images/gallery/bullets/' + index + '-bullet.jpg">';
            }
        },

        on: {

            slideChange: function () {
                var galleryVideos = document.querySelectorAll('.video-gallery');

                galleryVideos.forEach(function (slidePause) {
                    slidePause.pause();
                });
            },
        }
    });
};

export default swiperGallery;
