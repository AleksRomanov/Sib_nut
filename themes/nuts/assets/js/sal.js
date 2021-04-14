const salAnimation = () => {
    window.sal();
    //Проверка в DOMe на наличие классов

    if (document.querySelector('.sal-slider-east--js')) {
        // Активация свайпера при попадании во вьюпорт
        var swiperProductsPacking = document.querySelector('.sal-slider-east--js');

        swiperProductsPacking.addEventListener('sal:in', ({detail}) => {
            window.swiperProductsPacking.swiper.init();
        });
    }

    if (document.querySelector('.catalog__container-shell')) {
        // Активация свайпера при попадании во вьюпорт
        var swiperShell = document.querySelector('.catalog__container-shell');

        swiperShell.addEventListener('sal:in', ({detail}) => {
            window.swiperShell.swiper.init();
        });
    }

    if (document.querySelector('.catalog__slider-jmikh')) {
        // Активация свайпера при попадании во вьюпорт
        var swiperJmikh = document.querySelector('.catalog__slider-jmikh');

        swiperJmikh.addEventListener('sal:in', ({detail}) => {
            window.swiperJmikh.swiper.init();
        });
    }

    if (document.querySelector('.catalog__slider-oil')) {
        // Активация свайпера при попадании во вьюпорт
        var swiperOil = document.querySelector('.catalog__slider-oil');

        swiperOil.addEventListener('sal:in', ({detail}) => {
            window.swiperOil.swiper.init();
        });
    }

    // if (document.querySelector('.sal-slider-kernel--js')) {
    //     // Активация свайпера при попадании во вьюпорт
    //     var swiperProductsPacking = document.querySelector('.sal-slider-kernel--js');
    //
    //     swiperProductsPacking.addEventListener('sal:in', ({detail}) => {
    //         window.swiperProductsPacking.swiper.init();
    //
    //     });
    // }


    if (document.querySelector('.sal-slider-membrane--js')) {
        // Активация свайпера при попадании во вьюпорт
        var swiperMembrane = document.querySelector('.sal-slider-membrane--js')

        swiperMembrane.addEventListener('sal:in', ({detail}) => {
            window.swiperMembrane.swiper.init();

        });
    }

    if (document.querySelector('.sal-slider-crushed--js')) {
        // Активация свайпера при попадании во вьюпорт
        var swiperCrushed = document.querySelector('.sal-slider-crushed--js')

        swiperCrushed.addEventListener('sal:in', ({detail}) => {
            window.swiperCrushed.swiper.init();

        });
    }
};

export default salAnimation;
