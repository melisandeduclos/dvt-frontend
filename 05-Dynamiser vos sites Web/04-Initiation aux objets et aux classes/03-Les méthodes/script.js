// Caractéristiques d'une voiture

// - Couleur
// - Constructeur
// - Nombre de palces assises

//Actions possibles = Méthodes possibles
// - Allumer le moteur
// - Eteindre le moteur
// - Changer de vitesse

class Car {
   constructor(color, manufacturer, seats){
      this.color = color;
      this.manufacturer = manufacturer;
      this.seats = seats;
      //Pour créer une propriété
      this.categoryCar = 'Véhicule à moteur'
      this.engineOn = false;
      this.currentGear = 0;
   }

   igniteEngine(){
      this.engineOn = true;
      this.switchGear(1);
   }

   stopEngine(){
      this.engineOn = false;
   }

   switchGear(gear){
      this.currentGear = gear;
   }
}

//Instancier une nouvelle classe
let c3 = new Car('Blanche', 'Citroën', 5);

c3.igniteEngine();

console.log(c3);
