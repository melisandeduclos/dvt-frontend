let emailUser = document.getElementById('email');
let password = document.getElementById('password');
let error = document.querySelector('div');
let form = document.querySelector('form');


function validateEmail(email){
   var emailReg = new RegExp(/^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/);
   return emailReg.test(email);
}

emailUser.addEventListener('blur', event =>{
   var mytxtValue = event.target.value;
   if(validateEmail(mytxtValue)){
      error.innerText = "email valide";
      error.style.color = "blue" 
   } else {
      error.innerText = "email invalide";
      error.style.color = "red" 
   }
});

password.addEventListener('blur', event =>{
   var mytxtValue = event.target.value;
   if (mytxtValue.length >=8){
      error.innerText = "mot de passe ok";
      error.style.color = "blue";
   } else {
      error.innerText = "mot de passe nok";
      error.style.color = "red";
   }
});

form.addEventListener('submit',(event) => {
   console.log(emailUser.value);
   console.log(validateEmail(emailUser.value));
   console.log(password.value.length);
   if (validateEmail(emailUser.value) != true && 
   password.value.length <= 8){
      event.preventDefault();
      console.log("le formulaire contient des erreurs")
   }
});

