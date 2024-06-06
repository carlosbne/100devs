document.getElementById('light-blue').onclick = partyBlue;
document.getElementById('light-gray').onclick = partyGray;
document.getElementById('salmon').onclick = partySalmon;
document.getElementById('seagreen').onclick = partySeaGreen;


function partyBlue() {
    document.querySelector('body').style.backgroundColor = 'rgb(173, 216, 230)';
    document.querySelector('body').style.color = 'white';
}
function partyGray(){
    document.querySelector('body').style.backgroundColor = 'rgb(211, 211, 211)';
    document.querySelector('body').style.color = 'white';
}
function partySalmon() {
    document.querySelector('body').style.backgroundColor = 'rgb(250, 128, 114)';
    document.querySelector('body').style.color = 'white';
}
function partySeaGreen() {
    document.querySelector('body').style.backgroundColor = 'rgb(32, 178, 170)';
    document.querySelector('body').style.color = 'white';
}