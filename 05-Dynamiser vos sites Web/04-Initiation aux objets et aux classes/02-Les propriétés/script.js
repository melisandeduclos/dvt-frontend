// Caractéristiques d'une voiture

// - Couleur
// - Constructeur
// - Nombre de palces assises

class Car {
   constructor(color, manufacturer, seats){
      this.color = color;
      this.manufacturer = manufacturer;
      this.seats = seats;
      //Pour créer une propriété
      this.categoryCar = 'Véhicule à moteur'
   }
}

//Instancier une nouvelle classe
let c3 = new Car('Blanche', 'Citroën', 5);

console.log(c3.manufacturer);
console.log(c3);


