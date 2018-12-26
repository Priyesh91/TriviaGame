//Create Variables
//score variables
var correct = 0;
var incorrect = 0;
var noAnswer = 0;
// question variables
var questionNumber = 0;
var choiceSelected;
var answered;
var correctAns;
var incorrectAns;
var noAns;
var endRandom = 0;

//Question bank array with another array in it with answer 
//-->Master array{Object}
//---------------->question, answer, choices-->[array]
var questionBank = [{
    questionNumber: "1",
    question: "What is the name of the fictional reclusive African republic that T’challa, a.k.a Black Panther, hails from?",
    answer: "Wakanda",
    choices: ["Wakanda", "Agamotto", "Sakovia", "Terra"]
  },
  {
    questionNumber: "2",
    question: "Dr. Stephen Strange protects the New York Sanctum. Where are the other sanctums located?",
    answer: "London & Hong Kong",
    choices: ["Tokyo & Paris", "London & Hong Kong", "London & Beijing", "Rome & Kathmandu"]
  },
  {
    questionNumber: "3",
    question: "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
    answer: "2008",
    choices: ["2008", "2004", "2012", "2006"]
  },
  {
    questionNumber: "4",
    question: "Which Infinity Stone does Vision have embedded into his forehead?",
    answer: "The Mind Stone",
    choices: ["The Time Stone", "The Soul Stone", "The Mind Stone", "The Space Stone"]
  },
  {
    questionNumber: "5",
    question: "Which Avenger does Thor team up with in Thor: Ragnarok?",
    answer: "Hulk",
    choices: ["Ant Man", "Iron Man", "Hawkeye", "Hulk"]
  },
];
console.log(questionBank[0].question);
console.log(questionBank[0].choices[0]);
//messageArray
var messageArray = {
  correct: "Correct!",
  incorrect: "Incorrect!",
  timeup: "Time Up!",
  lastquestion: "Calculating score..."
}

$(document).ready(function () {

  //-----------------------------Start-Button-----------------------
  //Startbutton on screen that will be hidden once triggered and start the questionScreen1
  $("#startTrivia").on("click", function () {
    $(this).hide();
    blankScreen();
  });
  //-----------------------------Start-Button-----------------------

  //-----------------------------Reset-Trivia-Button----------------
  //added button to show at the end of the game
  $("#resetTrivia").hide();
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
    $(".timer, .question, .correctScreen, .incorrectScreen, .noAnsScreen, .endScreen, .choice1, .choice2, .choice3, .choice4, .cgif, .icgif, .nagif").empty();
  }
  //-------------------------emptyScreen function--------------------

  //-------------------------------questionScreen function (QUESTION 1)--------------------------
  //-------------------------------questionScreen function (QUESTION 1)--------------------------
  function questionScreen() {
    //------------------------------TIMER-----------------------------
    // timer variables
    var time = 12;
    var intervalId;

    // timer count and display function 
    function startTimer() {
      clearInterval(intervalId);
      intervalId = setInterval(count, 1000);
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
    $(".question").html(questionBank[questionNumber].question);
    //write question 1 choices to the page
    $(".choice1").attr({
      "data-index": "Wakanda"
    }).append(questionBank[questionNumber].choices[0]);
    $(".choice2").attr({
      "data-index": "B"
    }).append(questionBank[questionNumber].choices[1]);
    $(".choice3").attr({
      "data-index": "C"
    }).append(questionBank[questionNumber].choices[2]);
    $(".choice4").attr({
      "data-index": "D"
    }).append(questionBank[questionNumber].choices[3]);
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
    $(".correctScreen").text("Correct!");
    $(".cgif").html('<iframe src="https://giphy.com/embed/pNTxtmpDVOLToFpoDp"></iframe>');
    setTimeout(questionScreen2, 3000);
  }

  function incorrectScreen() {
    emptyScreen();
    $(".incorrectScreen").text("Incorrect!");
    $(".icgif").html('<iframe src="https://giphy.com/embed/12HufQyjgtDttK"></iframe>');
    setTimeout(questionScreen2, 3000);
  }

  function timeUpScreen() {
    emptyScreen();
    $(".noAnsScreen").text("No Answer!");
    $(".nagif").html('<iframe src="https://giphy.com/embed/3og0IM1SoMQ3oF7pmM"</iframe>');
    setTimeout(questionScreen2, 8000);
  }
  //-------------------------END--questionScreen function (QUESTION 1)--------------------------
  //-------------------------END--questionScreen function (QUESTION 1)--------------------------

  //-----------------------START---questionScreen function (QUESTION 2)--------------------------
  //-----------------------START---questionScreen function (QUESTION 2)--------------------------
  function questionScreen2() {
    emptyScreen();
    //------------------------------TIMER-----------------------------
    // timer variables
    var time = 12;
    var intervalId;
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
    $(".question").html(questionBank[questionNumber].question);
    $(".choice1").attr({
      "data-index": "A"
    }).append(questionBank[questionNumber].choices[0]);
    $(".choice2").attr({
      "data-index": "London & Hong Kong"
    }).append(questionBank[questionNumber].choices[1]);
    $(".choice3").attr({
      "data-index": "C"
    }).append(questionBank[questionNumber].choices[2]);
    $(".choice4").attr({
      "data-index": "D"
    }).append(questionBank[questionNumber].choices[3]);
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
    $(".correctScreen").text("Correct!");
    $(".cgif").html('<iframe src="https://giphy.com/embed/8FV8DMUqB6oUOsDkQd"></iframe>');
    setTimeout(questionScreen3, 4000);
  }

  function incorrectScreen2() {
    emptyScreen();
    $(".incorrectScreen").text("Incorrect!");
    $(".icgif").html('<iframe src="https://giphy.com/embed/26AHKGvq2zAJmfDj2"></iframe>');
    setTimeout(questionScreen3, 5000);
  }

  function timeUpScreen2() {
    emptyScreen();
    $(".noAnsScreen").text("No Answer!");
    $(".nagif").html('<iframe src="https://giphy.com/embed/3og0IM1SoMQ3oF7pmM"</iframe>');
    setTimeout(questionScreen3, 8000);
  }
  //-------------------------END--questionScreen function (QUESTION 2)--------------------------
  //-------------------------END--questionScreen function (QUESTION 2)--------------------------

  //-----------------------START---questionScreen function (QUESTION 3)--------------------------
  //-----------------------START---questionScreen function (QUESTION 3)--------------------------
  function questionScreen3() {
    emptyScreen();
    //------------------------------TIMER-----------------------------
    // timer variables
    var time = 12;
    var intervalId;
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
    $(".question").html(questionBank[questionNumber].question);
    $(".choice1").attr({
      "data-index": "2008"
    }).append(questionBank[questionNumber].choices[0]);
    $(".choice2").attr({
      "data-index": "B"
    }).append(questionBank[questionNumber].choices[1]);
    $(".choice3").attr({
      "data-index": "C"
    }).append(questionBank[questionNumber].choices[2]);
    $(".choice4").attr({
      "data-index": "D"
    }).append(questionBank[questionNumber].choices[3]);
    //start timer once questions displayed
    startTimer();
    //click function to stop timer and go to next screen
    console.log(questionBank[questionNumber].answer);
    $(".choice1, .choice2, .choice3, .choice4").on("click", function () {
      choiceSelected3 = $(this).data("index");
      clearInterval(intervalId);
      answered = true;
      console.log(questionBank[questionNumber].answer);
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
    $(".correctScreen").text("Correct!");
    $(".cgif").html('<iframe src="https://giphy.com/embed/VFB3cJJne7b5m"></iframe>');
    setTimeout(questionScreen4, 5000);
  }

  function incorrectScreen3() {
    emptyScreen();
    $(".incorrectScreen").text("Incorrect!");
    $(".icgif").html('<iframe src="https://giphy.com/embed/qmfpjpAT2fJRK"></iframe>');
    setTimeout(questionScreen4, 5000);
  }

  function timeUpScreen3() {
    emptyScreen();
    $(".noAnsScreen").text("No Answer!");
    $(".nagif").html('<iframe src="https://giphy.com/embed/3og0IM1SoMQ3oF7pmM"</iframe>');
    setTimeout(questionScreen4, 8000);
  }
  //-------------------------END--questionScreen function (QUESTION 3)--------------------------
  //-------------------------END--questionScreen function (QUESTION 3)--------------------------

  //-----------------------START---questionScreen function (QUESTION 4)--------------------------
  //-----------------------START---questionScreen function (QUESTION 4)--------------------------
  function questionScreen4() {
    emptyScreen();
    //------------------------------TIMER-----------------------------
    // timer variables
    var time = 12;
    var intervalId;
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
    $(".question").html(questionBank[questionNumber].question);
    $(".choice1").attr({
      "data-index": "A"
    }).append(questionBank[questionNumber].choices[0]);
    $(".choice2").attr({
      "data-index": "B"
    }).append(questionBank[questionNumber].choices[1]);
    $(".choice3").attr({
      "data-index": "The Mind Stone"
    }).append(questionBank[questionNumber].choices[2]);
    $(".choice4").attr({
      "data-index": "D"
    }).append(questionBank[questionNumber].choices[3]);
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
    $(".correctScreen").text("Correct!");
    $(".cgif").html('<iframe src="https://giphy.com/embed/NksASCr1ru4LK"></iframe>');
    setTimeout(questionScreen5, 4000);
  }

  function incorrectScreen4() {
    emptyScreen();
    $(".incorrectScreen").text("Incorrect!");
    $(".icgif").html('<iframe src="https://giphy.com/embed/NksASCr1ru4LK"></iframe>');
    setTimeout(questionScreen5, 4000);
  }

  function timeUpScreen4() {
    emptyScreen();
    $(".noAnsScreen").text("No Answer!");
    $(".nagif").html('<iframe src="https://giphy.com/embed/3og0IM1SoMQ3oF7pmM"</iframe>');
    setTimeout(questionScreen5, 8000);
  }
  //-------------------------END--questionScreen function (QUESTION 4)--------------------------
  //-------------------------END--questionScreen function (QUESTION 4)--------------------------


  //-----------------------START---questionScreen function (QUESTION 5)--------------------------
  //-----------------------START---questionScreen function (QUESTION 5)--------------------------
  function questionScreen5() {
    emptyScreen();
    //------------------------------TIMER-----------------------------
    // timer variables
    var time = 12;
    var intervalId;
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
    $(".question").html(questionBank[questionNumber].question);
    $(".choice1").attr({
      "data-index": "A"
    }).append(questionBank[questionNumber].choices[0]);
    $(".choice2").attr({
      "data-index": "B"
    }).append(questionBank[questionNumber].choices[1]);
    $(".choice3").attr({
      "data-index": "C"
    }).append(questionBank[questionNumber].choices[2]);
    $(".choice4").attr({
      "data-index": "Hulk"
    }).append(questionBank[questionNumber].choices[3]);
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
    $(".correctScreen").text("Correct!");
    $(".cgif").html('<iframe src="">https://giphy.com/embed/eenzqB2MsGKbK</iframe>');
    setTimeout(triviaEnded, 4000);
  }

  function incorrectScreen5() {
    emptyScreen();
    $(".incorrectScreen").text("Incorrect!");
    $(".icgif").html('<iframe src="https://giphy.com/embed/k9kKWKaUEDBM4"></iframe>');
    setTimeout(triviaEnded, 4000);
  }

  function timeUpScreen5() {
    emptyScreen();
    $(".noAnsScreen").text("No Answer!");
    $(".nagif").html('<iframe src="https://giphy.com/embed/3og0IM1SoMQ3oF7pmM"</iframe>');
    setTimeout(triviaEnded, 8000);
  }
  //-------------------------END--questionScreen function (QUESTION 5)--------------------------
  //-------------------------END--questionScreen function (QUESTION 5)--------------------------
  function triviaEnded() {
    emptyScreen();
    $(".timer").text("Trivia Completed Good Job!");
    endScreen();

    //------------------------------TIMER-----------------------------
    // timer variables
    var time = 5;
    var intervalId;
    // timer count and display function
    function startTimer() {
      clearInterval(intervalId);
      intervalId = setInterval(count, 1000);
    };

    function count() {
      time--;
      if (time === 0) {
        stop();
      }
    };

    function stop() {
      clearInterval(intervalId);
    };
    startTimer();
    //-------------------------------TIMER----------------------------
  }
});
//--------------------------END SCREEN---------------------------------------------------------
function endScreen() {
  $(".timer, .question, .correctScreen, .incorrectScreen, .noAnsScreen, .endScreen, .choice1, .choice2, .choice3, .choice4").empty();

  $(".correct").text(`Correct: ${correct}/5`);
  $(".incorrect").text(`Incorrect: ${incorrect}/5`);
  $(".noAnswer").text(`Unanswered: ${noAnswer}/5`);
  //-----------------------------Reset-Trivia-Button----------------
  //added button to show at the end of the game
  $("#resetTrivia").show();
  $("#resetTrivia").on("click", function () {
    $(this).hide();
    blankScreen();
  });
  //-----------------------------Reset-Trivia-Button----------------
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