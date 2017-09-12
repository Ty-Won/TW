
$(document).ready(function () {

    /*Descent button glowing animation*/
    $(".descent")
        .mouseover(function () {
            $(this).addClass("descent-hover");
            $('.fa-chevron-down').addClass("fa-chevron-down-color");
        })
        .mouseout(function () {
            $(this).removeClass("descent-hover");
            $('.fa-chevron-down').removeClass("fa-chevron-down-color");

        });


    /*navbar transparency function that changes the color of the navbar once it scrolls past a certain point*/
    $('main').scroll(function () {
        if ($('main').scrollTop() > 750) {
            $('header').addClass("visible-navbar");
        } else {
            $('header').removeClass("visible-navbar");
        }
    });

    /*Modal function for the contact button, hides menu and background while the modal is up and allows the modal
    to be closed when clicked outside of the window*/
    $("#contact-button").click(function () {
        $('.mdl-layout__obfuscator').removeClass('is-visible');
        $('.mdl-layout__drawer').removeClass('is-visible');


    });

    $(window).click(function (event) {
        var contactModal = $("#contact-modal");
        if (event.target == contactModal) {
            contactModal.hide();
        };
    });
});





