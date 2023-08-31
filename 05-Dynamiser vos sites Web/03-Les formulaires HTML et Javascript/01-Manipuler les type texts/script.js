//Exemple 1
let username = document.getElementById('username');
let description = document.getElementById('description');

//Affichage des éléments DOM
console.log(username);
console.log(description);

//Afficher les propriétés de DOM des éléments HTML
console.dir(username);
console.dir(description);

console.log(username.value);

//Lire une valeur
username.addEventListener('input', function () {
   console.log(username.value);
})

//Attrbibution d'une valeur
description.value = 'Bonjour, ...';

//Exemple 2
let inputElements = document.querySelectorAll('input, textarea');

inputElements.forEach((inputElement) => {
   inputElement.addEventListener('focus', function(event) {
      console.log(`l'utilisateur est entré dans l'input: ${event.target.name}`)
   });
   inputElement.addEventListener('blur', function(event) {
      console.log(`l'utilisateur est sorti du champ: ${event.target.name}`)
   });

});

username.focus();

username.addEventListener('input', function(event) {
   if (event.target.value.length >= 4){
      username.blur();
   }
})