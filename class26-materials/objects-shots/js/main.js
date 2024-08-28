//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

const request = document.querySelector('button')
request.addEventListener("click", (_) =>{
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data.drinks[0])
        document.querySelector('h2').innerHTML = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('.Instructions').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
})

