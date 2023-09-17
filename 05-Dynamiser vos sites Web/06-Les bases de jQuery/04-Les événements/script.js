$(() => {
   $('.box').click(()=>{
      console.log('click!');
   });

   
   $('#contact-form input[type="text"]').on('blur', () => {
      console.log('Vous avez quitté un champ de texte');
   })
   
   $('#contact-form').submit((e) => {
      e.preventDefault();
      console.log('Formulaire envoyé');
   })

//Pour simuler un événement lorsque je quitte un champ texte
   
   $('#username').blur(function() {
      //La fonction trigger permet d'appeler une autre fonction en jQuery
      $('#contact-form').trigger('submit');
   })
})


   
