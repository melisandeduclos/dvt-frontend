
const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
   if (xhr.readyState === 4) {
      if(xhr.status === 200){
         console.log(xhr.responseText);
         console.log(xhr.getAllResponseHeaders());
         console.log(xhr.getResponseHeader('content-type'));
      } else {
         console.log('Une erreur est survenue !');
      }
   }
})
xhr.addEventListener('error', () => {
   console.log('Une erreur est survenue via XHR !')
})
xhr.open('GET','https://reqres.in/api/users/1');
//Déclaration ds Header entre open et send uniquement
xhr.setRequestHeader('Accept-Language', 'fr-FR');
xhr.setRequestHeader('Content-Type', 'xxx');
xhr.setRequestHeader('Accept-Charset', 'xxx');
xhr.send();