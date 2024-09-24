//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=PP6aSUyW2r9C9gl9NeW6y3vJZhu2VX7AeB6zO1Di&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
          document.querySelector('iframe').classList.display = 'none';
        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
          document.querySelector('img').classList.display = 'none';
        }

        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

