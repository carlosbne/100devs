// *Variables*
// Create a variable and console log the value
let bringItOn = "Three Cherrs!"
/* console.log(bringItOn); */

// Create a variable, add 10 to it, and alert the value
let again = 15;
again += 10;
/* alert(again); */

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNambersAndAlert(n1, n2, n3, n4){
    let sub = n1 - n2 - n3 - n4;
    alert(sub);
}
/* subtractFourNambersAndAlert(10, 2, 2, 2); */

// Create a function that divides one number by another and returns the remainder
function getTheRemainder(n1, n2){
    let x = n1 % n2;
    return x;
}
/* console.log(getTheRemainder(59, 3)); */
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNumbers(n1, n2){
    let x = n1 + n2;
    if(x > 50){
       return alert('Jumanji');
    }
    return console.log(x);
}
/* addTwoNumbers(42, 12); */

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multThree(n1, n2, n3){
    let x = n1 * n2 * n3;
    if(x % 3 === 0){
        return alert('ZEBRAAA!')
    }
    return console.log('não zebra :(');
}
/* multThree(2, 2, 2); */
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordAndNumber(word, numb){
    for(let i = 0; i < numb; i++){
        console.log(word);
    }
}

/* wordAndNumber('Arroz', 5); */