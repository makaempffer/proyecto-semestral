function registerUser()
{

    var password = document.getElementById('register-password');
    var password2 = document.getElementById('register-confirm-password');
    if (password.value != password2.value)
    {
        form = document.querySelector('#register');
        form.addEventListener('submit', function(e)
        {
            e.preventDefault();
        });
    
        alert("Las contraseñas deben coincidir.");
    }

}
