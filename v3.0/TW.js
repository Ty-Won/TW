document.addEventListener("DOMContentLoaded", main, false);

function main() {
  $(document).ready(function () {
    $('.materialboxed').materialbox();
  });


  // Pause slider
  $('.slider').slider('pause');
  // Start slider
  $('.slider').slider('start');
  // Next slide
  $('.slider').slider('next');
  // Previous slide
  $('.slider').slider('prev');
}

