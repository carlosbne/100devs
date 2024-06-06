//Create a function that has a loop that prints '21' 21 times to the console and then call that function
let savage = document.querySelector('#savageSays');

function savage21() {
    for(let i = 1; i <= 21; i++){
        savage.innerHTML += " 21";
    }
}
savage21();
//Bonus can you make it print '21' 21 times to the dom?

