//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tvShows = ['Tales from the loop', 'The Sopranos', 'Band of Brothers', 'Westworld', 'Foundation'];

tvShows.forEach( show => console.log(show));
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr = array.filter(num => num % 2 == 0);
console.log(newArr);

//other way
const newArr2 = [];

for (const item of array) {
    item % 2 === 0 ? newArr2.push(item) : '';
}
console.log(newArr2);
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function sumSecondLowAndHigh(arr){
    let sorted =  arr.sort((a, b) => a - b); 
    alert(sorted[1] + sorted[ sorted.length - 2]);
}

sumSecondLowAndHigh(array);