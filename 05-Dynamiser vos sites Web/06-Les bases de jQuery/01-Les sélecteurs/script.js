$(() => {
   $('body')
   $('#contact-form')
   $('.input-row')
   $('#contact-form .input-row input[type="text"]')

   $('input[type="text"], button')

   $('button:hover')

   $('#click-me').click(function () {
      console.log('boom!');
      console.log($('#click-me'));
      console.log($(this));
   })
});
