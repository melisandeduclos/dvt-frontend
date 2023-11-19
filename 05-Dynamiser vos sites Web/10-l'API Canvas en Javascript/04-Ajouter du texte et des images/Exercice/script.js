const canvas = document.getElementById('drawing');
const ctx = canvas.getContext('2d');
let sizeCanvas = canvas.width;
console.log(sizeCanvas);
sizeCanvas  = sizeCanvas === '0' || sizeCanvas === null ? 150 : sizeCanvas;
canvas.setAttribute('height', sizeCanvas)
canvas.setAttribute('width', sizeCanvas)
const sizeText = sizeCanvas/4;

ctx.beginPath();
ctx.fillStyle = 'rgb(128,102,255)';
ctx.arc(sizeCanvas/2, sizeCanvas/2, sizeCanvas/3, 0, 2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'rgb(170,153,255)';
ctx.arc(sizeCanvas/2, sizeCanvas/2, sizeCanvas/3.5, 0, 2*Math.PI);
ctx.fill();
ctx.closePath();

//Mise en pace du texte
ctx.fillStyle = 'rgb(234,230,255)';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.font = `700 ${sizeText}px Arial`;

ctx.fillText('MD', sizeCanvas/2, sizeCanvas/2);


