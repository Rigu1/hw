$(document).ready(function(){
  $('.content').on("mouseover", function(){
    $(this).fadeIn(1000, function () {
      $(this).css("box-shadow", "rgba(0, 0, 0, 0.35) 0px 5px 15px");
    });
  });
  $('.content').on("mouseleave", function(){
    $(this).fadeIn(500, function () {
      $(this).css("box-shadow", "rgba(149, 157, 165, 0.2) 0px 8px 24px");
    });
  });
});