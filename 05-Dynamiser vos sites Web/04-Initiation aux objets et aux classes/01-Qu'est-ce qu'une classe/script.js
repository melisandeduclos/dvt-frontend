// Caractéristiques d'une voiture

// - Couleur
// - Constructeur
// - Nombre de palces assises

class Car {
   constructor(color, manufacturer, seats){
      this.color = color;
      this.manufacturer = manufacturer;
      this.seats = seats;
   }
}

class Plane {
   constructor(passengers, model, manufacturer, wingspan){
      this.passengers = passengers;
      this.model = model;
      this.manufacturer = manufacturer;
      this.wingspan = wingspan;
   }
}

//Instancier une nouvelle classe
let c3 = new Car('Blanche', 'Citroën', 5);

console.log(c3);
console.log(c3 instanceof Car);
console.log(c3 instanceof Plane);

//Impossible d'ajouter un autre paramètre dans c3
let c3 = new Car('Blanche', 'Citroën', 5, 'Diesel');
console.log(c3); //'Blanche', 'Citroen', 5 sans le 'Diesel'

//En version ES5
function Car ( color, manufacturer, seats){
   this.color = color;
   this.manufacturer = manufacturer;
   this.seats = seats;
}

