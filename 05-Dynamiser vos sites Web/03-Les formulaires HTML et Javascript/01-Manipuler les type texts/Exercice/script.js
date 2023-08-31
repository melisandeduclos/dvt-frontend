let inputElements = Array.from(document.getElementsByClassName('inputPinkOnFocus'));
inputElements.forEach((inputElement) => {
   inputElement.addEventListener('focus', function(event) {
      // console.log(`l'utilisateur est entré dans l'input: ${event.target.name}`)
      inputElement.style.backgroundColor = "#ffcef9"
      inputElement.style.color = "#0063fa"
   });
   inputElement.addEventListener('blur', function(event) {
      // console.log(`l'utilisateur est sorti du champ: ${event.target.name}`)
      inputElement.style.backgroundColor = "#ffffff"
      inputElement.style.color = "#000000"
   });
});