var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name? ");
console.log("Hey", userName, "! Welcome to the Pokemon quiz.\n");

var score = 0

function quiz(question, answer){
    var userAnswer = readlineSync.question(question);
    if(userAnswer === answer){
        score += 1;
        console.log("Correct! Your current score is: ",score)
    }
    else{
        if(score < 1){
            console.log("Wrong! Your scores won't go down anymore. Your current score is: ",score)
        }
        else{
            score -= 1;
            console.log("Wrong! your score is: ",score);
        }
    }
    console.log("-------------------------------");
}

var questions = [{
    ques: "Who's the pokemon with rank 1? ",
    ans: "bulbasaur"
},
{
    ques: "Which is the best fire/dragon type pokemon? ",
    ans: "charizard"
},
{
    ques: "Who is the main character in the series pokemon? ",
    ans: "ash"
},
{
    ques: "What is the name of ash's starter pokemon? ",
    ans: "pikachu"
},
{
    ques: "Does ash's starter pokemon ever evolve? ",
    ans: "no"
},
{
    ques: "At what level does ash's starter pokemon learns thunderbolt by itself? ",
    ans: "26"
},
{
    ques: "Who has crush on ash? ",
    ans: "serena"
},
{
    ques: "Does ash ever gets kissed? ",
    ans: "yes"
},
{
    ques: "Who kisses ash? ",
    ans: "serena"
},
]

for(let i = 0; i < questions.length; i++){
    var currQues = questions[i];
    quiz(currQues.ques, currQues.ans)
}
console.log("Your final score is: ",score);
