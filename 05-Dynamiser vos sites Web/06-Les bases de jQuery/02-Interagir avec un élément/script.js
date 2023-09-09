$(() => {
   let title = $('h1').html();
   console.log(title);

   $('h1').html('Le nouveau titre');
   let fontStack = $('h1').css('font-family')
   console.log(fontStack);
   $('h1').css('color', 'rgb(255,106,106)')

   $('li').click(function () {
      $('li').each(function(){
         $(this).removeClass('active');
      });
      //jQuery va implicitement boucler
      //si il détecte qu'il y a plusieurs élements
      //donc on peut écrire
      $('li').removeClass('active');

      $(this).addClass('active');
   });

      $('#click-me').data('timer', 5000);

   $('#click-me').click(function () {
      setTimeout(() => {
         console.log('boom!');
      }, $('#click-me').data('timer'));
   });
})