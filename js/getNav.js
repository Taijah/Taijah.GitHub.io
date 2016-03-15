//get the files
$.get("http://Taijah.GitHub.io/partials/nav.html", function(data) {

  $(document).ready(function() {

    $(".container").prepend(data);
})
})
$.get("http://Taijah.GitHub.io/partials/footer.html", function(foot) {

  $(document).ready(function() {

    $(".container").append(foot);
    $(".container").fadeIn();

  })


})
