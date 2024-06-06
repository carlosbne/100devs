/* // Variables

let admin, name;

name = "John";

admin = name;

alert(name); 

let ourPlanetName = 'Earth';
let regularUserName = 'John';

 */


/* function checkAge(age) {
    return age >= 18 ? true : confirm('Did parents allow you?');
} */

/* alert(checkAge(12)); */

/* function calcMin(a, b){
    return (a < b) ? a : b;
}
 */
/* alert(calcMin(1, 1)); */

function calcPw(x, n) {
    let cont = x;
    while(n >= 0){
       cont = cont * x;
       --n;
    }
    return cont;
}

alert(calcPw(2, 2));

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }