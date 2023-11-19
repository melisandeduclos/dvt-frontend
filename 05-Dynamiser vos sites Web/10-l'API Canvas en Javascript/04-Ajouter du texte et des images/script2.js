
const canvas = document.getElementById('drawing');
const ctx = canvas.getContext('2d');
let sizeCanvas = canvas.width;
console.log(sizeCanvas);
sizeCanvas  = sizeCanvas === '0' || sizeCanvas === null ? 150 : sizeCanvas;
canvas.setAttribute('height', sizeCanvas)
canvas.setAttribute('width', sizeCanvas)
const img = new Image();
img.addEventListener('load', () => {
   console.log(img.width * sizeCanvas / img.height);
   const newHeight = img.height * sizeCanvas / img.width
   ctx.drawImage(img, 0, (sizeCanvas-newHeight)/2, sizeCanvas, newHeight);
   ctx.globalCompositeOperation = 'destination-in';
   ctx.beginPath();
   ctx.arc(sizeCanvas/2, sizeCanvas/2, sizeCanvas/3.5, 0, 2*Math.PI);
   ctx.fill();
   ctx.globalCompositeOperatino='source-over';
})
img.src = 'jain.jpg'


