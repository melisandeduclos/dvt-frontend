function askUsername() {
   return prompt('Quel est votre nom d\'utilisateur ?')
}   

function askMathOperation() {
return prompt('Combien font 2 + 2')
}   

function success() {
console.log('Vous pouvez accéder à l\'application')
}

function error() {
console.log('Restez où vous êtes')
}

function checkUsername() {
return new Promise((resolve, reject) => {
   // if (askUsername == 'admin') {
   //    resolve(success)
   // }
   //Correction
   let username = askUsername();
   if (username === 'admin') {
      resolve()}
   else {
      reject()}
})}

function checkIfIsBot() {
return new Promise((resolve, reject) => {
   // if(askMathOperation == 4){
   //    resolve(success)
   // }
   //Correction
   let result = askMathOperation();

   if (result === '4') {
      resolve()
   } else {
      reject()
   }
})
}

// Résolution des promesses
Promise
   // .all([checkUsername(askUsername), checkIfIsBot(askMathOperation)])
   //Correction
   .all([checkUsername(), checkIfIsBot()])
   .then(() => {
      success()})
   .catch(() => {
      error()
   })


