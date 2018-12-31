var correct = 0;
var incorrect = 0;
var noAnswer = 0;
var questionNumber = 0;
var startScreen;
var answered;
var correctAns;
var incorrectAns;
var timer;
var choiceSelected;
var time = 15;
var intervalId;

var isClockRunning=false;//Shirley, added


var questionBank = [
  "1) What is the name of the fictional reclusive African republic that T'challa, a.k.a Black Panther, hails from?",
  "2)Dr. Stephen Strange protects the New York Sanctum. Where are the other sanctums located?",
  "3)What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
  "4)Which Infinity Stone does Vision have embedded into his forehead?",
  "5)Which Avenger does Thor team up with in Thor: Ragnarok?"
];

var choiceBank = [
  ["A. Wakanda", "B. Agamotto", "C. Sakovia", "D. Terra"],
  ["A. Tokyo & Paris", "B. London & Hong Kong", "C. London & Beijing", "D. Rome & Kathmandu"],
  ["A. 2008", "B. 2004", "C. 2012", "D. 2006"],
  ["A. The Time Stone", "B. The Soul Stone", "C. The Mind Stone", "D. The Space Stone"],
  ["A. Ant Man", "B. Iron Man", "C. Hawkeye", "D. Hulk"]
];

var answerBank = [
  "A. Wakanda",
  "B. London & Hong Kong",
  "A. 2008",
  "C. The Mind Stone",
  "D. Hulk"
];

//function for start button start and hide endtriva button.
function startButton() {
  //hide endtriva button
  $("#resetTrivia").hide();
};

//function to show endtrivia button
function endButton() {
  $("#resetTrivia").show();
};

//what happens when screen starts
$(document).ready(function () {
  startButton();
});

// //empty divs in html file
// function emptyScreen() {
//    $(".timer, .question, .correctScreen, .incorrectScreen, .noAnsScreen, .endScreen, .choice1, .choice2, .choice3, .choice4, .cgif, .icgif, .nagif").empty();
// }
//empty divs in html file
function emptyScreen() {
  $(".timer, .question, .correctScreen, .incorrectScreen, .noAnsScreen, .correct, .incorrect, .noAnswer, .choice1, .choice2, .choice3, .choice4, .cgif, .icgif, .nagif").empty(); 
}
function questionScreen(event) {
  emptyScreen();
  
  $(".question").html(questionBank[questionNumber]);
  $(".choice1").append(choiceBank[questionNumber][0]);
  $(".choice2").append(choiceBank[questionNumber][1]);
  $(".choice3").append(choiceBank[questionNumber][2]);
  $(".choice4").append(choiceBank[questionNumber][3]);
  
  // Shirley, increment after displaying the question
  questionNumber++;
}

//correct answerscreen
function correctAnswerScreen() {
  correct++;
  emptyScreen();
  $(".correctScreen").html("Correct!");
  $(".cgif").html("gif");
  setTimeout(questionTracker, 2000);
};


//incorrect answerscreen
function incorrectAnswerScreen() {
  incorrect++;
  emptyScreen();
  $(".incorrectScreen").text("Incorrect!");
  $(".icgif").html("gif");
  setTimeout(questionTracker, 2000);
};

//no answerscreen
function noAnswerScreen() {
  noAnswer++;
  emptyScreen();
  $(".noAnsScreen").text("No Answer!");
  $(".nagif").html("gif");
  setTimeout(questionTracker, 2000); 
};

//------------------------------TIMER-----------------------------
function startTimer() {
  // Shirley, added the clock running flag to avoid creating multiple timers
  if(!isClockRunning){
    intervalId = setInterval(count, 1000);
    isClockRunning = true;
  }
  
}; // Shirley removed the count function from inside this function and put below

function count() {
  if (time === 0) {
    stopTimer();//Shirley, used the function to clear interval
    noAnswerScreen();
  }
  if (time > 0) {
    time--;
  }
  $(".timer").text("Time Remaining: " + time);
}

function stopTimer(){
  clearInterval(intervalId);
  isClockRunning = false;
}
//------------------------------TIMER-----------------------------
//function to increase question number
function questionTracker() {
  if (questionNumber === 5) {
    stopTimer();//Shirley Added stop timer
    endScreen();
  } // Moved this block before incrementing

  if (questionNumber < 5) {
    questionScreen(); // Shirley, moved the increment into QuestionScreen
    time = 15;
    startTimer(); //Shirley, every time a question is set, timer is set
  }
    
  };

function endScreen() {
  emptyScreen();
  console.log("Result : correct : " + correct +", incorrect : "+ incorrect +", noAnswer : "+ noAnswer);

  $(".correct").text(`Correct: ${correct}/5`);
  $(".incorrect").text(`Incorrect: ${incorrect}/5`);
  $(".noAnswer").text(`Unanswered: ${noAnswer}/5`);
  //-----------------------------Reset-Trivia-Button----------------
  //added button to show at the end of the game
  $("#resetTrivia").show();
  //-----------------------------Reset-Trivia-Button----------------
};


function resetGame() {
  correct = 0;
  incorrect = 0;
  noAnswer = 0;
  questionNumber = 0;
  time = 15;
  emptyScreen();
  $("#startTrivia").show();
  //startTimer(); // Shirley, dont need this as timer is set when the question is displayed
};

//Event Handlers - Shirley moved the event handlers separate from function
// On click of start button
$("#startTrivia").on("click", function () {
  $(this).hide();
  emptyScreen();
  questionScreen();
  startTimer();
});

//REset Game
$("#resetTrivia").on("click", function (event) {
  resetGame();
  $(this).hide();
});

//On click of any option
//click function to stop timer and go to next screen
$(".choice1, .choice2, .choice3, .choice4").on("click", function () {
  choiceSelected = $(this).text();
  console.log(choiceSelected);
  if (choiceSelected === answerBank[questionNumber]) {
    stopTimer(); // Shirley, moved to function
    correctAnswerScreen();
  } else {
    stopTimer(); // Shirley, moved to function
    incorrectAnswerScreen();
  }
});