// order now final button
$(document).ready(function(){

// button to change when mouse is over button
$("#myButton").on("mouseenter", function(){

  $(this).text("Complete Your Order!")

  })
// when mouse is off of button
.on("mouseleave", function(){

      $(this).text("Click Me!")



}); //doc end ?

// alert to say order is confirmed
$("#myButton").on("click", function(){
  alert("Order Complete")
})



  $("#change").on("click", function(){
  alert("Your Order Has been reset!");
  })

// select js






   });// doc end
