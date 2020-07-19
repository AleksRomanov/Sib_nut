const scrollPages = () => {
    // Скроллер
    var currentYPosition = function () {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset) {
            return self.pageYOffset;
        }
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop) {
            return document.documentElement.scrollTop;
        }
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop) {
            return document.body.scrollTop;
        }
        return 0;
    };

    var elmYPosition = function (eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent !== document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    };
7
    var smoothScroll = function (eID) {
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;

        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }

        var speed = Math.round(distance / 100);

        if (speed >= 10) {
            speed = 30;
        }

        var timer = 0;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;

        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                var bottomScrollHandler = 'window.scrollTo(0, ' + leapY + ')';
                setTimeout(bottomScrollHandler, timer * speed);
                leapY += step;
                if (leapY > stopY) {
                    leapY = stopY;
                }
                timer++;
            }
            return;
        }

        for (var j = startY; j > stopY; j -= step) {
            var topScrollHandler = 'window.scrollTo(0, ' + leapY + ')';
            setTimeout(topScrollHandler, timer * speed);
            leapY -= step;
            if (leapY < stopY) {
                leapY = stopY;
            }
            timer++;
        }

    };

    var scrollSetup = function (scrollButton, scrollDestination) {
        if (scrollButton) {
            scrollButton.addEventListener('click', function () {
                smoothScroll(scrollDestination);
            });
        }
    };

    var scrollSettings = {
        // teaser: {
        //     scrollButtonClass: '.my-menu__link--teaser',
        //     scrollDestinationID: 'section_teaser'
        // },
        teaser: {
            scrollButtonClass: '.link-to-teaser',
            scrollDestinationID: 'section_teaser'
        },
        about: {
            scrollButtonClass: '.my-menu__link--about',
            scrollDestinationID: 'section_about'
        },
        products: {
            scrollButtonClass: '.my-menu__link--products',
            scrollDestinationID: 'section_products'
        },
        catalog: {
            scrollButtonClass: '.my-menu__link--catalog',
            scrollDestinationID: 'section_catalog'
        },
        quality: {
            scrollButtonClass: '.my-menu__link--quality',
            scrollDestinationID: 'section_quality'
        },
        gallery: {
            scrollButtonClass: '.my-menu__link--gallery',
            scrollDestinationID: 'section_gallery'
        },
        map: {
            scrollButtonClass: '.my-menu__link--map',
            scrollDestinationID: 'section_map'
        },
        partners: {
            scrollButtonClass: '.my-menu__link--partners',
            scrollDestinationID: 'section_partners'
        },
        certificates: {
            scrollButtonClass: '.my-menu__link--certificates',
            scrollDestinationID: 'section_certificates'
        },

        contacts: {
            scrollButtonClass: '.button--contacts',
            scrollDestinationID: 'contact'
        },

    }

    for (var key in scrollSettings) {

        var scrollButtons = document.querySelectorAll(scrollSettings[key].scrollButtonClass);

        if (scrollButtons) {
            var sectionID = scrollSettings[key].scrollDestinationID;

            for (var i = 0; i <= scrollButtons.length - 1; i++) {
                scrollSetup(scrollButtons[i], sectionID);

            }
        }
    }

    var scrollAndShowSettings = {
        buttons: {
            scrollButtonClass: '.products__contact-button',
            scrollDestinationID: 'section_catalog'
        }

    };

    var scrollAndShowSetup = function (index, scrollButton, scrollDestination) {
        if (scrollButton) {
            var showDestinations = document.querySelectorAll('.catalog__wrapper-controls-item');


            scrollButton.addEventListener('click', function () {
                smoothScroll(scrollDestination);
                // var index = scrollButton.indexOf();

                showDestinations[index].click();
            });
        }
    };

    for (var key in scrollAndShowSettings) {

        var scrollAndShowButtons = document.querySelectorAll(scrollAndShowSettings[key].scrollButtonClass);

        if (scrollAndShowButtons) {
            var sectionID = scrollAndShowSettings[key].scrollDestinationID;

            for (var i = 0; i <= scrollAndShowButtons.length - 1; i++) {
                scrollAndShowSetup(i, scrollAndShowButtons[i], sectionID);

            }
        }
    }
};

export default scrollPages;
