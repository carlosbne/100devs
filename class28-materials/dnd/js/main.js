//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const ul = document.querySelector('ul');
  const choice = document.querySelector('input').value.replace(' ', '-')
  const url = `https://www.dnd5eapi.co/api/spells/${choice}/`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       console.log(data)
        if(data.subclasses != 0){
            var li = document.createElement('li').appendChild(data.subclasses)
            ul.appendChild(li)
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

