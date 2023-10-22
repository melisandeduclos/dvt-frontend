const request = fetch('https://jsonplaceholder.typicode.com/users');

request
   .then((response) => {
      console.log(response);
      const data = response.json(); //Stocke une nouvelle promesse
         data.then((jsonData) => {
            console.log(jsonData);
         });
   })
   .catch((error) => {
      console.log(error);
   })
