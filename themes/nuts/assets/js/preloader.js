const preloader = () => {
    // var animationDuration = 2500;
    var animationDuration = 1;
    var preloader = document.querySelector("#preloader");
    var pageBody = document.querySelector('body');


    var bar = new window.ProgressBar.Circle(preloader, {
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        duration: animationDuration,
        easing: 'easeInOut',
        strokeWidth: 2,
        from: {color: '#F7C063', a:0},
        to: {color: '#F47220', a:1},
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
        }
    });

    bar.animate(1.0);  // Number from 0.0 to 1.0


    /* Аналог fadeOut jQuery на ванильном JS  */
    function fadeOut(element) {
        var opacity = 1;
        var timer = setInterval(function () {
            if (opacity <= 0.1) {
                clearInterval(timer);
                document.querySelector(element).style.display = 'none';
            }
            document.querySelector(element).style.opacity = opacity;
            opacity -= opacity * 0.1;
        }, 0);
    }
    //
    var preloaderElement = "#spinner-wrapper";
    //
    pageBody.classList.add('overflow-hidden--js');
    //
    setTimeout(function () {
        pageBody.classList.remove('overflow-hidden--js');
        fadeOut(preloaderElement);
    }, animationDuration);

};

export default preloader;


