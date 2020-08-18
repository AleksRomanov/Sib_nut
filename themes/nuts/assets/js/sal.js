const salAnimation = () => {
    window.sal();
    //Проверка в DOMe на наличие классов
    if (document.querySelector('.sal-slider-shell--js')) {
        // Активация свайпера при попадании во вьюпорт
        var swiperShell = document.querySelector('.sal-slider-shell--js');

        swiperShell.addEventListener('sal:in', ({detail}) => {
            window.swiperShell.swiper.init();

        });
    }

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
