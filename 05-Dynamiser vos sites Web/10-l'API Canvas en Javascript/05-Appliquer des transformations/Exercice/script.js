// https://www.w3schools.com/graphics/canvas_clock_start.asp

const canvas = document.getElementById('hour');
let ctx;
if (canvas.getContext) {
  ctx = canvas.getContext('2d') ;

let wCanvas = canvas.width;
let hCanvas = canvas.height;
let radius = (hCanvas/2)*0.90

console.log(wCanvas);
wCanvas  = wCanvas === '0' || wCanvas === null ? 150 : wCanvas;
canvas.setAttribute('height', wCanvas)
canvas.setAttribute('width', wCanvas)

  // Déplacement du point d'origine
   ctx.translate(wCanvas/2, hCanvas/2)

  // cercle de l'horloge
   ctx.beginPath();
   ctx.arc(0, 0, radius, 0, 2 * Math.PI);
   ctx.lineWidth = radius*0.1
      // create radial gradient
      const grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
      grad.addColorStop(0, 'white');
      grad.addColorStop(0.5, '#8ed6ff');
      grad.addColorStop(1, '#004cb3');
      ctx.strokeStyle = grad;
   ctx.stroke();

  //Mise en place des heures
   ctx.textAlign = 'center';
   ctx.textBaseline = "middle";
   ctx.font = radius*0.15 + "px arial";
   for (let num = 1; num < 13; num++){
      let angle = num * Math.PI/6
      ctx.rotate(angle);
      ctx.translate(0, -radius*0.85);
      ctx.rotate(-angle);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(angle);
      ctx.translate(0, radius*0.85);
      ctx.rotate(-angle);
    };




//   for (let i = 1; i < 12; i++){
//    ctx.rotate(Math.PI/6)
//    ctx.fillText(`${i}`, 0, -40);
//   }
  // Votre code ici
} else {
   // code ancien navigateur
}