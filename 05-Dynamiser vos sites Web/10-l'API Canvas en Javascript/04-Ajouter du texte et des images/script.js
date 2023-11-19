// //Image Méthode Vidéo
// const canvas = document.getElementById('drawing');
// const ctx = canvas.getContext('2d');
// sizecanvas = canvas.getAttribute('width');
// //1. Prendre en compte le temps de chargement de l'image
// window.onload = () => {
//    const image = new Image(600,400);
//    image.onload = () => {
//       ctx.drawImage(image, 0,0,600,400);
//    };

//    image.src = 'jain.jpg'
// };

//Image Méthode Cours
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
 //ctx.fillRect(0,0,sizeCanvas,sizeCanvas)
})
img.src = 'jain.jpg'

//Texte
// const canvas = document.getElementById('drawing');
// const ctx = canvas.getContext('2d');
// sizecanvas = canvas.getAttribute('width')
ctx.strokeStyle = 'rgb(61, 125, 184)';
ctx.fillStyle = 'rgb(184, 61, 61)';

// //Avec cette ligne en dessus,c 'est le centre de mont texte qui est aligné à 20px de mon canvas -> il faut donc changé dans les propriétés fillText et Stroke Text la coordonnées x pour qu'elle soit au mileiu de canvas
ctx.textAlign = 'center';
//Taille de la police
ctx.font = '800 50px Segoe UI';
// //ctx.fillText('Lorem ipsum dolor', 20, 100);
// //ctx.strokeText('Lorem ipsum dolor', 21, 105);
ctx.strokeText('This IS',sizeCanvas/2, 52);
ctx.strokeText('JaIN',sizeCanvas/2, sizeCanvas-15);

ctx.font = '700 50px Segoe UI';
ctx.fillText('This IS',sizeCanvas/2, 52);
ctx.fillText('JaIN',sizeCanvas/2, sizeCanvas-15);
