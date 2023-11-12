const canvas = document.getElementById('drawing');

if (canvas.getContext){
   const ctx = canvas.getContext('2d');
   let hCanvas = canvas.height
   //Les translations
   ctx.fillStyle = 'blue'
   ctx.fillRect(10,10,50,50);

   //On déplace le point d'origine du canvas pour le carré rouge
   ctx.translate(60,0)

   ctx.fillStyle = 'red';
   ctx.fillRect(10,10,50,50);

   //Les rotations
   ctx.rotate(Math.PI/4);
   ctx.fillStyle = 'green';
   ctx.fillRect(70,10,50,50);
}