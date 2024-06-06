//Create a function that grabs the number of snacks from the input and tells you to stop that many times

const fHelp = document.querySelector('#help').addEventListener('click', stopsPls);
let stopping = document.querySelector('#stops');

function stopsPls() {
    const manySnacks = Number(document.querySelector('input').value);
    stopping.innerText = "";
    for(let i = 0; i < manySnacks; i++){
        stopping.innerText += " STOP!";
    }
}