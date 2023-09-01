let form = document.querySelector('form');

form.addEventListener('submit', function (event){
   event.preventDefault();
   console.log('Formulaire envoyé!');
})

// //Dans ce cas, la page est rechargée au bout de 2s
// setTimeout(()=>{
//    form.submit();
// }, 2000);
// //2000 pour 2000ms


//Pour envoyer le formulaire manuellement, on simule un click sur le bouton, ce qui déclenche l'envoi du formualire par la méthde sbmit => le formulaire est bien evoyé et la page n'est pas rechargée, cet événement est déclenché automatique au bout de 2s
let submitButton = document.querySelector('button');

setTimeout(()=>{
   submitButton.click();
}, 2000);
