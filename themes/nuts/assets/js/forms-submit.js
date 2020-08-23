const formsSubmit = () => {

//E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "./themes/nuts/assets/js/mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $(th).find('.success').addClass('activate').css("display", "block").hide().fadeIn();
            setTimeout(function () {
                $(th).find('.success').removeClass('activate').fadeOut();
                th.trigger("reset");
                pageBody.classList.remove('overflow-hidden--js');
            }, 1000);
        });
        return false;
    });


    var feedbackContactButtons = document.querySelectorAll('.contact-button--feedback-js');
    var feedbackPopup = document.querySelector('.feedback-popup');
    var pageBody = document.querySelector('body');
    var feedbackPopupCloseButton = document.querySelector('.feedback-popup__close');
    var KEY_CODE = {
        ESC: 27
    };
    var isEscEvent = function (evt, action) {
        if (evt.keyCode === KEY_CODE.ESC) {
            action();
        }
    };


    function onImageEditorEscPress(evt) {
        isEscEvent(evt, hideFeedback);
    }

    function showFeedback() {
        feedbackPopup.classList.add('popup-show--js');
        pageBody.classList.add('overflow-hidden--js');

        document.addEventListener('keydown', onImageEditorEscPress);

    }

    feedbackContactButtons.forEach(function (contactButton) {
        contactButton.addEventListener('click', function () {
            showFeedback();
        });
    })


    function hideFeedback() {
        feedbackPopup.classList.remove('popup-show--js');
        pageBody.classList.remove('overflow-hidden--js');
        document.removeEventListener('keydown', onImageEditorEscPress);
    }

    feedbackPopupCloseButton.addEventListener('click', function () {
        hideFeedback()
    });

}
export default formsSubmit;
