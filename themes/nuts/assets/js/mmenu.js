const mmenu = () => {

    let hamburgerMenu = document.querySelector('.hamburger')

    const menu = new Mmenu("#my-menu", {
        // "pageScroll": true,
        navbar: {
            title: "Меню"
        },
        extensions: [
            'theme-black',
            'position-right',
            'pagedim-black'
        ],
        hooks: {
            "open:start": (panel) => {
                hamburgerMenu.classList.add('is-active');
                console.log("Started opening panel: ");
            },
            "close:start": (panel) => {
                hamburgerMenu.classList.remove('is-active');
                console.log("Finished opening panel: ");
            }
        }

    }, {
        // configuration

    });

    var api = menu.API;

    window.mmenuAPI = {
        api: api
    };


    // document.addEventListener('click', function (evnt) {
    //     var anchor = evnt.target.closest('a[href^="#/"]');
    //     if (anchor) {
    //         alert('Thank you for clicking, but that\'s a demo link.');
    //         evnt.preventDefault();
    //     }
    // });



};

export default mmenu;
