//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function mult(arr){
   alert(arr.reduce((x, i) => x * i, 1));
}


// did by leon
function multiNumber(arr){
    let product = 1;
    arr.forEach(num => product *= num);

    alert(product);
}