$(() => {
   $('article').css('color', 'green');
   $('article').css('background-color', 'rgb(255,106,106)');
   //$('h1, h2, .content').css('color', 'green');

   $('article p').last().css('font-style', 'oblique');
   $('article p').last().css('background-color', 'white');
})