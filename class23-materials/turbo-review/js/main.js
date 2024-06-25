// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentance = 'how are you doing?';

if(sentance.endsWith('?')){
    alert(sentance);
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let words = "Hello jr. dev here jr. dev are jr. dev one jr. dev"
let newWords = words.replaceAll('jr. dev', 'software engineer');
console.log(newWords);
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissor(){
    let random = Math.floor(Math.random() * 3);
     
    if(random === 0){
        return 'rock';
    }else if (random === 1){
        return 'paper';
    }else{
        return 'scissors';
    } 
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(choice){
    let bot = rockPaperScissor();
    if(choice === 'rock' && bot === 'scissors' || choice === 'paper' && bot === 'rock' || choice === 'scissors' && bot === 'paper'){
        return `You winnn!`;
    }else if(choice === bot){
        return `a tie`;
    }else{
        return `You lose`;
    }
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function resultOfChoices(choices){
    for(let i = 0; i < choices.length; i++){
        console.log(checkWin(choices[i]));
    }
}