//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too



//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

let holderH1 = document.querySelector('h1').addEventListener('click', checkAge);

let place = document.querySelector('p');

function checkAge() {
    let age = document.querySelector('#danceDanceRevolution').value;

    if(age < 16){
        place.innerHTML = 'You can not drive';
    } else if(age < 18){
        place.innerHTML = 'You can\'t hate from outside the club, because youcan\'t even get in';
    } else if(age < 21){
        place.innerHTML = 'You can not drink';
    } else if(age < 25){
        place.innerHTML = 'You can not rent cars affordably';
    } else if(age < 30){
        place.innerHTML = 'You can not rent fancy cars affordably';
    } else if(age > 30){
        place.innerHTML = 'There is nothing left to look forward too';
    }
}