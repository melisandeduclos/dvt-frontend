// $(()=> {
//    $('#hide-box').click(function (){
//       $('.box').hide(1000, function() {
//          console.log('La boite est masquée')
//       });

//       $('.box').fadeOut(1000, function() {
//          console.log('La boite est masquée')
//       });
//    });

//    $('#show-box').click(function (){
//       // $('.box').show(400);

//       $('.box').fadeIn(400);
//    });
// })

$(() => {
   $('#trigger-animation').click(function(){
      $('.box').animate({
         width: '80%',
         borderRadius: '20px'}
      , 1000, function () {
         console.log("Animation terminée")
      }
      );
   });
});