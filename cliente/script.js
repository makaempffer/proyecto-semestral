var accounts = ["test@email.com", "ejemplo@email.com"];
var passwords = ["123123", "321321"]

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

function loginUser()
{
    var email = document.getElementById('login-email');
    var password = document.getElementById('login-password');
    if (accounts.includes(email.value) && passwords.includes(password.value))
    {
        alert("Inicio aceptado!.")
    } else 
    {
        alert("Porfavor intente registrarse o ingresar bien los datos.")
    }
}
