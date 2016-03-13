$(document).ready(function() {

  var circleOrEx = "o"; // the X or O
  var isGameInProgress = true; // variable represent if game is being played
  var winningCombos = { // functions to determine a winner - if  3 in a row for X or O has occured

    0: [ //0 is key
      [1, 2], //this multiDimensional Array is values
      [3, 6],
      [4, 8]
    ],
    1: [
      [0, 2],
      [4, 7]
    ],
    2: [
      [0, 1],
      [5, 8],
      [4, 6]
    ],
    3: [
      [0, 6],
      [4, 5]
    ],
    4: [
      [1, 8],
      [2, 6],
      [1, 7],
      [3, 5]
    ],
    5: [
      [2, 8],
      [3, 4]
    ],
    6: [
      [0, 3],
      [2, 4],
      [7, 8]
    ],
    7: [
      [1, 4],
      [6, 8]
    ],
    8: [
      [0, 4],
      [2, 5],
      [6, 7]
    ]
  };

  // click function to play an X or an O
  $("#board").find("div").on("click", function() {

    if (isGameInProgress && $(this).hasClass("empty")) { /// putting X or O in an empty space
      $(this).removeClass("empty").append("<span class='" + circleOrEx + "'>" + circleOrEx + "</span");

      checkIfWon($(this).index(), circleOrEx); // determine if X won or is O won

      if (circleOrEx === "o") {
        circleOrEx = "x";
      } else {
        circleOrEx = "o";
      }
    }

  });

  // refreshes the game
  $("#newGame").on("click", function() {

    var boardSquares = $("#board").find("div"); //what is this variable
    var firstEmptyMemorySquare = $(".container").find(".nine").filter(function() { //bonus Explain what filter does
      return $.trim($(this).text()) === "" && $(this).children().length === 0;
    }).not("#board").first();

    if (firstEmptyMemorySquare.length == 1) { //what is this if statement doing?
      firstEmptyMemorySquare.html($("#board").html());
    } else {
      $(".container").find(".nine").not("#board").empty();
      $(".container").find(".nine").first().html($("#board").html());
    }

    // function to clear the board to restart the game
    boardSquares.each(function() {
      $(this).addClass("empty").empty();
    })
    isGameInProgress = true;
  })

  // a command when the corrct square is chosen causing winner to win
  function checkIfWon(chosenSquare) {

    var mulitArr = winningCombos[chosenSquare];
    var playerWon;

    for (var i = 0; i < mulitArr.length; i++) { //loop if player wins
      playerWon = true;
      for (var j = 0; j < mulitArr[i].length; j++) {
        if (!$("#board").find("div").eq(mulitArr[i][j]).find("span").hasClass(circleOrEx)) { //for the player that did not have winning move
          playerWon = false;
        }
      }

      if (playerWon) { //commands if player wins

        for (var j = 0; j < mulitArr[i].length; j++) {
          $("#board").find("div").eq(mulitArr[i][j]).find("." + circleOrEx).addClass("green"); //multi array to verify winning player
        }
        $("#board").find("div").eq(chosenSquare).find("." + circleOrEx).addClass("green"); // declares if X wins or O wins
        alert("Winner is " + circleOrEx.toUpperCase() + "!");
        isGameInProgress = false;
        return false; // exiting the loop
      }
    }


  }
})
