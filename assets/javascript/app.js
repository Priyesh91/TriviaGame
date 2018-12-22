var name = "Trivia Game"
console.log(name);

//Create Variables
//score variables
var correct = 0;
var incorrect = 0;
var noAnswer = 0;
// var question = 0;-----------delete

// question variables
var questionNumber = 0;
var choiceSelected;
var answered;
var correctAns;
var incorrectAns;
var noAns;
//Question bank array with another array in it with answer 
//-->Master array{Object}
//---------------->question, answer, choices-->[array]

var questionBank = [{
    questionNumber: "1",
    question: "question 1",
    answer: "A",
    choices: ["A", "B", "C", "D"]
  },
  {
    questionNumber: "2",
    question: "question 2",
    answer: "B",
    choices: ["A", "B", "C", "D"]
  },
  {
    questionNumber: "3",
    question: "question 3",
    answer: "A",
    choices: ["A", "B", "C", "D"]
  },
  {
    questionNumber: "4",
    question: "question 4",
    answer: "C",
    choices: ["A", "B", "C", "D"]
  },
  {
    questionNumber: "5",
    question: "question 5",
    answer: "D",
    choices: ["A", "B", "C", "D"]
  },
];
console.log(questionBank[0].question);
console.log(questionBank[0].choices[2]);
//messageArray
var messageArray = {
  correct: "Correct!",
  incorrect: "Incorrect!",
  timeup: "Time Up!",
  lastquestion: "Calculating score..."
}
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
var time = 20;
//timer count and display function 
function startTimer() {
  clearInterval(intervalId);
  setInterval(count, 1000);

}

function count() {
  time--;
  $(".timer").text("Time Remaining: " + time);
}
//-------------------------------TIMER----------------------------

//-------------------------blankScreen function-------------------
//Clear stats and variables
function blankScreen() {
  //since things were not clearing properly added  lines to .empty out all the divs before question screen started
  $(".timer, .question, .correctScreen, .incorrectScreen, .noAnsScreen, .endScreen, .choice1, .choice2, .choice3, .choice4").empty();
  // hardreset variables once game has been reset
  correct = 0;
  incorrect = 0;
  noAnswer = 0;
  questionNumber = 0;
  questionScreen();
};
//-------------------------blankScreen function--------------------

//-------------------------questionScreen function-------------------------------
function questionScreen() {
  startTimer();

  answered = true;
  //write question 1 to the page
  $(".question").html(`<h2>${questionBank[questionNumber].question}<h2>`);
  //write question 1 choices to the page
  $(".choice1").attr({
    "data-index": 0
  }).append(`<h3>${questionBank[questionNumber].choices[0]}`);
  $(".choice2").attr({
    "data-index": 1
  }).append(`<h3>${questionBank[questionNumber].choices[1]}`);
  $(".choice3").attr({
    "data-index": 2
  }).append(`<h3>${questionBank[questionNumber].choices[2]}`);
  $(".choice4").attr({
    "data-index": 3
  }).append(`<h3>${questionBank[questionNumber].choices[3]}`);
  //click function to stop timer and go to next screen
  $(".choice1, .choice2, .choice3, .choice4").on("click", function () {
    choiceSelected = $(this).data("index");
    clearInterval(intervalId);
    messageScreen();
  })
}

function messageScreen() {
  
}




















//-------------------------questionScreen function--------------------------------



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
//-------------------------------------------fail loop function------------------------
// for (var i = 0; i < 3; i++) {
//   var questionChoices = $("<div>");
//   questionChoices.text(questionbank[questionNumber].choices[i]);

//   questionChoices.attr({
//     "data-index": i
//   });
//   questionChoices.addclass("choicesJS");
//   $(".choices").append(questionChoices);