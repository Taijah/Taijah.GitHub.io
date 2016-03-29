// button to change when mouse is over button
$("#myButton").on("mouseenter", function(){

  $(this).text("Create Outfit!");


})

// when mouse is off of button
.on("mouseleave", function(){

      $(this).text("Click Me!");

});
