document.querySelector('#check').addEventListener('click', check);

function check() {
    const day = document.querySelector('#day').value.toLowerCase();
    const toSee = document.querySelector('#placeToSee');

    if (day === 'tursday' || day === 'thursday') {
        toSee.innerHTML = 'CLASS DAY!'
    } else if (day === 'saturday' || day === 'sunday') {
        toSee.innerHTML = 'WEEKEND!'
    } else {
        toSee.innerHTML = 'BORINNNG!'
    }
}