
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


  //Modal js in development
  // $("#contact-button").onClick(function(){
  //   $("#contact-modal").fadeIn(300);
  // });

  // $(window).onClick(function(event){
  //   var contactModal=$("#contact-modal");
  //   if(event.target==contactModal){
  //     contactModal.css("display:block;")
  //   };
  // });

  $('main').scroll(function () {
    if ($('main').scrollTop() > 750) {
      $('header').addClass("visible-navbar");
      console.log("yo");
    } else {
      $('header').removeClass("visible-navbar");
      console.log("yoo");
    }
  });
});



