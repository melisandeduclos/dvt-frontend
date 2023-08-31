//Affichez l'ensemble des attributs du champ texte
const text = document.getElementById('email');
for (let attribute of text.attributes){
   console.log(attribute);
}

//Réponse
//type="text"                 script.js:4
//name="email"                script.js:4
//id="email"                  script.js:4
//class="form-email"          script.js:4


//Affichez la valeur de l'attribut id du champ texte
console.log(text.getAttributeNode('id').value)

//Réponse
//email                       script.js:15

//Vérifiez que la case à cocher possède 
//l'attribut checked. 
//Décochez la case si elle est cochée.

const chkbox = document.getElementById('connexion');

if (chkbox.hasAttribute("checked")){
   console.log(chkbox.hasAttribute("checked"));
   chkbox.removeAttribute('checked', 'checked');
} else {
   console.log(chkbox.hasAttribute("checked"));
   //chkbox.setAttribute('checked', 'checked');
}

//Affichez le ou les éléments n'ayant aucun attribut.
let elements = document.getElementsByTagName('form')[0];

//console.log(elements);

for(let element of elements){
   if (element.attributes.length === 0){
      //console.log(element);
      console.log("<"+element.tagName + ">: " + element.innerText);
      //console.log(element.tagName + ": " + element.name);
   }
}

//Réponse
//<BUTTON>: Valider              script.js:42




