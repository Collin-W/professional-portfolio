   // toast script start
        
   $('#myToast').toast({delay:10000})
   $('#myToast').toast('show')
       
   $('.dismiss-toast').click(() => {
       $('#myToast').toast('dismiss')
       console.log('test 123')
   })
// toast script end


// form script
$(document).ready(function () {

    $('.contact__submitButton').click(function (e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (name.length < 1) {
            $('#name').after('<span class="error">This field is required</span>');
        }
        if (message.length < 1) {
            $('#message').after('<span class="error">This field is required</span>');
        }
        if (email.length < 1) {
            $('#email').after('<span class="error">This field is required</span>');
        }
         else {
            $('#contact-form').submit()
            $('.input-reset').val('')
        }
    
    });

});


// <!-- <div class="contact-header">
//             <button id="contact-circle-question" ><i class="fa-solid fa-circle-question"></i></button>
//             </div> -->



// <!-- <div id="myToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
//         <div class="toast-header">
//           <button type="button" class="ml-2 mb-1 close dismiss-toast" data-dismiss="toast" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div class="toast-body">
//           This form will directly email me.
//         </div>
//       </div> -->

// $('#contact-form').click(() => {
         
       // console.log('test')
       //  })
// <!-- 
// } else {
//     var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
//     var validEmail = regEx.test(email);
//     if (!validEmail) {
//         $('#email').after('<span class="error">Enter a valid email</span>');
//     }
// }  -->