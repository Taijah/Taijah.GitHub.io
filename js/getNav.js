//get the files
$.get("linktopartials"),function(data){

$(document).ready(function(){
$(".container").prepend(data);
  
})
