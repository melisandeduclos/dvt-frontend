// const request = fetch('https://jsonplaceholder.typicode.com/users');

// request
//    .then((response) => {
//       console.log(response);
//    })
//    .catch((error) => {
//       console.log(error);
//    })

   const newPost = {
      title : 'Lorem ipsum',
      body: 'Ullamco ex fugiat nisi reprehenderit commodo aliquip consequat laborum reprehenderit cupidatat eiusmod enim non officia.',
      userId: 1
   }

   const request = fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
         "Content-type": "application/json; charset=UTF-8"
      }
   });

request
   .then((response) => {
      console.log(response);
   })
   .catch((error) => {
      console.log(error);
   })