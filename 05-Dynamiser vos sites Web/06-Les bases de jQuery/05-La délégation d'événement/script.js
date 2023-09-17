$(() => {
  $('#contact-form').submit(function (e) {
      e.preventDefault();
   });

   $('#send-data').click(function () {
      $('#contact-form').prepend('<p class="confirmation">Merci pour votre saisie !</p>');
   });

   //Quand je clique sur le message, le apragraphe doit disparaitre
   //mais pas ce biais cela ne fonctionne aps car l'élément au chargement de la page n'éexiste pas => on réalise une délégation
   // $('.confirmation').click(function (){
   //    console.log("paragraphe supprimé");
   //    $(this).remove();
   // });

   //Délégation
   // le mouseenter/over ne fonctionne pas à creuser
   // $('#contact-form').on({
   //    mouseenter: function() {
   //       console.log('enter');
   //       $(this).addClass( "inside" );
   //    }, mouseleave: function() {
   //       console.log('leave');
   //       $(this).removeClass( "inside" );
   //    }}, '.confirmation');

   $('#contact-form').on('click', '.confirmation', function (){
      console.log("Paragraphe supprimé");
      $(this).remove();
   });
})