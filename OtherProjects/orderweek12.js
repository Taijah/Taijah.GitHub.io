$(document).ready(function(){
$("#submitButton").on("click",function (){
   //alert("Please Fill in the required space")
    // alert for final order if not filled out properly

// to put red boxes
 $("input, select").filter(function(){
 return !this.value;
   }).closest("div").addClass("has-error");


// to remove the red error
 $("input, select").filter(function(){
return this.value;
 }).closest("div").removeClass("has-error") ;

var errors = $(".has-error");


 if (!errors){
    alert("no errors")}
  if (errors.length < 1) {
               sendConfirmation();
             }

           }) //click

function sendConfirmation{
//make an object to record data for database
var order={};
var formData = $("input, select");
// for each jquery object
formData.each(function(){
  //get the id
    var id = $(this).attr("id");
    /set the ofeld and the value
    order[id] = $(this).val();
})

}); // click end


 }); // doc end
