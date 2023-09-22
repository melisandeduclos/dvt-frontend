$(document).ready(() => {
   let constraintsText = {
       name: 'Le nom d\'un utilisateur ne peut contenir plus de 20 caractères et ne doit contenir que des lettres.',
       email: 'Il doit s\'agir d\'un e-mail valide',
       password: 'Le mot de passe ne peut contenir que des chiffres, des lettres, et au moins 6 caractères',
       birthDate: 'L\'utilisateur doit être une personne majeure',
       comment: 'Le commentaire ne peut excéder plus de 200 caractères'
   }


   $('input, textarea').each(function () {
      //console.log($(this).attr('name'))
      //console.log(constraintsText[$(this).attr('name')]);
      $(this).prev().append('<span id="'+$(this).attr('name')+'_log"></span><br>')
   })

   $('input[id="name"]').on('keyup', function () {
      $('#'+$(this).attr('name')+'_log').html('')
      // name_log.html($(this).val()+" "+$(this).val().length);
      if($(this).val().length > 20) {
         // text = $(this).val().substr(0,20);
         // name_log.html($(this).val().substr(0,4)+" "+$(this).val().length);
         $('#'+$(this).attr('name')+'_log').html(constraintsText[$(this).attr('name')]);
         $(this).val($(this).val().substr(0,20));
      };
      
      if($(this).val().length > 0) {
         text = $(this).val().slice(-1)
         if ($.isNumeric(text)){
            $('#'+$(this).attr('name')+'_log').html(constraintsText[$(this).attr('name')]);
            // $(this).val($(this).val().substr(0,$(this).val().length - 1));
         }
      }
   });

   function validateEmail($email){
      //console.log(email)
      // var emailReg = new RegExp(/^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/);
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailReg.test($email);
   }
   
   $('input[id="email"]').on('keyup', function () {
      if(!validateEmail($(this).val())) {
         $('#'+$(this).attr('name')+'_log').html(constraintsText[$(this).attr('name')]);
      } else {
         $('#'+$(this).attr('name')+'_log').html('')
      }
   })

   function checkPasswordComplexity($pwd) {
      var regularExpression = /^[a-zA-Z0-9]+$/;
      var valid = regularExpression.test($pwd);
      return valid;
  }

   $('input[id="password"]').on('keyup', function () {
      if(!checkPasswordComplexity($(this).val())) {
         $('#'+$(this).attr('name')+'_log').html(constraintsText[$(this).attr('name')]);
      } else {
         $('#'+$(this).attr('name')+'_log').html('')
      }
      if($(this).val().length < 6) {
         $('#'+$(this).attr('name')+'_log').html(constraintsText[$(this).attr('name')]);
      } else {
         $('#'+$(this).attr('name')+'_log').html('')
      };
   })

   $('input[id="birthDate"]').on('blur', function (){
      console.log($(this).val())
      var diffDate = parseInt((new Date() - new Date($(this).val())) / (1000 * 60 * 60 * 24));
      var age = Math.floor(diffDate/365);
      if( age < 18) {
         $('#'+$(this).attr('name')+'_log').html(constraintsText[$(this).attr('name')]);
      } else {
         $('#'+$(this).attr('name')+'_log').html('')
      };
   })

   $('textarea[id="comment"]').on('keyup', function () {
      if($(this).val().length > 200) {
         $('#'+$(this).attr('name')+'_log').html(constraintsText[$(this).attr('name')]);
      } else {
         $('#'+$(this).attr('name')+'_log').html(200-$(this).val().length+' caractères restants')
      };
   })
});