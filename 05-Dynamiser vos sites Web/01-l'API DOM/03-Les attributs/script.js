const lastname = document.getElementById('lastname');

for (let attribute of lastname.attributes){
   console.log(attribute)
   console.log(attribute.textContent)
   console.log(attribute.name)
}

const attributeName = lastname.getAttribute('name');
console.log(attributeName);

for (let attribute of lastname.getAttributeNames()){
   console.log(attribute);
}

console.log(lastname.getAttributeNode('id'))
console.log(lastname.getAttributeNode('id').value)
//***************************** */
const elements = document.getElementsByTagName('li');

for (let element of elements) {
   if (element.hasAttribute('class')){
      console.log(element.innerText)
   }
}

for (let element of elements) {
   if (element.hasAttributes()){
      console.log(element.innerText)
   }
}

//********************** */
//MODIFIER ET SUPPRIMER

const checkbox = document.getElementById('box')
checkbox.setAttribute('checked', 'checked')

const checkbox2 = document.getElementById('box2')
checkbox2.removeAttribute('checked', 'checked')