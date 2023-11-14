// https://www.w3schools.com/graphics/canvas_clock_start.asp

const canvas = document.getElementById('hour');
let ctx;
if (canvas.getContext) {
  ctx = canvas.getContext('2d') ;

let wCanvas = canvas.width;
let hCanvas = canvas.height;
let radius = (hCanvas/2)*.90

console.log(wCanvas);
wCanvas  = wCanvas === '0' || wCanvas === null ? 150 : wCanvas;
canvas.setAttribute('height', wCanvas)
canvas.setAttribute('width', wCanvas)

  // Déplacement du point d'origine
   ctx.translate(wCanvas/2, hCanvas/2)

  // cercle de l'horloge
   ctx.beginPath();
   ctx.arc(0, 0, radius, 0, 2 * Math.PI);
   ctx.lineWidth = radius*0.08
   ctx.stroke();

  //Mise en place des heures
   ctx.textAlign = 'center';
   ctx.font = radius*0.15 + "px arial";
   let angle = Math.PI/6
  
   ctx.rotate(angle);
   // ctx.fillText('0', 0, 0);
   ctx.translate(0, -radius*0.80);
   // ctx.fillText('1', 0, 0);
   ctx.rotate(-angle);
   // ctx.fillText('2', 0, 0);
   
   ctx.rotate(angle);
   ctx.fillText('3', 0, 0);
   ctx.translate(0, radius*0.80);
   //ctx.fillText('4', 0, 0);
   ctx.rotate(-angle);
   ctx.fillText('5', 0, 0);
   
   ctx.rotate(angle*2);
   ctx.fillText('6', 0, 0);
   ctx.translate(0, -radius*0.80);
   ctx.fillText('7', 0, 0);
   ctx.rotate(-angle*2);
   ctx.fillText('8', 0, 0);


//   for (let i = 1; i < 12; i++){
//    ctx.rotate(Math.PI/6)
//    ctx.fillText(`${i}`, 0, -40);
//   }
  // Votre code ici
} else {
   // code ancien navigateur
}