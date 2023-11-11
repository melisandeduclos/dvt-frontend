const canvas = document.getElementById('drawing');
let ctx;
if (canvas.getContext) {
   ctx = canvas.getContext('2d');
   const colorMap = ['white', 'blue', 'blue', 'red', 'red', 'yellow', 'yellow'];
   let nbcercle = 7;
   let wcible = 196;
   let rayon = (wcible/2)/nbcercle;
   console.log(rayon);
   //Trajet
   for (let cercle = 0; cercle < 7;cercle++){
      //poru démarrer un cercle à chaque fois, il faut mettre beginPath dans la boucle
      ctx.beginPath();
      ctx.arc(wcible/2,wcible/2,(wcible/2)-(rayon*cercle),0,Math.PI*2);
      //console.log(cercle);
      //console.log(colorMap[cercle])
      ctx.fillStyle = colorMap[cercle];
      ctx.fill();
      ctx.stroke();
   }}
