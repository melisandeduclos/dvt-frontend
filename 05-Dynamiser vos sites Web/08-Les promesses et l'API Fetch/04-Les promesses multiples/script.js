startChrono();

const myFirstPromise = new Promise((resolve) => {
   setTimeout(() => {
      resolve();
   }, 1000);
});

const mySecondPromise = new Promise((resolve) => {
   setTimeout(() => {
      resolve();
   }, 3000);
});

// Promise
//    .all([myFirstPromise, mySecondPromise])
//    .then(() => {
//       console.log('Toutes les promesses sont terminées');
//       stopChrono();
//    });

Promise
   .race([myFirstPromise, mySecondPromise])
   .then(() => {
      console.log('Au moins une de mes promesses s\'est terminée');
      stopChrono();
   });