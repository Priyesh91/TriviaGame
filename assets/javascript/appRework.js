var correct = 0;
var incorrect = 0;
var noAnswer = 0;
var questionNumber = 0;
var choiceSelected;
var answered;
var correctAns;
var incorrectAns;
var noAns;
var endRandom = 0;

var questionBank = [
  "What is the name of the fictional reclusive African republic that T’challa, a.k.a Black Panther, hails from?",
  "Dr. Stephen Strange protects the New York Sanctum. Where are the other sanctums located?", 
  "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?", 
  "Which Infinity Stone does Vision have embedded into his forehead?",
  "Which Avenger does Thor team up with in Thor: Ragnarok?"
];

var choiceBank = [
  ["Wakanda", "Agamotto", "Sakovia", "Terra"],
  ["Tokyo & Paris", "London & Hong Kong", "London & Beijing", "Rome & Kathmandu"],
  ["2008", "2004", "2012", "2006"],
  ["The Time Stone", "The Soul Stone", "The Mind Stone", "The Space Stone"],
  ["Ant Man", "Iron Man", "Hawkeye", "Hulk"]
];

var answerBank = [
  "Wakanda",
  "London & Hong Kong",
  "2008",
  "The Mind Stone",
  "Hulk"
];


