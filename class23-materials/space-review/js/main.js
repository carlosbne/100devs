//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1, 2, 3, 4, 5, 6];

let sumx = arr.reduce((acc, c) => acc + c, 0);

alert(sumx);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squared(array){
    let newArr = array.map((element) => Math.pow(element, 2));
    return newArr;
}   

//-----leon way-------
let newArr = nums => nums.map(num => num ** 2);

console.log(newArr(arr));

//Create a function that takes string
//Print the reverse of that string to the console

function reversed(str){
    return str.split('').reverse().join('');
}

//-----recursion---------
/* function reversed(str){
    if(str === '')
        return '';
    else{
        return reversed(str.substring(1)) + str.charAt(0);
    }
} */

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function isPalindrome(str){
    let reversedStri = reversed(str);
    return reversedStri === str ? alert(`Is a palindrome`) : alert(`is not`);
}

console.log(isPalindrome('tenet'));