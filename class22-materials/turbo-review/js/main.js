// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = '  Coffe  '
console.log(favDrink.trim());

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let fruits = 'pineapple grapes melon apple mango guava'
let fruitsSep = fruits.split(' ');

console.log(fruitsSep.includes('apple'));
//way that leon shows in class 22
if( fruits.search('apple') !== -1){
    console.log('yes');
}else{
    console.log('no');
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let random = Math.floor(Math.random() * 3);
    if(random === 0){
        return 'rock';
    }else if(random === 1){
        return 'paper';
    }else{
        return 'scissors';
    }
}
//way that leon shows in class 22

function rockPaperScissors2(){
    let random = Math.random();
    if(random < .33){
        return 'rock';
    }else if(random < .66){
        return 'paper';
    }else{
        return 'scissors';
    }
}

console.log(rockPaperScissors());
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(Playerchoice){
    let botPlayed = rockPaperScissors();
    if( (Playerchoice === 'rock' && botPlayed === 'scissors') || (Playerchoice === 'paper' && botPlayed === 'rock') || (Playerchoice === 'scissors' && botPlayed === 'paper') ){
        console.log(`YOUT WIN!`);
    }else if( Playerchoice === botPlayed){
        console.log(`You tied`);
    }else{
        console.log(`You lose`);
    }
}

checkWin('paper');

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function morePlay(array){
    for (const choice of array) {
        checkWin(choice);
    }
}

const jogadas = ['rock', 'paper', 'scissors', 'scissors', 'paper','scissors', 'rock', 'rock', 'paper', 'scissors', 'rock']
morePlay(jogadas);