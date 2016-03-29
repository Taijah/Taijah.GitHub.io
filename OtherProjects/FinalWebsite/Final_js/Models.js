$(document).ready(function(){
$("#getModels").on("click",function(){

$.getJSON("http://Taijah.GitHub.io/OtherProjects/FinalWebsite/Final_JsonDatabase/Models.json" ,function(data){
// wat to code this so its not a table its a profile
var html="<table class='table table-hover table-striped'>"+
"<tr><th>Name</th><th>age</th><th>Company</th></tr>";
  $.each(data, function(index, item){
  //  $("#data").append(item.name);

html+="<tr>"+
"<td>" +item.name +"</td>"+
"<td>"+item.age + "</td>"+
"<td>"+item.company + "</td>"+
"</tr>";
  }) // each end

  html+="</table>";
  $("#data").append(html);
  //alert(data);
  //console.dir(data);

})// get json end

}) // click end

})// doc end
