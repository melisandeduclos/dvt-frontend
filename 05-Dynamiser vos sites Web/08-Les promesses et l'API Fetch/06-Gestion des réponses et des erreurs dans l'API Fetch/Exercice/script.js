let urls = [
   'https://reqres.in/api/users/2',
   'https://reqres.in/api/users/3',
   'https://reqres.in/api/users/6'
   ]
   
   function fetchUrl(url) {
      const request = fetch(url);
      request
         .then((response) => {
            if(response.ok){
               const data = response.json();
               data.then((jsonData) => {
                  console.log(jsonData.data)
                  return jsonData.data
               })

            } else {
               console.error("Une erreur est survenue, code erreur: " +response.status)
            }
         })
         .catch((error) => console.error(error));
   }
   
   urls.forEach(url => fetchUrl(url))