// Version ES6
class Personne {
   constructor(nom, prenom, age, sexe, adresse){
      this.nom = nom;
      this.prenom = prenom;
      this.age = age;
      this.sexe = sexe;
      this.adresse = adresse;
   }
}

let personne1 = new Personne('Yaourt', 'Jean', 28, 'M', '200 Road, New York');
console.log(personne1);


personne1.age = 41;
personne1.adresse = 'Rue des classes en JS';

console.log(personne1);