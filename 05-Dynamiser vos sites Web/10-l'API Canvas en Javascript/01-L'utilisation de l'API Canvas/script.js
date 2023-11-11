const canvas = document.getElementById('drawing');
//contexte ctx du canvas
let ctx;
if (canvas.getContext) {
   ctx = canvas.getContext('2d');
   ctx.fillStyle = 'red';
   ctx.fillRect(0,0,150,150);
} else {
   alert('Canvas n\'est pas supporté sur ce navigateur')
}