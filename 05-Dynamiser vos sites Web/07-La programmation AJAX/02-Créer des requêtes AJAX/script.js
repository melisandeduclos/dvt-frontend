const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://reqres.in/api/users?page=1');

//pour pinger si le service répond
xhr.open('HEAD','https://reqres.in/api/users');
//récupère le premier user
xhr.open('GET','https://reqres.in/api/users/1'); 
//supprime le premier user
xhr.open('DELETE','https://reqres.in/api/users/1');


xhr.addEventListener('readystatechange', () => {
   if (xhr.readyState === 4 && xhr.status === 200){
      console.log(xhr.responseText);
   }
})
xhr.send();

//pour créer des données POST
xhr.open('POST','https://reqres.in/api/users');
xhr.send(encodeURIComponent('first_name=John&last_name=Doe'));

//pour mettre à jour les données PUT
xhr.open('PUT','https://reqres.in/api/users/101');
xhr.send(encodeURIComponent('first_name=Robert'));

//ou

//pour créer des données POST
xhr.open('POST','https://reqres.in/api/users');
let form = new FormData();
form.append('first_name', 'Robert');
form.append('last_name', 'Dupond');
xhr.send(form);

//Pour gérer les erreurs
xhr.open('GET','https://reqres.in/api/users'); 

xhr.addEventListener('readystatechange', () => {
   if (xhr.readyState === 4) {
      if(xhr.status === 200){
      console.log(xhr.responseText);
      } else {
         console.log('Une erreur est survenue !');
      }
   }
})
xhr.addEventListener('error', () => {
   console.log('Une erreur est survenue via XHR !')
})
xhr.send();