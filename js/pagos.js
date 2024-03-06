function selectPaymentMethod(method) {
    const formContainer = document.createElement('div');
    formContainer.classList.add('payment-form');
  
    formContainer.innerHTML = `
      <h3>Ingresa tus datos para continuar con el pago</h3>
      <label for="email">Correo electrónico:</label>
      <input type="email" id="email" required><br>
      <label for="names">Nombres:</label>
      <input type="text" id="names" required><br>
      <label for="lastNames">Apellidos:</label>
      <input type="text" id="lastNames" required><br>
      <label for="phone">Celular:</label>
      <input type="tel" id="phone" required><br>
      <button onclick="submitPayment()">Continuar con el pago</button>
    `;
    
    const paymentMethods = document.querySelector('.payment-methods');
    paymentMethods.appendChild(formContainer);
  }
  
  function submitPayment() {
    const email = document.getElementById('email').value;
    const names = document.getElementById('names').value;
    const lastNames = document.getElementById('lastNames').value;
    const phone = document.getElementById('phone').value;
  
    // Aquí puedes agregar la lógica para procesar el pago con los datos ingresados
  
    alert(`Se procesara su pago con la siguiente información:\nCorreo: ${email}\nNombres: ${names}\nApellidos: ${lastNames}\nCelular: ${phone}\n¡estas seguro`);
    // Generar comprobante de pago
  const receipt = `Comprobante de pago:\nCorreo: ${email}\nNombres: ${names}\nApellidos: ${lastNames}\nCelular: ${phone}`;

  // Redireccionar a otra página después de 3 segundos
  setTimeout(() => {
    window.location.href = 'perfilPago.html';
  }, 3000);
}



