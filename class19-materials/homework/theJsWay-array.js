// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter07.md

 // How to interates with an array
const movies = ['the shining', 'Shrek', 'About Time'];

// Normal for loop 
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}
// method forEach() It takes as a parameter a function that will be applied to each array element.
movies.forEach(movie => {
  console.log(movie);
});
// you can use the for-of loop, a special kind of loop dealing with iterable objects like arrays.
for (const movie of movies) {
    console.log(movie);
}
/* You add a new item to an array with the push() method. 
The new element to be added is passed as a parameter to 
the method. It is inserted at the end of the array. */

movies.push("Ghostbusters");
console.log(movies[3]); // "Ghostbusters"



//---------Coding time!-------------
// Musketeers
const musketeers = ['Athos', 'Porthos', 'Aramis'];

for(let i = 0; i < musketeers.length; i++){
  console.log(musketeers[i]);
}

musketeers.push('D\'Artagan');

musketeers.forEach((item, i) => {
  console.log(item);
})

musketeers.splice(2, 1);

for (const musketeer of musketeers) {
    console.log(musketeer);
} 


