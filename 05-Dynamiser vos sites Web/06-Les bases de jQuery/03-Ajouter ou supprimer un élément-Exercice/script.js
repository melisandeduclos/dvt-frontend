$(() => {
   //suppression du paragraphe introduction
   $('#introduction').remove();


   //Ajout de 2 éléments à la liste #goals
   $('#goals').prepend('<li>Objectif 0</li>');
   $('#goals').append('<li>Objectif 5</li>');
});