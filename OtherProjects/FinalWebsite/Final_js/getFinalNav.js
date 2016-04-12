// code for Nav
$.get("http://Taijah.GitHub.io/OtherProjects/FinalWebsite/final_partials/nav.html", function(data) {

  $(document).ready(function() {

    $(".container").prepend(data);
})
})
// code for footer 
$.get("http://Taijah.GitHub.io/OtherProjects/FinalWebsite/final_partials/footer.html", function(foot) {

  $(document).ready(function() {

    $(".container").append(foot);
    $(".container").fadeIn();

  })


})
