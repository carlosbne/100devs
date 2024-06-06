//---Easy
//create a function that subtracts two numbers and alerts the difference
function sub(a, b) {
    alert(a - b);
}

/* sub(50, 30); */

//create a function that divides three numbers and console logs the quotient

function divedesThreeNumbers(a, b, c) {
    let result = (a / b) / c;
    console.log(result);
}

/* divedesThreeNumbers(12, 4, 3); */

//create a function that multiplys three numbers and returns the product

function multThreeNumbers(a, b, c) {
    let result = (a * b) * c;
    return result;
}

function turnIntoMoney() {
    let product = multThreeNumbers(5, 10, 2);
    alert('$' + product);
}

/* turnIntoMoney(); */

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function calc(a, b, c) {
    let result = (a + b) % c;
    return result;
}

console.log(calc(3, 3, 2));
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function hardOne(a, b, c, d) {
    let x = a * b;
    if(x > 100){
        x = x + c + d;
        console.log(x);

    } else if (x < 100){
        let y = c - d;
        x = x - y;
        console.log(x);
    } else{
        x = (a * b * c) % d;
        alert(x);
    }
}