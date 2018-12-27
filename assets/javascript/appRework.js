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
var time = 12


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

//function to create start button start and hide endtriva button.
function startButton(){
  $("#startTrivia").on("click", function () {
    $(this).hide();
    blankScreen();
  });
  $("#resetTrivia").hide();
}
//function to show endtrivia button
function endButton(){
  $("#resetTrivia").show();
}



