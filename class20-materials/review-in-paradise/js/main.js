// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let myFavFood = 'pizza'
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = 'CLOSECAPITON'
alert(str.charAt(1));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divedesTwoMultLast(n1, n2, n3){
    alert((n1 * n2) / n3);
}

divedesTwoMultLast(2, 2, 4);
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(n1){
    console.log(Math.cbrt(n1));
}
cubeRoot(27);
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function showsNumbersWithoutMultpOfFive(num){
    for(let i = 1; i < num; i++){
        i % 5 === 0 ? '' : console.log(i);
    }
}

showsNumbersWithoutMultpOfFive(25);