//Intro-Exercice
//  const shop = document.getElementById('shopping');

//  const goToShop = () => {
//     alert('Votre liste d\'achat');
//  }

// shop.addEventListener('click', goToShop);
//La programmation événementielle-Exercice

const nbArticle = document.getElementById('number-article')
const btnAdd = document.getElementById('add');
const btnDelete = document.getElementById('delete');
const shopCart = document.getElementById('shop');

const addArticle = () => {
   number = nbArticle.innerHTML
   number++
   nbArticle.innerHTML = number
   if (number = 1) {
      shopCart.style.display = 'block';
      shopCart.style.color = 'rgb(42, 153, 161)';
   }
}

btnAdd.addEventListener('click', addArticle);

const deleteArticle = () => {
   number = nbArticle.innerHTML
   if (number > 0) {
      number--
      nbArticle.innerHTML = number
   }
   else {
      alert('Nombre d\'article à 0')
   }
   
   if (number == 0){
      shopCart.style.display = 'none';   
   }
}

btnDelete.addEventListener('click', deleteArticle);

const clickToShopCart = function () {
   btnAdd.removeEventListener('click', addArticle);
   btnDelete.removeEventListener('click', deleteArticle);
   shopCart.style.color = 'rgb(159, 59, 69)';
}

shopCart.addEventListener('click', clickToShopCart);
