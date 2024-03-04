function validateForm() {
  var email = document.getElementById('email-1').value;
  var password = document.getElementById('password-1').value;

  // Validar el correo electrónico
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) 
  {
    alert('Por favor, introduce un correo electrónico válido');
    return false;
  }

  // Validar la contraseña
  if (password.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres');
    return false;
  }
  

  // Si el correo y la contraseña son válidos, se puede proceder con el inicio de sesión
  // Aquí puedes agregar tu lógica para enviar los datos a un servidor o realizar otras acciones
  //alert('Inicio de sesión exitoso');
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Inicio de sesión exitoso",
    showConfirmButton: false,
    timer: 500
  });
  return true;
}
var inicioSesion = {
  email: email-1,
  contraseña: password-1
};
var usuarioJSON = localStorage.setItem("prueba2", JSON.stringify(usuario));
var prueba = localStorage.getItem("prueba2");
alert('Formulario enviado correctamente');


var inicioSesion = {
  email: email-1,
  contraseña: password-1
};

var usuarioJSON = localStorage.setItem("prueba2",JSON.stringify(inicioSesion));
var prueba = localStorage.getItem("prueba2");
  alert('Formulario enviado correctamente'); 

  
  //Mostrar y esconder sección de formulario de iniciar sesión 

  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "" || x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



//Formulario de registrarse.
document.getElementById('registrationForm').addEventListener('submit', function(event) { 
    event.preventDefault(); 
    var fullName = document.getElementById('fullName').value; 
    var phoneNumber = document.getElementById('phoneNumber').value; 
    var email = document.getElementById('email-2').value; 
    var password = document.getElementById('password-2').value; 
    // Validar que la contraseña coincida 
    if (password.length < 6) { alert('La contraseña debe tener al menos 6 caracteres'); 
    return; } 
    // Validar campos no válidos 
    if (fullName === '' || phoneNumber === '' || email-2 === '' || password-2 === '') 
    { alert('Todos los campos son obligatorios'); 
    return; } 
    // Validar correo electrónico 
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailRegex.test(email)) 
    {
       alert('El correo electrónico no es válido'); 
      return; 
    } 
    // Validar teléfono 
    var phoneRegex = /^\d{10}$/; 
    if (!phoneRegex.test(phoneNumber)) { 
        alert('El número de teléfono no es válido'); 
        return; } 
        // Si todas las validaciones pasan, se puede enviar el formulario 
        var usuario = {
          nombreCompleto: fullName,
          telefono: phoneNumber,
          email: email,
          contraseña: password
          
      };
      var usuarioJSON = localStorage.setItem("prueba2",JSON.stringify(usuario));
      var prueba = localStorage.getItem("prueba2");
        alert('Formulario enviado correctamente'); 
      });

  //Mostrar y esconder sección de formulario

  function myFunction1() {
    var x = document.getElementById("formularioRegistro");
    if (x.style.display === "" || x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

