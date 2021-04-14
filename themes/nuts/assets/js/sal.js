const salAnimation = () => {
    window.sal();
    //Проверка в DOMe на наличие классов


    if (document.querySelector('.sal-slider-kernel--js')) {
        // Активация свайпера при попадании во вьюпорт
        let swiperProductsPackingKernel = document.querySelector('.sal-slider-kernel--js');

        swiperProductsPackingKernel.addEventListener('sal:in', ({detail}) => {
            window.swiperProductsPackingKernel.swiper.init();

        });
    }

    if (document.querySelector('.sal-slider-east--js')) {
        // Активация свайпера при попадании во вьюпорт
        let swiperEastPacking = document.querySelector('.sal-slider-east--js');

        swiperEastPacking.addEventListener('sal:in', ({detail}) => {
            window.swiperEastPacking.swiper.init();

        });
    }

    if (document.querySelector('.sal-slider-shell--js')) {
        // Активация свайпера при попадании во вьюпорт
        let swiperShell = document.querySelector('.sal-slider-shell--js');

        swiperShell.addEventListener('sal:in', ({detail}) => {
            window.swiperShell.swiper.init();
        });
    }

    if (document.querySelector('.sal-slider-jmikh--js')) {
        // Активация свайпера при попадании во вьюпорт
        let swiperJmikh = document.querySelector('.sal-slider-jmikh--js');

        swiperJmikh.addEventListener('sal:in', ({detail}) => {
            window.swiperJmikh.swiper.init();
        });
    }

    if (document.querySelector('.sal-slider-oil--js')) {
        // Активация свайпера при попадании во вьюпорт
        let swiperOil = document.querySelector('.sal-slider-oil--js');

        swiperOil.addEventListener('sal:in', ({detail}) => {
            window.swiperOil.swiper.init();
        });
    }


    if (document.querySelector('.sal-slider-membrane--js')) {
        // Активация свайпера при попадании во вьюпорт
        let swiperMembrane = document.querySelector('.sal-slider-membrane--js')

        swiperMembrane.addEventListener('sal:in', ({detail}) => {
            window.swiperMembrane.swiper.init();

        });
    }

    if (document.querySelector('.sal-slider-crushed--js')) {
        // Активация свайпера при попадании во вьюпорт
        let swiperCrushed = document.querySelector('.sal-slider-crushed--js')

        swiperCrushed.addEventListener('sal:in', ({detail}) => {
            window.swiperCrushed.swiper.init();

        });
    }
};

export default salAnimation;
