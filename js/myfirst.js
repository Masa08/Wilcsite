$(function(){
   $('a[href^="#"]').on('click', function(){
      var speed = 400;
      var href= $(this).attr('href');
      var target = $(href == '#' || href == '' ? 'html' : href);
      var position = target.offset().top-130;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });

  $("button").on("click",function(){
      $("ul").slideToggle(200);

  });

  $('.contents').fadeIn(1500);
  $('.contents').css('opacity', 0);
  $('.contents').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).stop().animate({
        opacity: 1
      }, 1000);
    } else {
      $(this).stop().animate({
        opacity: 0
      }, 1000);
    }
  });

});
