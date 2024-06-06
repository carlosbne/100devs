//Write your pseduo code first! 

//need the value in celsius

//convert the value to fairinheight

//show it


document.querySelector('#check').addEventListener('click', convert)

function convert() {

  const celsiusValue = document.querySelector('#celsius').value

  const result = (celsiusValue * 1.8) + 32;

  document.querySelector('#placeToSee').innerHTML = result;

}
