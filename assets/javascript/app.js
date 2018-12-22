var name = "Trivia Game"
console.log(name);

//Create Variables
var correct = 0;
var incorrect = 0;
var noAnswer = 0;
var question = 0;

//Question bank array with another array in it with answer 
//-->Master array{Object}
//---------------->question, answer, choices-->[array]

var questionBank = [{
    question: "question 1",
    answer: "A",
    choices: ["A", "B", "C", "D"]
  },
  {
    question: "question 2",
    answer: "B",
    choices: ["A", "B", "C", "D"]
  },
  {
    question: "question 3",
    answer: "A",
    choices: ["A", "B", "C", "D"]
  },
  {
    question: "question 4",
    answer: "C",
    choices: ["A", "B", "C", "D"]
  },
  {
    question: "question 5",
    answer: "D",
    choices: ["A", "B", "C", "D"]
  },
];

//-----------------------------Start-Button-----------------------
//Startbutton on screen that will be hidden once triggered and start the questionScreen1
$("#startTrivia").on("click", function () {
  $(this).hide();
  blankScreen();
});
//-----------------------------Start-Button-----------------------

//-----------------------------Reset-Trivia-Button----------------
//added button to show at the end of the game
$("#resetTrivia").on("click", function () {
  $(this).hide();
  blankScreen();
});
//-----------------------------Reset-Trivia-Button----------------

//------------------------------TIMER-----------------------------
// timer variables
var intervalId;
var clockRunning = false;
var time = 20;
//timer count and display function 
function startTimer() {
  clearInterval(intervalId);
  setInterval(count, 1000);
}

function count() {
  time--;
  if (time === 0) {
    noAnsScreen();
  }
  $(".timer").text("Time Remaining: " + time);
}
//-------------------------------TIMER----------------------------


//----------------------blankScreen function--------------
//Clear stats and variables
function blankScreen() {
  //since things were not clearing properly added  lines to .empty out all the divs before question screen started
  $(".questionScreen, .messageScreen, .endScreen").empty();
  // hardreset variables once game has been reset
  correct = 0;
  incorrect = 0;
  noAnswer = 0;
  question = 0;
  questionScreen();
};
//----------------------blankQuestionScreen function--------------

function questionScreen() {
alert("hi");






startTimer();
if (time === 0) {
  noAnsScreen();
}

function noAnsScreen() {
  clearInterval(intervalId);
  time = 20;
  startTimer();
}


var triviaEnd = false;

function triviaEnd() {

}

}

// //function end screen
// function endscreen
//function for displaying question +  choices 

//function for onclick trigger to move to the next question if timer is running

//function to move questions with interval timer

//Start button to trigger the start of game with first question and count down timer starting
//correct/incorrect answer logging
//slideshow with questions
//End of count down timer will triger game to stop and show stats page




// * The player will have a limited amount of time to finish the quiz. 

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer