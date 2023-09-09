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


   
});