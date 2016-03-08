$(document).ready(function() {
/*
click - done
focus c
blur -c
change
mouse enter/leave

*/


//user clicks the button

  $("#myButton").on("mouseenter", function(){

    $(this).text("Create Outfit!");


  })
  .on("mouseleave", function(){

        $(this).text("Click Me!");

  });

  $("#mySingleLineText").on("focus", function(){

    $(this).css("background-color","yellow");

  });

  $("#mySingleLineText").on("blur", function(){

    $(this).css("background-color","#FFF");

  });

/*  OR use this , instead of clling the function twice

$("#mySingleLineText").on("focus", function(){
  $(this).css("background-color","yellow");

}) .on("blur", function(){
  $(this).css("background-color","#FFF");

});
*/
$("#mySelect").on("change", function(){


var val =$(this).val();
 $("#mySelectMessage").html(val + " is a nice Selection");

});


  $("#myButton").on("click", function(){

    var myInput = $("#mySingleLineText").val();
    var myTextArea= $("#myTextArea").val();
    var mySelect= $("#mySelect").val();
    var myRadio = $("[name='item']:checked").val();

    var myCheckValues=[];
    //each jquery loop for object arrays
    $("[name='choose']:checked").each(function(){
      myCheckValues.push($(this).val());

    });

    $("#log").append("<br> User clicked button");
    $("#log").append("<br> Value of input is: "+myInput)
    $("#log").append("<br> Value of textarea is: " +myTextArea)
    $("#log").append("<br> Value of select is: " +mySelect)
    $("#log").append("<br> Value of radio button is: " + myRadio)
    $("#log").append("<br> Value of checks is: " +myCheckValues.join())

  })

});
