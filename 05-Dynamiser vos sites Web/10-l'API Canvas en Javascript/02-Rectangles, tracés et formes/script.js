const canvas = document.getElementById('drawing');
let ctx;
if (canvas.getContext) {
   ctx = canvas.getContext('2d');
   //Rectangle
   // ctx.fillRect(20,20,100,100);
   // ctx.strokeRect(100,100,100,100);
   // ctx.clearRect(70,70,100,100);

   //Trajet
   ctx.beginPath();
   ctx.arc(75,75,50,0,Math.PI*2);
   //je lève mon stylo et je déplace mon stylo
   ctx.moveTo(110,75);
   //on trace un demi-cercle
   ctx.arc(75,75,35,0,Math.PI);
   ctx.moveTo(65,65);
   ctx.arc(60,65,5,0,Math.PI*2);
   ctx.moveTo(85,65);
   ctx.lineTo(98,65);
   //mode de tracé
   //ctx.fill();
   ctx.stroke();
   ctx.closePath();
}
