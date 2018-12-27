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
var time = 12;
var intervalId;


var questionBank = [
  "1) What is the name of the fictional reclusive African republic that T’challa, a.k.a Black Panther, hails from?",
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
  $("#startTrivia").on("click", function () {
    $(this).hide();
    emptyScreen();
    generateQuestionScreen();
    startTimer();
  });
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
//empty divs in html file
function emptyScreen() {
  $(".timer, .question, .correctScreen, .incorrectScreen, .noAnsScreen, .endScreen, .choice1, .choice2, .choice3, .choice4, .cgif, .icgif, .nagif").empty();
}

function generateQuestionScreen(event) {
  emptyScreen();
  $(".question").html(questionBank[questionNumber]);

  $(".choice1").append(choiceBank[questionNumber][0]);
  $(".choice2").append(choiceBank[questionNumber][1]);
  $(".choice3").append(choiceBank[questionNumber][2]);
  $(".choice4").append(choiceBank[questionNumber][3]);

 
  //click function to stop timer and go to next screen
  $(".choice1, .choice2, .choice3, .choice4").on("click", function () {
    choiceSelected = $(this).text();
    clearInterval(intervalId);
    if (choiceSelected === answerBank[questionNumber]) {
      correctAnswerScreen();
    } else {
      incorrectAnswerScreen();
    }
  });
}




//correct answerscreen
function correctAnswerScreen() {
  correct++;
  emptyScreen();
  $(".correctScreen").text("Correct!");
  $(".cgif").html("gif");
  setTimeout(questionTracker, 5000);
};


//incorrect answerscreen
function incorrectAnswerScreen() {
  incorrect++;
  emptyScreen();
  $(".incorrectScreen").text("Incorrect!");
  $(".icgif").html("gif");
  setTimeout(questionTracker, 5000);
};

//no answerscreen
function noAnswerScreen() {
  noAnswer++;
  emptyScreen();
  $(".noAnsScreen").text("No Answer!");
  $(".nagif").html("gif");
  setTimeout(questionTracker, 7000);

};

//------------------------------TIMER-----------------------------
function startTimer() {
  intervalId = setInterval(count, 1000);

  function count() {
    if (time === 0) {
      clearInterval(intervalId);
      noAnswerScreen();
    }
    if (time > 0) {
      time--;
    }
    $(".timer").text("Time Remaining: " + time);
  }
};
//------------------------------TIMER-----------------------------
//function to increase question number
function questionTracker() {
  if (questionNumber < 6) {
    questionNumber++;
    generateQuestionScreen();
    time = 12;
    startTimer();
  } else {
    endScreen();
  }
};

function endScreen() {
  emptyScreen();
  $(".correct").text(`Correct: ${correct}/5`);
  $(".incorrect").text(`Incorrect: ${incorrect}/5`);
  $(".noAnswer").text(`Unanswered: ${noAnswer}/5`);
  //-----------------------------Reset-Trivia-Button----------------
  //added button to show at the end of the game
  $("#resetTrivia").show();
  $("#resetTrivia").on("click", function (event) {
    resetGame()
    $(this).hide();
  });
  //-----------------------------Reset-Trivia-Button----------------
};

function resetGame() {
  correct = 0;
  incorrect = 0;
  noAnswer = 0;
  questionNumber = 0;
  time = 12;
  emptyScreen();
  $("#startTrivia").show();
};