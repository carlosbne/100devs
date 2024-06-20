//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const arr = ["1", 2, 3, 4, 5];

const sumOfArr = arr.reduce((acc, c) => acc + +c, 0);
alert(sumOfArr); 
// acc -> accumulator ; c -> current value ; 0 -> value init 
// the plus sin on c convert a string to number


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squareArr(array){
    let newArr = [];
    array.forEach(x => newArr.push(x * x));
    return newArr;
}

console.log(squareArr(arr));
//Create a function that takes string
//Print the reverse of that string to the console
function reverse(str){
    
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not
