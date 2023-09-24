const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users?page=1');

xhr.addEventListener('readystatechange', () => {
   // console.log('Current status: '+xhr.readyState);
   // console.log('Status: '+xhr.status); 
   if (xhr.readyState === 4 && xhr.status === 200){
      console.log(xhr.responseText);
      const total = JSON.parse(xhr.responseText).total;
      const data = JSON.parse(xhr.responseText).data;
      data.forEach(user => {
         user.name = `${user.first_name} ${user.last_name}`
      })
      console.log(data);
   }
})
xhr.send();

