// order now final button
$(document).ready(function(){

// button to change when mouse is over button
$("#myButton").on("mouseenter", function(){

  $(this).text("Complete Your Order!");
})

// when mouse is off of button
.on("mouseleave", function(){

      $(this).text("Click Me!");

});

// alert to say order is confirmed

  $("#change").on("click", function(){
  alert("Your Order Has been reset!");
  })

  $("#myButton").on("click",function (){
     alert("Please Fill in the required space")
      // alert for final order if not filled out properly

   });
