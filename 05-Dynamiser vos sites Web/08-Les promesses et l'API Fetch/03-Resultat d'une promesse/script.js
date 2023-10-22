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

// console.log(someAsyncStuff);
//en ES6
// someAsyncStuff
//    //dans le cas d'un success
//    .then((response) => {
//       console.log(response);
//    })
//    //dans le cas du reject
//    .catch((error) => {
//       console.log(error);
//    })
//    .finally(() => {
//       console.log('finally')
//    });

   //en ES7

const myFunction= async() => {
   try {
      const myPromise = await someAsyncStuff;
      console.log(myPromise);
   } catch(error) {
      console.error(error);
   }
};

myFunction();