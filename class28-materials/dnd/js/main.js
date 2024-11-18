//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  const ul = document.querySelector('ul');
  const choice = document.querySelector('input').value.replaceAll(' ', '-')
  const url = `https://www.dnd5eapi.co/api/spells/${choice}/`  
  const li = document.querySelector('li');
  if(li){
    li.remove();
}

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       console.log(data)
       const subs = data.subclasses;
        if(subs != 0){
            subs.forEach(obj => {
                console.log(obj.name)
                //create a li
                const li = document.createElement('li')
                //add text to the li
                li.textContent = obj.name
                //append the li to dom
                document.querySelector('ul').appendChild(li)
                //note finished
                
            });
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

