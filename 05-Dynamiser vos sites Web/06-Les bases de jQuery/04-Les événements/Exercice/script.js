$(() => {
   $('#comment').keyup(() => {
      let comment = $('#comment').val();
      console.log(comment);
      if (comment !== "") {
         console.log('vous avez quitté un champ de commentaires')
         $('#commentValue').text(comment);
      } else {
         $('#commentValue').text('Pas de commentaire');
      }
   })
});