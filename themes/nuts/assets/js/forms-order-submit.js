const formsOrderSubmit = () => {

//E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "/mail.php", //Change
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


    var orderSubmitButtons = document.querySelectorAll('.order-button--submit-js');
    var orderPopup = document.querySelector('.order-popup');
    var pageBody = document.querySelector('body');
    var orderPopupCloseButton = document.querySelector('.order-popup__close');
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
        orderPopup.classList.add('popup-show--js');
        pageBody.classList.add('overflow-hidden--js');

        document.addEventListener('keydown', onImageEditorEscPress);

    }

    orderSubmitButtons.forEach(function (contactButton) {
        contactButton.addEventListener('click', function () {
            showFeedback();
        });
    })


    function hideFeedback() {
        orderPopup.classList.remove('popup-show--js');
        pageBody.classList.remove('overflow-hidden--js');
        document.removeEventListener('keydown', onImageEditorEscPress);
    }

    orderPopupCloseButton.addEventListener('click', function () {
        hideFeedback()
    });

}
export default formsOrderSubmit;
