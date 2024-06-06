// Arrays -> Variables that hold multiple values

const numbers = new Array('1,2,3,4,5'); // with constructor

const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes'; // add value to the array

fruits.push('mangos'); // add to the end

fruits.unshift('strawberries'); //add to the beginning

fruits.pop(); //remove the last one

console.log(Array.isArray(fruits)); //check if is an Array

console.log(fruits.indexOf('oranges')); //check index

console.log(fruits);

