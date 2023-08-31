const btnconnect = document.getElementById('connect')

function btnClick(){
   alert('Vous avez cliqué sur le bouton de connexion 🤩')
}

function btnMouseenter(){
   btnconnect.style.backgroundColor = 'rgb(151, 63, 63)';
   btnconnect.style.transitionDuration = '0.3s';
}

function btnMouseleave(){
   btnconnect.style.backgroundColor = 'rgb(63, 151, 82)'
   
}


btnconnect.addEventListener('click', btnClick)
btnconnect.addEventListener('mouseenter', btnMouseenter)
btnconnect.addEventListener('mouseleave', btnMouseleave)