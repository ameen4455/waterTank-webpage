$(document).ready(function(){
  $("#red").click(function(){
    $("#show2").hide();
    $("#show1").show();
    currentSlide(slideIndex2)
  });
  $("#blue").click(function(){
    $("#show2").show();
    $("#show1").hide();
    currentSlide2(slideIndex)
  });
});


$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});
$('.popover-dismiss').popover({
  trigger: 'focus'
});


