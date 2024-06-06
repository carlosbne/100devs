document.querySelector('#check').addEventListener('click', check);

function check() {

  const day = document.querySelector('#day').value.toLowerCase();


  //Conditionals go here
  if(day === 'saturday' || day === 'sunday'){
    document.querySelector('#placeToSee').innerHTML = 'Weekend!';
  } else if (day === 'tuesday' || day === 'thursday'){
    document.querySelector('#placeToSee').innerHTML = 'Class!';
  } else{
    document.querySelector('#placeToSee').innerHTML = 'Boring!';
  }

}
