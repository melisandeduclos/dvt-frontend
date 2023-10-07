const apiUrl = 'https://geo.api.gouv.fr/communes?codePostal='
const zipcode = document.getElementById("zipcode")
const city = document.getElementById("city")
const boutonTester = document.getElementById("tester")

boutonTester.addEventListener("click", (event)=>{
  
 event.preventDefault() // évite que la page ne recharge
    const code = zipcode.value;
    const url = apiUrl+code;

    console.log(url);
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
       if (xhr.readyState === 4) {
          if(xhr.status === 200){
             console.log(xhr.responseText)
             xhrData = JSON.parse(xhr.responseText);
             console.log(xhrData);
            //  xhrData.forEach(element => {
            //    city.appendChild(element.nom,element.nom)
            //  });
              xhrData.forEach((value,key) => {
                let myOption = document.createElement("option");
                myOption.text = value.nom;
                myOption.value = value.nom;
                city.appendChild(myOption);
              })
          } else {
             console.log('Une erreur est survenue !');
          }
       }
    })
    xhr.addEventListener('error', () => {
       console.log('Une erreur est survenue via XHR !')
    })
    xhr.open('GET', url);
    
    xhr.send();
   
})


