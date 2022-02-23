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