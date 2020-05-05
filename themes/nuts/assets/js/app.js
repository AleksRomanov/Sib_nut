document.addEventListener("DOMContentLoaded", function () {

    window.sal();

    // new Mmenu(document.querySelector('#my-menu'));

    new Mmenu(
        document.querySelector('#my-menu'),
        {
            pageScroll: true,
            extensions: ['theme-black', "position-right", 'fx-menu-slide', 'pagedim-black'],
            // navbar: {
            //     title: '<img src="image/svg/logo.svg" alt="Магазин Строительных Материалов СтройРемонт24">'
            // },
            // "offCanvas": {
            //         position: 'right'
            //     }
            // offCanvas: {
            //     position: 'right'
            // }
        }
    );

    document.addEventListener( 'click', function( evnt ) {
        var anchor = evnt.target.closest( 'a[href^="#/"]' );
        if ( anchor ) {
            alert('Thank you for clicking, but that\'s a demo link.');
            evnt.preventDefault();
        }
    });

    // $("#my-menu").Mmenu({
    //     pageScroll: true,
    //     extensions: ['theme-black', 'fx-menu-slide', 'pagedim-black'],
    //     // navbar: {
    //     //     title: '<img src="image/svg/logo.svg" alt="Магазин Строительных Материалов СтройРемонт24">'
    //     // },
    //     offCanvas: {
    //         position: 'right'
    //     }
    // })


    // let menu = document.getElementById('my-menu');
    // menu.mmenu();
// $(function () {
//
//     $("#my-menu").mmenu({
//         pageScroll: true,
//         extensions: ['theme-black', 'fx-menu-slide', 'pagedim-black'],
//         // navbar: {
//         //     title: '<img src="image/svg/logo.svg" alt="Магазин Строительных Материалов СтройРемонт24">'
//         // },
//         offCanvas: {
//             position: 'right'
//     });
//
//
//     var api = $("#my-menu").data("mmenu");
//     api.bind("open:finish", function () {
//         $(".hamburger").addClass("is-active");
//     }).bind("close:finish", function () {
//         $(".hamburger").removeClass("is-active");
//     });
//
//     });
});
