$(document).ready(function(){
$("#getClients").on("click",function(){

$.getJSON("http://Taijah.GitHub.io/OtherProjects/ajaxExamples/jsonDatabase/clients.json" ,function(data){

  $.each(data, function(index, item){
    $("#data").append(item.name);


  }) // each end
  //alert(data);
  //console.dir(data);

})// get json end

}) // click end

})// doc end
