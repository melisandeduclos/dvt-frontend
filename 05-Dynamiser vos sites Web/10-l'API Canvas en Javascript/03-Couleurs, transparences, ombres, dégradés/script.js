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
   ctx.fillStyle = 'yellow'
   ctx.fill();
   ctx.moveTo(65,65);
   ctx.arc(60,65,5,0,Math.PI*2);
   ctx.moveTo(85,65);
   ctx.lineTo(98,65);
   //mode de tracé
   //ctx.fill();
   ctx.lineWidth = 4;
   ctx.strokeStyle = 'pink'
   ctx.stroke();
   ctx.closePath();

   //Dégradé
   const linearGradient = ctx.createLinearGradient(
      20,170,120,270
   );
   linearGradient.addColorStop(0, '#ff4757');
   linearGradient.addColorStop(1,'#5352ed');
   

   ctx.fillStyle = linearGradient;
   ctx.fillRect(20,170,100,100);

   //Ombre
   ctx.shadowColor = 'gray';
   ctx.shadowBlur = '15'; //Diffusion de l'ombre 
   ctx.shadowOffsetX = 4;
   ctx.shadowOffsetY = 4;

   ctx.fillRect(140,170,100,100);
}
