let expre = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;


$(document).ready(function () {
   $('#entrar').on('click', function () {
        
    let user = $('#user').val();
    let pass = $('#password').val();

    if(user == "" || !expre.test(user) || pass == ""){
        $('#danger').css("display", "flex");
        return false;
        
    } else {
        $('#sucess').css("display", "flex");
    }

   }),

   $('#close').on('click', function () {
    $('#danger').css("display", "none");
   })
    
});