//--- Easy
//create a variable and assign it a number
let num1 = 25;
//minus 10 from that number
num1 = num1 - 10;
//print that number to the console
console.log(num1);
//--- Medium
//create a variable that holds a value from the input
let numFromInput = Number(document.querySelector('input').value);
//add 25 to that number
numFromInput += 25
//alert that number
alert(numFromInput);
//--- Hard
//create a variable that holds the h1
const getH1 = document.querySelector('h1');
//add an event listener to that element that console logs the sum of the two previous variables
getH1.addEventListener('click', sum);

function sum(){
    console.log(numFromInput + num1);
}