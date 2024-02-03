document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validarFormulario()) {
      const usuario = {
        nombreCompleto: document.getElementById('nombreCompleto').value,
        telefono: document.getElementById('telefono').value,
        email: document.getElementById('email').value,
        contrasena: document.getElementById('contrasena').value
      };
      console.log(usuario);
      // Aquí podrías enviar el objeto JSON a tu servidor para procesarlo
    }
  });

  function validarFormulario() {
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const contrasena = document.getElementById('contrasena').value;

    if (!contrasenaCoincide(contrasena)) {
      mostrarError('Las contraseñas no coinciden');
      return false;
    }
    if (!esEmailValido(email)) {
      mostrarError('El correo electrónico no es válido');
      return false;
    }
    if (!esTelefonoValido(telefono)) {
      mostrarError('El número de teléfono no es válido');
      return false;
    }
    return true;
  }

  function contrasenaCoincide(contrasena) {
    // Aquí podrías implementar la lógica para verificar que las contraseñas coinciden
    return true; // Por ahora siempre devuelve true
  }

  function esEmailValido(email) {
    // Aquí podrías implementar la lógica para verificar que el email es válido
    return true; // Por ahora siempre devuelve true
  }

  function esTelefonoValido(telefono) {
    // Aquí podrías implementar la lógica para verificar que el teléfono es válido
    return true; // Por ahora siempre devuelve true
  }

  function mostrarError(mensaje) {
    alert(mensaje);
  }

  //Mostrar y esconder sección de formulario

  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//formulario de registro
document.getElementById('registrationForm').addEventListener('submit', function(event) { 
    event.preventDefault(); 
    var fullName = document.getElementById('fullName').value; 
    var phoneNumber = document.getElementById('phoneNumber').value; 
    var email = document.getElementById('email').value; 
    var password = document.getElementById('password').value; 
    // Validar que la contraseña coincida 
    if (password.length < 8) { alert('La contraseña debe tener al menos 8 caracteres'); 
    return; } 
    // Validar campos no válidos 
    if (fullName === '' || phoneNumber === '' || email === '' || password === '') 
    { alert('Todos los campos son obligatorios'); 
    return; } 
    // Validar correo electrónico 
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; if (!emailRegex.test(email)) 
    { alert('El correo electrónico no es válido'); 
    return; } 
    // Validar teléfono 
    var phoneRegex = /^\d{10}$/; 
    if (!phoneRegex.test(phoneNumber)) { 
        alert('El número de teléfono no es válido'); 
        return; } 
        // Si todas las validaciones pasan, se puede enviar el formulario 
        alert('Formulario enviado correctamente'); });

  //Mostrar y esconder sección de formulario

  function myFunction1() {
    var x = document.getElementById("formularioRegistro");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}