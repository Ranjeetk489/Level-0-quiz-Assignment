var readlineSync = require('readline-sync')
//Welcome Screen
var pName = readlineSync.question('What is your name? ')
console.log(`Welcome ${pName}!\n`)
var pAns = readlineSync.question('Would you like Play a simple and very fun trivia! ') 
var score = 0
var num = [0,1,2,3]
function shuffle(num) {
  num.sort(() => Math.random() - 0.5);
}
shuffle(num)
//list of questions
var trivia = [{
  que : "What is the largest animal in Cat family?" ,
  ans : "Tiger"},

  {que : "How many seasons does Money-heist have? ",
  ans : "Five"},

  {que : "What is the name(in movie) of mc(main character) of mission impossible movie?",
  ans :"Ethan Hunt"},

  {que : "How many parts Harry Potter Movie has?",
  ans : "Eight"}  
]
var highScores = [
  {
    name: "Ranjeet",
    score: 6,
  },

  {
    name: "Akash",
    score: 8,
  },
]
if(pAns == "yes")
{
  //function to play game and verify answers.
  function play(que ,ans){
    console.log(que)
    var input = readlineSync.question("Type-in your best answer! ")
   console.log(input)
    if(input == ans){
        console.log(ans)
        score += 2
        console.log("You won! your current score is "+ score)
    }
    else{
        console.log("Wrong answer! ")
        score -= 1
        console.log("You lost! your current score is "+ score)
    }
  }
  function showScores() {
    console.log("YAY! You SCORED: ", score)
    console.log("Here are the high scores");
    highScores.map(score => console.log(score.name, " : ", score.score))
  }
  for(var i = 0; i<3; i++){
  var currentQuestion = trivia[num[i]]
  play(currentQuestion.que, currentQuestion.ans)
  }
  showScores() 
}
else{
console.log("Ah that's sad! Maybe next time :)")
}
  
