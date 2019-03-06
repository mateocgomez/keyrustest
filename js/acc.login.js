let expre = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;


$(document).ready(function () {
   $('#entrar').on('click', function () {
        
    let user = $('#user').val();
    let pass = $('#password').val();

    if(user == "" || !expre.test(user) || pass == ""){
        $('#danger').css("display", "block");
        return false;
        
    } else {
        $('#sucess').css("display", "block");
    }

   })
    
});