//Rappel

   // let element = document.getElementById('button')
   // // On récupère un seul élément

   // let elements = document.getElementsByName('text')
   // //On récupère un ensemble d'élément

   // let elements = document.getElementsByName('text')[0]
   // //On récupère le 1er ékément de la liste

   // let elements = document.getElementsByTagName('span')
   // //On récupère un ensemble d'élement avec la balise span

   // let elements = document.getElementsByClassName('title')
   // //on récupère un ensemble d'élément avec la classe title

   // let element = document.querySelector('.title')
   // //on récupère le 1er élément avec la classe '.title'
   // //ou

   // let element = document.querySelector('h1')
   // //on récupère le 1er élément avec la balise h1

   // let element = document.querySelector('.class-css').querySelector('#span')
   // //on récupère l'élément avec l'id #span qui est dans le 1er pragraphe vace la classe 'class-css'

   // //ou
   // let element = document.querySelector('class-css').getElementById('span')

const button = document.getElementById('button')

// button.addEventListener('click', () => {
//    alert('click')
// })

//Pour pouvoir supprimer l'évément sur le click, il faut externaliser la fonction (callback) dans addEventListener

const callback = () => {
   alert('click');
}
button.addEventListener('click', callback);
button.removeEventListener('click', callback);

//Il est possible d'ajouter des paramètres à addEventListener

button.addEventListener('click', callback, {
   capture: true,
   once: true, //est executé qu'une seule fois
   passive: true
})