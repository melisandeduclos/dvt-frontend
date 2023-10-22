function manageResponse(response) {
if(response.ok){
   return response.json();
} else {
   console.log(response.status)
}
}

function displayData(data) {
   console.log(data)
}

const request =  fetch(' https://reqres.in/api/users/2');

request
   .then((response) => {
      //manageResponse(response);
      displayData(manageResponse(response));
   })
   .catch((error) => {
      displayData((error));
   })

