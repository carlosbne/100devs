// primitive data types -> directly assign to memory
// Strings, Number, Boolean, null, undefined, (Symbol)

 const name = 'John';
const age = 30;
const rating = 4.5;
const isColl = true;
const x = null;
const y = undefined;
let z; // equals undefined

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isColl);
console.log(typeof x, y, z); 


//Strings 
const name1 = 'Johnny';
const age2 = 51;

//Concatenation
console.log('My name is '+ name1 + ' and I am ' + age2);
//template String
const hello = `My name is ${name1} and I am ${age2}`;
console.log(hello);