//--- Easy
//create a variable and assign it a number
let num = 1;
//minus 10 from that number
num = num - 10;
//print that number to the console
console.log(num);
//--- Medium
//create a variable that holds a value from the input

/* //add 25 to that number
inputedVal += 25;
//alert that number
alert(inputedVal); */
//--- Hard
//create a variable that holds the h1
let holdH1 = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
holdH1.addEventListener('click', calcSum);

function calcSum() {
    let inputedVal = document.querySelector('#danceDanceRevolution').value;
    console.log(num + Number(inputedVal));
}
