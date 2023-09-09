$(() => {
   let introduction = $('#introduction').html();
   $('#introduction-copy').html(introduction);
   
   let element = $('goals');

   $.data(element, 'liste', {
      0: 'Récupérer le code HTML',
      1: 'Modifier le CSS',
      2: 'Parcourir une liste',
      3: 'Associer des données à un élément'
   });

   $('#goals li').each(function(index){
      $(this).text($.data(element,'liste')[index])
   })
   });