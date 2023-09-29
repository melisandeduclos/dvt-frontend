let users = []

const sendForm = (email, password) => {
  setTimeout(() => {
    const token = 'ffghthfzszsz654412dsvcds';
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
       if (xhr.readyState === 4) {
          if(xhr.status === 200){
             console.log(xhr.responseText);
             xhrData = JSON.parse(xhr.responseText).data;
             xhrData.forEach(user => {
               users.push(user);
             });
             console.log(xhrData);
             console.log(users);
             console.log(xhr.getAllResponseHeaders());
          } else {
             console.log('Une erreur est survenue !');
          }
       }
    })
    xhr.addEventListener('error', () => {
       console.log('Une erreur est survenue via XHR !')
    })
    
    xhr.open('GET','https://reqres.in/api/users?page=1');
    xhr.setRequestHeader('Authorization', token);
    xhr.send();
  }, 2000)
}


