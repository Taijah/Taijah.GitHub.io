
$("#submitButton").on("click",function (){
  // alert("Please Fill in the required space")
   }) // alert for final order if not filled out properly

// to put red boxes
 $("input, select").filter(function(){
 return !this.value;
   }).closest("div").addClass("has-error");


// to remove the red error
 $("input, select").filter(function(){
return !this.value;
 }).closest("div").removeClass("has-error") );

var errors = $(.has-error);

 if (!errors){
    alert("no errors")}

})

 });
