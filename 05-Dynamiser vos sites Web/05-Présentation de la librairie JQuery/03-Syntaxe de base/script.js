$(function () {
   let element = $('#contact');
   console.log(element);

   let element2 = $('#contact > .username');
   console.log(element2);

   let titleContent = $('#main-title').text();
   console.log(titleContent);

   $('#main-title').text('Un nouveau titre');
   $('#main-title').css('color', 'red');
   //ou
   $('#main-title').text('Un nouveau titre').css('color', 'red');

   let aboutContent = $('#about').html();
   console.log(aboutContent);

   $('#box').css({
      'background':'lightblue',
      'height':'200px',
      'width':'400px',
      'padding':'30px'
   })

   //En ES5
   $('#box').click(function(event){
      alert('La div a été cliquée');
      console.log(event);
   })

   //En ES6
   $('#box').click((event) => {
      alert('La div a été cliquée');
      console.log(event);
   })

});

// #contact => id
// .username => class

