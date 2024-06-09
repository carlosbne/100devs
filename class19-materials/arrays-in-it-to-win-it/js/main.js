//Create an array of movies with at least three movies.
const movies = ['the shining', 'Shrek', 'About Time']
//Using the array from above, store the first movie in a variable
let firstMovie = movies[0];
//Get the length of the original array and store it in a new variable
let lenArr = movies.length;
//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
let lastMovie = movies[movies.length - 1];

/* 
let bestColors = ['green','blue','yellow','black']

for(let i = 0; i < bestColors.length;i++){
  console.log( bestColors[i] )
}
 */
//forEach - method for arrays
let bestColors = ['green','blue','yellow','black']

bestColors.forEach((x,i)=> console.log(x))

