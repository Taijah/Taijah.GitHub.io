
$("#getClients").on("click",function(){

$.getJSON("http://Taijah.GitHub.io/OtherProjects/ajaxExamples/jsonDatabase/clients.json" ,function(data){
  alert(data);
  console.dir(data);
})
})
