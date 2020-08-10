const salAnimation = () => {
    window.sal();

    if (document.querySelector('.sal--js')) {
        // Запуск анимиции dash иконок при попадании во вьюпорт
        let salAnimatedElements = document.querySelectorAll('.sal--js');

        salAnimatedElements.forEach(function (salElement) {
            salElement.addEventListener('sal:in', ({detail}) => {
                window.swiperShell.swiperX.init();
                // salElement.classList.add('icons__animated--js');
            });
        });

        // // Удаление анимирующего класса у иконок после окончания анимации для последующего анимирования через ховер или фокус
        // salAnimatedElements.forEach(function (salElement) {
        //     salElement.addEventListener('animationend', () => {
        //         salElement.classList.remove('icons__animated--js');
        //     });
        // });
    }
};

export default salAnimation;


// const salAnimation = () => {
//     window.sal();
//
//     // if (document.querySelector(`.sal--js`)) {
//     //     // Запуск анимиции dash иконок при попадании во вьюпорт
//     //     let salAnimatedElements = document.querySelectorAll(`.sal--js`);
//     //
//     //     salAnimatedElements.forEach(function (salElement) {
//     //         salElement.addEventListener(`sal:in`, ({detail}) => {
//     //             salElement.classList.add(`icons__animated--js`);
//     //         });
//     //     });
//     //
//     //     // Удаление анимирующего класса у иконок после окончания анимации для последующего анимирования через ховер или фокус
//     //     salAnimatedElements.forEach(function (salElement) {
//     //         salElement.addEventListener(`animationend`, () => {
//     //             salElement.classList.remove(`icons__animated--js`);
//     //         });
//     //     });
//     // }
// };
//
// export default salAnimation;

