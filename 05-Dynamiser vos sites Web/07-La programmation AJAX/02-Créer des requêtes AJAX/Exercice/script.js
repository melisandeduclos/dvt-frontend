const tbody = document.getElementById('tbody'); // élément tbody du tableau
const students = []; // liste des étudiants

// fonction de création de ligne
const createLine = (tbody, student) => {
  const newRow   = tbody.insertRow();
  let counter = 0
  for (const key in student) {
    const newCell  = newRow.insertCell(counter);
    // La Méthode createTextNode() permet de créer un noeud de texte
    const newText  = document.createTextNode(student[key]);
    newCell.appendChild(newText);
    counter++
  }
}


function sendForm() {
   const firstName = document.querySelector('#firstName');
   const lastName = document.querySelector('#lastName');
   const grade = document.querySelector('#grade');
   const numberClass = document.querySelector('#numberClass');

   // let form = new FormData();
   // form = student
   let student = {
      id: '', 
      firstName: firstName.value,
      lastName: lastName.value,
      grade: grade.value,
      numberClass: numberClass.value
   };

   const xhr = new XMLHttpRequest();

   xhr.open('POST','https://reqres.in/api/users');

   xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4){
         if (xhr.status === 201){
            console.log(xhr.responseText)
            xhrData = JSON.parse(xhr.responseText);
            console.log(xhrData);
            student.id = xhrData.id;
            students.push(student);
            createLine(tbody, student);
         } else {
            console.log('Erreur de création')
         }
      }
   })
   xhr.send(student);
};






