$(".scroll").on("click",function(event){
  event.preventDefault();
  var target = $( $(this).attr('href') );
  $('html, body').animate({
      scrollTop: target.offset().top - 95
  }, 500);
})
