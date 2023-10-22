const someAsyncStuff = new Promise ((resolve, reject) => {
   setTimeout(() => {
      const random = Math.floor(Math.random() * 100); 
      //Retourne un nombre entre 1 et 100
      if (random > 50) {
         console.log(random);
         resolve({status: 'sucess', random});
      }

      reject({status: 'error', random});
   } ,1000);
});

console.log(someAsyncStuff);