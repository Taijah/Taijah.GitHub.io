// order now final button

// button to change when mouse is over button
$("#myButton").on("mouseenter", function(){

  $(this).text("Complete Your Order!");


})

// when mouse is off of button
.on("mouseleave", function(){

      $(this).text("Click Me!");

})
// alert to say order is confirmer

$("#confirm").on("Click",function(){
  alert("Thank You For Ordering Summer Suits! We have sent You a confirmation email!")



}); //end
