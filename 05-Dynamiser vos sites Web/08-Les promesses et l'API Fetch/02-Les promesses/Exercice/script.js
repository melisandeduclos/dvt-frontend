let h1 = document.getElementsByName('h1');
let p = document.createElement('p');


function askAge() {
   return prompt('Quel âge avez-vous ?')
 }   
 
 function success() {
   console.log('Vous êtes majeur, vous pouvez continuer votre navigation')
 }
 
 function error() {
   console.log('Vous êtes mineur, vous allez être redirigé vers une autre page')
 }
 
 function redirectUser() {
  return new Promise((resolve,reject) => {
   let age = askAge();

   if (age >= 18 ){
      p.appendChild(document.createTextNode('Vous avez '+ age +' ans. Vous êtes majeur, vous pouvez continuer votre navigation'))
      document.body.appendChild(p)
      resolve({status: 'success', random});
   }
   else {
      p.appendChild(document.createTextNode('Vous avez '+ age +' ans. Vous êtes mineur, vous allez être redirigé vers une autre page'))
      document.body.appendChild(p)
      reject({status: 'error', age});
   }
  })
 }
 
 redirectUser().then(success, error)