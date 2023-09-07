// Version ES6
class Personne {
   constructor(nom, prenom, age, sexe, adresse) {
     this.nom = nom
     this.prenom = prenom
     this.age = age
     this.sexe = sexe
     this.adresse = adresse
   }

   identite(){
      console.log((this.prenom).slice(0,1).toUpperCase() + ". " +this.nom);
   }

   gender(){
      switch(this.sexe.toUpperCase()){
         case 'M':
            console.log('Monsieur');
            break;
         case 'F':
            console.log('Madame');
            break;
         default:
            console.log('A définir');
      }
   }

   changeAge(age) {
      this.age = age
   }
}

let personne1 = new Personne('Doe', 'John', 31, 'M', 'Rue du JavaScript')
let personne2 = new Personne('Doe', 'Ann', 28, 'F', 'Avenue des classes et objets')

personne1.changeAge(41);
console.log(personne1);

personne1.gender()
personne2.gender()

personne1.identite()
personne2.identite()