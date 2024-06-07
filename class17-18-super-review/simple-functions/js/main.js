//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoNumsAndAlert(num1, num2){
    alert(num1 - num2);
}
subTwoNumsAndAlert(10, 5);
//create a function that divides three numbers and console logs the quotient
function divesThreeNums(num1, num2, num3) {
    console.log(num1 / num2 / num3);
}
divesThreeNums(12, 4, 3);
//create a function that multiplys three numbers and returns the product
function multThreeNums(num1, num2, num3){
    return num1*num2*num3;
}
console.log(multThreeNums(1,2,3));
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function addTwoAndDividesThird(num1, num2, num3){
    res = num1 + num2;
    return res % num3;
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function exMachine(num1, num2, num3, num4){
    let x = num1 * num2;
    if(x > 100){
        x = x + num3 + num4;
        console.log(x);
    }else if(x < 100){
        x = x - (num3 + num4);
        console.log(x);
    }else{
        x = num1 * num2 * num3;
        alert(x % 4);
    }
}