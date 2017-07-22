
/*darkens specified elements when hovered over*/
$(".descent").hover(function(){
  $(this).addClass("descent-hover");
  $('.fa-chevron-down').addClass("fa-chevron-down-color");
  console.log("hello");
})


$("descent").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
});