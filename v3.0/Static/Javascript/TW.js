
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


    $(window).click(function (event) {
        var contactModal = $("#contact-modal");
        if (event.target == contactModal) {
            contactModal.hide();
        };
    });

});

function showSideBar() {
    $("#sidenav-container").addClass("sidenav-container-toggle");
    $("#sidenav").css("width","250px")

   
}

function closeSideBar() {
    $("#sidenav-container").removeClass("sidenav-container-toggle");
    $("#sidenav").css("width","0px")

   
}

$(window).click(function(event){
    var sidebar = $("#sidenav-container");
    if (event.target == sidebar[0]) {
        closeSideBar();
    };
})



