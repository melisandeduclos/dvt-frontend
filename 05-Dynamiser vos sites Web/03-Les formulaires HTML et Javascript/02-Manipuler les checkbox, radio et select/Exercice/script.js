let checkbox = document.getElementById('consentement')
let radio = document.getElementsByName('btn-radio')

checkbox.addEventListener('change', (event) => {
  if (event.target.checked) {
    console.log('Vous acceptez de recevoir la newsletter')
    //Pour chaque radio bouton -> test de la .value
    for(item of radio) {
      //si .value = 'oui' -> on coche si la checkbox est cochée
      if (item.value == 'oui') {
        item.checked = true
      }
    }
  } else {
   console.log('Vous n\'acceptez pas de recevoir la newsletter')
    for(item of radio) {
      //si .value = 'non' -> on décoche si la checkbox est décochée
      if (item.value == 'non') {
         item.checked = true
       }
    }
  }
})

let select = document.getElementById('pays')
let span = document.getElementById('message')

select[0].value
span.innerHTML = select[0].text

select.addEventListener('change', (event) => {
   span.innerHTML = `${event.target[event.target.selectedIndex].text}`
})