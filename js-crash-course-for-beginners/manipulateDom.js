const ul = document.querySelector('.items');

/* ul.remove(); */
/* ul.lastElementChild.remove(); */
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerHTML = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';


btn.addEventListener('click', (e) =>{
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.style.color = 'blue';
    ul.lastElementChild.innerHTML = '<h1>TOMA ESSA</h1>'
})