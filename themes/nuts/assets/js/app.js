document.addEventListener("DOMContentLoaded", function () {

    window.sal();
    let hamburgerMenu = document.querySelector('.hamburger')

    new Mmenu( "#my-menu", {
        navbar: {
            title: "Меню"
        },
        extensions: [
            'theme-black',
            'position-right',
            'pagedim-black'
        ],
        hooks: {
            "open:start": ( panel ) => {
                hamburgerMenu.classList.add('is-active');
                console.log( "Started opening pane: ");
            },
            "close:start": ( panel ) => {
                hamburgerMenu.classList.remove('is-active');
                console.log( "Finished opening panel: ");
            }
        }

    }, {
        // configuration

    });


    document.addEventListener( 'click', function( evnt ) {
        var anchor = evnt.target.closest( 'a[href^="#/"]' );
        if ( anchor ) {
            alert('Thank you for clicking, but that\'s a demo link.');
            evnt.preventDefault();
        }
    });

});
