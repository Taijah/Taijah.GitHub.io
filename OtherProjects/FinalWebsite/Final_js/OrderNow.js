// order now final button
$(document).ready(function(){

// button to change when mouse is over button
$("#myButton").on("mouseenter", function(){

  $(this).text("Complete Your Order!")

  })
// when mouse is off of button
.on("mouseleave", function(){

      $(this).text("Click Me!")



}); // end mouse

// alert to say order is confirmed
$("#myButton").on("click", function(){
  alert("Order Complete")
})



  $("#change").on("click", function(){
  alert("Your Order Has been reset!");
  })


// Order Now - radio menus

$("#mySelect").on('change', function(){
  var choice = $(this).find("option:selected").attr("id");

  $(".radio-inline").hide();

  if(choice == "bikini"){
    $('.bikini-list').show();
  }

else if(choice == "accessories"){
  $('.accessory-list').show();
}

else if(choice == "trunks"){
  $('.trunks-list').show();
}
});






   });// doc end
