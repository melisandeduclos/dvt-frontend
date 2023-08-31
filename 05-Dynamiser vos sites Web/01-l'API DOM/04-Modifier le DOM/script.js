let div = document.getElementById('contenu');

let titleh3 = document.createElement('h3')
//Définit le texte de titleh3 soit : 
//Méthode 1
titleh3.innerText = 'Titre h3 😵'
//ou Méthode 2
titleh3.textContent = 'Titre h3 🤩'
//Ou Ajoute un autre titre avec le texte Titre h3 😎
titleh3.append('Titre h3 😎')

//Positionne le titre avant les 2 paragraphes
div.prepend(titleh3)
//ou
document.body.insertBefore(titleh3,div);

let liS = document.querySelectorAll('ul li');
for(let i=liS.length-1; i >= 0 ; i--){
   //console.log(i)
   //console.log(liS.length)
   let element = liS[i];
   //console.log(element);
   element.remove();
}

//Sélectionner tous les paragraphes à l'intérieur de la div 'contenu'
let pS = div.querySelectorAll('p');
console.log(pS);
//Conversion de la liSte en Tableau
let pSArray = Array.from(pS);
console.log(pSArray);
//Inversion des paragraphes dans le tableau
pSArray.reverse();
console.log(pSArray);

//Réinsertion des paragraphes inversés dans la div 'contenu'
pSArray.forEach(element => {div.appendChild(element);
});