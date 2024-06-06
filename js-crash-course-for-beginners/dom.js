// Single selectors element
const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('.container')); //preferido


// Multiple selectors element
console.log(document.querySelectorAll('.item')); //preferido
console.log(document.getElementsByClassName('item'));

//Loop por items
const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

