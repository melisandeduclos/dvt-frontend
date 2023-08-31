//****CHECK BOX */
var checkbox = document.getElementById('check')

checkbox.addEventListener('change', (event) => {
  alert(event.target.checked) // True si coché, sinon false 
})

checkbox.checked = true;

//****BOUTON RADIO */
var btnradios = document.getElementsByName('gender')
//ou
let btnradios = document.querySelectorAll('input[type = "radio"]')

//il faut affecter une event addEventListener
//à chaque bouton radio à l'aide d'une boucle
for (var count=0; count < btnradios.length; count++) {
   btnradios[count].addEventListener('change', (event) => {
      alert(`Choix : ${event.target.value}`);
   });
}
//ou
btnradios.forEach((btnradio) => {
   btnradio.addEventListener('change', function (event){
      console.log(`${event.target.value}: ${event.target.checked}`)
   })
} )

//valeur par défaut au chargement
btnradios[0].checked = true;

//****LISTE DEROULANTE */
var language = document.getElementById('language')

language.addEventListener('change', (event) => {
   //console.log(event.target[event.target.selectedIndex].text)
   console.log(`${event.target.name}: ${event.target.value} -> 
   ${event.target[event.target.selectedIndex].text}`)
   alert(event.target.value)
})

//valeur par défaut au chargement
language.value = "english";