//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function justEvens(arr){
    let newArr = [];
    arr.forEach((item) => item % 2 === 0 ? newArr.push(item) : '' );

    return newArr;
}

function justPares(arr){
    let newArr = arr.map((item) => item % 2 === 0);

    console.log(newArr);
}