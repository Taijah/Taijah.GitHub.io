// nav js
$(document).ready(function(){

  $(".nav").find("li").on("click",function(){
    $(".nav").find("li").removeClass("active");
    $(this).addClass("active");
  })
})
//end


// Home Page JS - Glyphicon Button click
$(document).ready(function(){



$("#like").on("click", function(){
alert("Thank You For Liking Us on Facebok");

})
});


// Models Page Javascript code
$(document).ready(function(){
$("#getModels").on("click",function(){
  console.log("click")

$.getJSON("Final_JsonDatabase/Models.json" ,function(data){
  console.log("data"+data)
// Code  for the table
var html="<table class='table table-hover table-striped'>"+
"<tr><th>Name</th><th>age</th><th>Company</th></tr>";
  $.each(data, function(index, item){


html+="<tr>"+
"<td>" +item.name +"</td>"+
"<td>"+item.age + "</td>"+
"<td>"+item.company + "</td>"+
"<td>"+item.gender + "</td>"+
"</tr>";
  }) // each end

  html+="</table>";
  $("#data").append(html);
  //alert(data);
  //console.dir(data);

})// get json end

}) // click end

})// doc end

// about js
