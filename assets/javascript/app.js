//Create Variables
//score variables
var correct = 0;
var incorrect = 0;
var noAnswer = 0;
var noAnswerByPass = 0;
// question variables
var questionNumber = 0;
var choiceSelected;
var answered;
var correctAns;
var incorrectAns;
var noAns;
// timer variables
var time = 12;
var intervalId;
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

//-------------------------emptyScreen function--------------------
function emptyScreen() {
  $(".timer, .question, .correctScreen, .incorrectScreen, .noAnsScreen, .endScreen, .choice1, .choice2, .choice3, .choice4").empty();
}
//-------------------------emptyScreen function--------------------

//-------------------------------questionScreen function (QUESTION 1)--------------------------
//-------------------------------questionScreen function (QUESTION 1)--------------------------
function questionScreen() {
  //------------------------------TIMER-----------------------------
  // timer count and display function 
  function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(count, 1000);
    answered = false;
  };

  function count() {
    time--;
    $(".timer").text("Time Remaining: " + time);
    if (time === 0) {
      stop();
      noAnswer++;
      timeUpScreen();
    }
  };

  function stop() {
    clearInterval(intervalId);
  };
  //-------------------------------TIMER----------------------------
  //questionnumber declared as object 1 in array to keep same code for subsequent questions just change the question number value code is inefficient but quickest way for me to just copy and paste it for multiple question
  questionNumber = 0;
  //write question 1 to the page
  $(".question").html(`<h2>${questionBank[questionNumber].question}<h2>`);
  //write question 1 choices to the page
  $(".choice1").attr({
    "data-index": "A"
  }).append(`<h3>${questionBank[questionNumber].choices[0]}`);
  $(".choice2").attr({
    "data-index": "B"
  }).append(`<h3>${questionBank[questionNumber].choices[1]}`);
  $(".choice3").attr({
    "data-index": "C"
  }).append(`<h3>${questionBank[questionNumber].choices[2]}`);
  $(".choice4").attr({
    "data-index": "D"
  }).append(`<h3>${questionBank[questionNumber].choices[3]}`);
  //start timer once questions displayed
  startTimer();
  //click function to stop timer and go to next screen
  $(".choice1, .choice2, .choice3, .choice4").on("click", function () {
    choiceSelected = $(this).data("index");
    clearInterval(intervalId);
    answered = true;
    if (choiceSelected === questionBank[questionNumber].answer) {
      correct++;
      correctScreen();
    } else {
      incorrect++;
      incorrectScreen();
    }
  });
}

function correctScreen() {
  emptyScreen();
  $(".correctScreen").text("Correct q1!");
  setTimeout(questionScreen2, 2000);
}

function incorrectScreen() {
  emptyScreen();
  $(".incorrectScreen").text("Incorrect q1!");
  setTimeout(questionScreen2, 2000);
}

function timeUpScreen() {
  emptyScreen();
  $(".noAnsScreen").text("No Answer q1!");
  setTimeout(questionScreen2, 2000);
}
//-------------------------END--questionScreen function (QUESTION 1)--------------------------
//-------------------------END--questionScreen function (QUESTION 1)--------------------------

//-----------------------START---questionScreen function (QUESTION 2)--------------------------
//-----------------------START---questionScreen function (QUESTION 2)--------------------------
function questionScreen2() {
  emptyScreen();
  //------------------------------TIMER-----------------------------
  // timer count and display function
  function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(count, 1000);
    answered = false;
  };

  function count() {
    time--;
    $(".timer").text("Time Remaining: " + time);
    if (time === 0) {
      stop();
      noAnswer++;
      timeUpScreen2();
    }
  };

  function stop() {
    clearInterval(intervalId);
  };
  //-------------------------------TIMER----------------------------
  questionNumber = 1;
  $(".question").html(`<h2>${questionBank[questionNumber].question}<h2>`);
  $(".choice1").attr({
    "data-index": "A"
  }).append(`<h3>${questionBank[questionNumber].choices[0]}`);
  $(".choice2").attr({
    "data-index": "B"
  }).append(`<h3>${questionBank[questionNumber].choices[1]}`);
  $(".choice3").attr({
    "data-index": "C"
  }).append(`<h3>${questionBank[questionNumber].choices[2]}`);
  $(".choice4").attr({
    "data-index": "D"
  }).append(`<h3>${questionBank[questionNumber].choices[3]}`);
  //start timer once questions displayed
  startTimer();
  //click function to stop timer and go to next screen
  $(".choice1, .choice2, .choice3, .choice4").on("click", function () {
    choiceSelected2 = $(this).data("index");
    clearInterval(intervalId);
    answered = true;
    if (choiceSelected2 === questionBank[questionNumber].answer) {
      correct++;
      correctScreen2();
    } else {
      incorrect++;
      incorrectScreen2();
    }
  });
}
function correctScreen2() {
  emptyScreen();
  $(".correctScreen").text("Correct q2!");
  setTimeout(questionScreen3, 2000);
}
function incorrectScreen2() {
  emptyScreen();
  $(".incorrectScreen").text("Incorrect q2!");
  setTimeout(questionScreen3, 2000);
}
function timeUpScreen2() {
  emptyScreen();
  $(".noAnsScreen").text("No Answer q2!");
  setTimeout(questionScreen3, 2000);
}
//-------------------------END--questionScreen function (QUESTION 2)--------------------------
//-------------------------END--questionScreen function (QUESTION 2)--------------------------

//-----------------------START---questionScreen function (QUESTION 3)--------------------------
//-----------------------START---questionScreen function (QUESTION 3)--------------------------
function questionScreen3() {
  emptyScreen();
  //------------------------------TIMER-----------------------------
  // timer count and display function
  function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(count, 1000);
    answered = false;
  };
  function count() {
    time--;
    $(".timer").text("Time Remaining: " + time);
    if (time === 0) {
      stop();
      noAnswer++;
      timeUpScreen3();
    }
  };
  function stop() {
    clearInterval(intervalId);
  };
  //-------------------------------TIMER----------------------------
  questionNumber = 2;
  $(".question").html(`<h2>${questionBank[questionNumber].question}<h2>`);
  $(".choice1").attr({
    "data-index": "A"
  }).append(`<h3>${questionBank[questionNumber].choices[0]}`);
  $(".choice2").attr({
    "data-index": "B"
  }).append(`<h3>${questionBank[questionNumber].choices[1]}`);
  $(".choice3").attr({
    "data-index": "C"
  }).append(`<h3>${questionBank[questionNumber].choices[2]}`);
  $(".choice4").attr({
    "data-index": "D"
  }).append(`<h3>${questionBank[questionNumber].choices[3]}`);
  //start timer once questions displayed
  startTimer();
  //click function to stop timer and go to next screen
  $(".choice1, .choice2, .choice3, .choice4").on("click", function () {
    choiceSelected3 = $(this).data("index");
    clearInterval(intervalId);
    answered = true;
    if (choiceSelected3 === questionBank[questionNumber].answer) {
      correct++;
      correctScreen3();
    } else {
      incorrect++;
      incorrectScreen3();
    }
  });
}
function correctScreen3() {
  emptyScreen();
  $(".correctScreen").text("Correct q3!");
  setTimeout(questionScreen4, 2000);
}
function incorrectScreen3() {
  emptyScreen();
  $(".incorrectScreen").text("Incorrect q3!");
  setTimeout(questionScreen4, 2000);
}
function timeUpScreen3() {
  emptyScreen();
  $(".noAnsScreen").text("No Answer q3!");
  setTimeout(questionScreen4, 2000);
}
//-------------------------END--questionScreen function (QUESTION 3)--------------------------
//-------------------------END--questionScreen function (QUESTION 3)--------------------------

//-----------------------START---questionScreen function (QUESTION 4)--------------------------
//-----------------------START---questionScreen function (QUESTION 4)--------------------------
function questionScreen4() {
  emptyScreen();
  //------------------------------TIMER-----------------------------
  // timer count and display function
  function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(count, 1000);
    answered = false;
  };
  function count() {
    time--;
    $(".timer").text("Time Remaining: " + time);
    if (time === 0) {
      stop();
      noAnswer++;
      timeUpScreen4();
    }
  };
  function stop() {
    clearInterval(intervalId);
  };
  //-------------------------------TIMER----------------------------
  questionNumber = 3;
  $(".question").html(`<h2>${questionBank[questionNumber].question}<h2>`);
  $(".choice1").attr({
    "data-index": "A"
  }).append(`<h3>${questionBank[questionNumber].choices[0]}`);
  $(".choice2").attr({
    "data-index": "B"
  }).append(`<h3>${questionBank[questionNumber].choices[1]}`);
  $(".choice3").attr({
    "data-index": "C"
  }).append(`<h3>${questionBank[questionNumber].choices[2]}`);
  $(".choice4").attr({
    "data-index": "D"
  }).append(`<h3>${questionBank[questionNumber].choices[3]}`);
  //start timer once questions displayed
  startTimer();
  //click function to stop timer and go to next screen
  $(".choice1, .choice2, .choice3, .choice4").on("click", function () {
    choiceSelected4 = $(this).data("index");
    clearInterval(intervalId);
    answered = true;
    if (choiceSelected4 === questionBank[questionNumber].answer) {
      correct++;
      correctScreen4();
    } else {
      incorrect++;
      incorrectScreen4();
    }
  });
}
function correctScreen4() {
  emptyScreen();
  $(".correctScreen").text("Correct q4!");
  setTimeout(questionScreen5, 2000);
}
function incorrectScreen4() {
  emptyScreen();
  $(".incorrectScreen").text("Incorrect q4!");
  setTimeout(questionScreen5, 2000);
}
function timeUpScreen4() {
  emptyScreen();
  $(".noAnsScreen").text("No Answer q4!");
  setTimeout(questionScreen5, 2000);
}
//-------------------------END--questionScreen function (QUESTION 4)--------------------------
//-------------------------END--questionScreen function (QUESTION 4)--------------------------


//-----------------------START---questionScreen function (QUESTION 5)--------------------------
//-----------------------START---questionScreen function (QUESTION 5)--------------------------
function questionScreen5() {
  emptyScreen();
  //------------------------------TIMER-----------------------------
  // timer count and display function
  function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(count, 1000);
    answered = false;
  };
  function count() {
    time--;
    $(".timer").text("Time Remaining: " + time);
    if (time === 0) {
      stop();
      noAnswer++;
      timeUpScreen5();
    }
  };
  function stop() {
    clearInterval(intervalId);
  };
  //-------------------------------TIMER----------------------------
  questionNumber = 4;
  $(".question").html(`<h2>${questionBank[questionNumber].question}<h2>`);
  $(".choice1").attr({
    "data-index": "A"
  }).append(`<h3>${questionBank[questionNumber].choices[0]}`);
  $(".choice2").attr({
    "data-index": "B"
  }).append(`<h3>${questionBank[questionNumber].choices[1]}`);
  $(".choice3").attr({
    "data-index": "C"
  }).append(`<h3>${questionBank[questionNumber].choices[2]}`);
  $(".choice4").attr({
    "data-index": "D"
  }).append(`<h3>${questionBank[questionNumber].choices[3]}`);
  //start timer once questions displayed
  startTimer();
  //click function to stop timer and go to next screen
  $(".choice1, .choice2, .choice3, .choice4").on("click", function () {
    choiceSelected5 = $(this).data("index");
    clearInterval(intervalId);
    answered = true;
    if (choiceSelected5 === questionBank[questionNumber].answer) {
      correct++;
      correctScreen5();
    } else {
      incorrect++;
      incorrectScreen5();
    }
  });
}
function correctScreen5() {
  emptyScreen();
  $(".correctScreen").text("Correct q5!");
  setTimeout(endScreen, 2000);
}
function incorrectScreen5() {
  emptyScreen();
  $(".incorrectScreen").text("Incorrect q5!");
  setTimeout(endScreen, 2000);
}
function timeUpScreen5() {
  emptyScreen();
  $(".noAnsScreen").text("No Answer q5!");
  setTimeout(endScreen, 2000);
}
//-------------------------END--questionScreen function (QUESTION 5)--------------------------
//-------------------------END--questionScreen function (QUESTION 5)--------------------------
function endScreen() {
  emptyScreen();
  alert("DONE BABY!")
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
//-------------------------------------------fail loop function------------------------
// for (var i = 0; i < 3; i++) {
//   var questionChoices = $("<div>");
//   questionChoices.text(questionbank[questionNumber].choices[i]);

//   questionChoices.attr({
//     "data-index": i
//   });
//   questionChoices.addclass("choicesJS");
//   $(".choices").append(questionChoices);