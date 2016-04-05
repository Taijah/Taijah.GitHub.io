// order now final button

// button to change when mouse is over button
$("#myButton").on("mouseenter", function(){

  $(this).text("Complete Your Order!");


})

// when mouse is off of button
.on("mouseleave", function(){

      $(this).text("Click Me!");

});
// alert to say order is confirmer
$(document).ready(function(){
  $("#change").on("click", function(){
  alert("Your Order Has been reset!");



  })

 $("#myButton").on("click",function (){
   // alert("Please Fill in the required space")
    }) // alert for final order if not filled out properly

 // to put red boxes
  $("input, select").filter(function(){
  return !this.value;
    }).closest("div").addClass("has-error");


 // to remove the red error
  $("input,select").filter(function(){
 return !this.value;
  }).closest("div").removeClass("has-error") );

 var errors = $(.has-error);

  if (!errors){
     alert("no errors")}

})

  });
