//Exemple 1
const button1 = document.getElementById('button1')

function evenement1(event){
   console.log(event);
   console.log(event.target);
}

 button1.addEventListener('click', evenement1);


//Exemple 2
const button2 = document.getElementById('button2')

function evenement2(event){
    event.preventDefault(); //annule le comportement standard
    //du btn type submit, pas de rechargement de la page
    event.stopPropagation(); //lorsuqe l'on clique sur le btn type submit,
    //l'événement remonte sur les éléments parent. Ici dans l'exemple
    //l'événement va remonter sur Body, puis sur html
    //.stopPropagation va empêcher cette action
}

//Exemple 3
const button3 = document.getElementById('button3');
const body = document.getElementsByTagName('body')[0];

function evenement3(event){
   event.stopPropagation();
   console.log(event.target);
}

button3.addEventListener('click', evenement3);
body.addEventListener('click', evenement3);
