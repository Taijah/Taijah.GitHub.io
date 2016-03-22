$(document).ready(function(){
$("#getClients").on("click",function(){

$.getJSON("http://Taijah.GitHub.io/OtherProjects/ajaxExamples/jsonDatabase/question4.json" ,function(data){
  var dsExample5 = new Spry.Data.JSONDataSet("../../jsonDatabase/question4.json/array-03.js", { path: "id.name" });





  $.each(data, function(index, item){
  //  $("#data").append(item.name);











  }) // each end


})// get json end

}) // click end

})// doc end
