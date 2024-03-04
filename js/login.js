$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault();

        var username = $('#email').val();
        var password = $('#password').val();

        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/Usuarios/login',
            contentType: 'application/json',
            data: JSON.stringify({username: username, password: password}),
            success: function() {
                window.location.href = 'perfilUsuario.html'; // Redirigir al perfil del usuario
            },
            error: function() {
                alert('Error: Usuario o contraseña incorrectos');
            }
        });
    });
});
