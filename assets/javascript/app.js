var name = "Trivia Game"
console.log(name);

//Create Variables
var correct = 0;
var incorrect = 0;
var noAnswer = 0;

// timer functions
var intervalId;
var clockRunning = false;
var time = 60;

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












// Code to run when page loads
window.onload = function name() {
  $("#start").on("click", start);

  $("#reset").on("click", reset);
};







function reset() {
  clearInterval(intervalId);
  clockRunning = false;
  time = 60;
  $("#display").text(time);

  //add conditions to reset to start div conditions******

}
//function for count down timer
function count() {
  time--;
  $("#display").text(time);
}

function start() {
  //function start initiates start of countdown timer
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }

  if (time === 0) {
    endScreen();
  }
  //function start initiating start of game****
}

//function end screen
function endscreen() {

}





//function for displaying question +  choices 

//function for onclick trigger to move to the next question if timer is running

//function to move questions with interval timer

//Start button to trigger the start of game with first question and count down timer starting
//correct/incorrect answer logging
//slideshow with questions
//End of count down timer will triger game to stop and show stats page
//Clear stats and variables



// * The player will have a limited amount of time to finish the quiz. 

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.