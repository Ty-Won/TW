
$(document).ready(function () {

  $(".jumbotron").hide();
  $(".jumbotron").fadeIn(2000);
  $(".descent")
    .mouseover(function () {
      $(this).addClass("descent-hover");
      $('.fa-chevron-down').addClass("fa-chevron-down-color");
    })
    .mouseout(function () {
      $(this).removeClass("descent-hover");
      $('.fa-chevron-down').removeClass("fa-chevron-down-color");

    });




  $('main').scroll(function () {
    if ($('main').scrollTop() > 750) {
      $('header').addClass("visible-navbar");
    } else {
      $('header').removeClass("visible-navbar");
    }
  });
});





