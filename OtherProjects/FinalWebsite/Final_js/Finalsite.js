$(document).ready(function(){

  $(".nav").find("li").on("click",function(){
    $(".nav").find("li").removeClass("active");
    $(this).addClass("active");
  })
})
// nts : put and id on all the nav tabs too ____
