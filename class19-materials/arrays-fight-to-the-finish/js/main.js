//Create an array of movie titles. Loop through the array and each element to the h2.
//const movies = ['the shining', 'Shrek', 'About Time']
let getH2 = document.querySelector('h2');

for(let i = 0; i < movies.length; i++){
    getH2.innerText += movies[i];
}

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
const nums = [10, 20, 30];


nums.forEach((item, i) =>{
    nums[i] += 3;
})

console.log(nums)
/* function troca(x){
    let cont = 0;
    for(let i = 0; i < x.length; i++){
        x[i] = x[i] + 3;
        if(cont === 3){
            x[i] = x[i-1];
            cont = 0;
        }
        cont++;
    }
    return x;
} */

//Find the average of all the numbers from question two
let count = 0;

nums.forEach((item, i) =>{
    count += item;
})
count = count / nums.length;
console.log(count);


