var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var rand;
var randomChosenColour;
var level = 0;
var i = -1;
$("#level-title").html("Prees A Key to Start");
$(document).on('keypress', function() {
  if (level === 0) {
    nextSequence();
  }
});
$(".btn").click(function() {
  var userChosenColour = this.id;
  i++;
  if (i < gamePattern.length) {
    if (userChosenColour === gamePattern[i]) {
      userClickedPattern.push(userChosenColour);
      palySound(userChosenColour);
      animatePress(userChosenColour);
      if (i === ((gamePattern.length) - 1)) {

        i = -1;
        userClickedPattern = [];
        setTimeout(function() {
          nextSequence();
        }, 1000);
      }
    } else {
      palySound("wrong");
      /////////////////->>>>>>>>>>>>>>>>>>
        $("#level-title").html("Game Over Prees A Key to Restart");
      $("body").addClass("game-over");
      setTimeout(function() {
        $("body").removeClass("game-over");
        //....and whatever else you need to do
      }, 200);

      level = 0;
      i = -1;
      userClickedPattern = [];
      gamePattern = [];
    }
  } else {
    palySound("wrong");
    /////////////////->>>>>>>>>>>>>>>>>>
$("#level-title").html("Game Over Prees A Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
      //....and whatever else you need to do
    }, 200);

    level = 0;
    i = -1;
    userClickedPattern = [];
    gamePattern = [];
  }

});

function nextSequence() {

  $("#level-title").html("Level " + level);
  level++;
  rand = Math.floor((Math.random() * 4));
  randomChosenColour = buttonColours[rand];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  palySound(randomChosenColour);
}

function palySound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
    //....and whatever else you need to do
  }, 100);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
