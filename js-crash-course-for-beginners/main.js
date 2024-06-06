/* console.log('Hello World');
console.error('this is an error');
console.warn('this is a warning'); */

//------------Variables var, let, const

/* const age1 = 30;
let age = 32;
age = 35;

console.log(age, age1); */


//---------Data Types = String, Numbers, Boolean, null, undefined, Symbol

/* const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; //also undefined

console.log(typeof z); */

//---------Contatenation 
/* const name = 'John';
const age = 30;
console.log('My name is '+ name +' and I am ' + age);

//-----------Template String
const hello = (`My name is ${name} and I am ${age}`);

console.log(hello); */

//--------
/* const s = 'technology, computers, it, code';
console.log(s.split(', ')); */

//-----------ARRAYS - variables that hold multiple values

/* const numbers = new Array(1,2,3,4,5); //construct

const fruits = ['apples', 'oranges' , 'pears']; //other way to setup an array

fruits[3] = 'grapes'; //add a value in a index

//-------- Metodos de arrays

fruits.push('mangos'); //add a value into the end

fruits.unshift('stawberries'); //add a value at the beginning 

fruits.pop();// remove the last value

console.log(Array.isArray(fruits)); //see if something is an array

console.log(fruits.indexOf('oranges')); //get the index of a value

console.log(fruits);
 */

//----------------OBJECT

/* const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    addres: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);

const { firstName, lastName, addres: {city} } = person;

console.log(city);

person.email = 'john@gmail.com';
console.log(person.email); */

//---------------- ARRAYS OF OBJECTS

/* const toDos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
] */

/* console.log(toDos[1].text); */

/* 
--------- JSON - DATA TO 
const toDoJSON = JSON.stringify(toDos);

console.log(toDoJSON); */

//----------------- FOR
/* for(let i = 0; i <= 10; i++){
    console.log(`For Loop Number: ${i}`);
}

//-------------- WHILE
let i = 0;
while(i < 10){
    console.log(`For While Number: ${i}`);
    i++;
} */

//----------- FOR LOOP IN ARRAY
/* for(let i = 0; i < toDos.length; i++){
    console.log(toDos[i].text);
} */

// ------------ METHOD FOR OF LOOP
/* for(let todo of toDos) {
    console.log(todo.text);
} */

//--------------HIGH ORDER ARRAY METHODS -> 
/* forEach: loops through them, 
map: allows to create a new array from ano array
filter: allows to create a new array based of one condition */

/* toDos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = toDos.map(function(todo){
    return todo.text;
});

console.log(todoText);
 */
/* const todoCompleted = toDos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted); */

// ------------- CONDITIONAL

/* const x = 10;
const y = 4;

if(x > 5 || y < 10){
    console.log('x is 10');
} else if (x > 10){
    console.log('x is grater than 10');
} else{
    console.log('x is less 10');
} */

//ETERNARIE OPERATOR, OPERADOR TERNARIOS

/* const x = 12;

const color = x > 10 ? 'red' : 'blue'; */

//SWITCH OPERATOR

/* const color = 'green'; */

/* switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');///
        break;
    default:
        console.log('color is NOT red or blue');
        break;
} */

//Functions - Funções
/* function addNums(num1 = 1, num2 = 1){
    return num1 + num2;
}

console.log(addNums(5, 5)); */

//ARROW FUNCTION
/* const addNums = (num1 = 1, num2 = 1) =>{
    return num1 + num2;
}
console.log(addNums(8, 5)); */

/* toDos.forEach((toDos) => console.log(toDos)); */