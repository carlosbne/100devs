//https://javascript.info/object

//1) Hello, object
let user = {
    name: 'John',
    surname: 'Smith',
}

user.name = 'Pete';
delete user.name;

//2) Check for emptiness
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}

let schedule = {};

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));

//3) Sum object properties

let salaries = {
    John: 100,
    Ann: 160, 
    Pete: 130,
}

let sum = 0;
for(let key in salaries){
    sum = sum + salaries[key];
}

console.log(sum);

//4) Multiply numeric property values by 2

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof(obj[key]) === 'number'){
            obj[key] = obj[key] * 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

console.log(menu);

multiplyNumeric(menu);

console.log(menu);