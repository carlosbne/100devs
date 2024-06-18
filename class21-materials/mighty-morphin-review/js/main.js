// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let myFavHoliday;
myFavHoliday = 'Natal';
console.log(myFavHoliday.toUpperCase());
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let spider = 'peter parker';
alert(spider.slice(-3));
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subFiveAndAlert(n1, n2, n3, n4, n5){
    let difference = 100 - (n1 + n2+ n3 + n4 + n5);
    alert( Math.abs(difference) );
}

subFiveAndAlert(1, 2, 3, 4, 5);
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowestAndHighest(n1, n2, n3){
    let max = Math.max(n1, n2, n3);
    let min = Math.min(n1, n2, n3);

    console.log( `highest num is ${max}, and the lowest num is ${min}` );
}
lowestAndHighest(54, 23, 102);
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

/* function headsOrTails(){
    return Math.floor(Math.random() * 2) === 1 ? 'heads':'tails';
} */
//console.log(headsOrTails());

const headsOrTails = _ => Math.random() < .5 ? 'heads' : 'tails';

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function consHeadsOrTails(num){
    for(let i = 0; i < num; i++){
        console.log(headsOrTails());
    }
}
consHeadsOrTails(5);