document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  let nombre = document.querySelector('input[type="text"]').value;
  let email = document.querySelector('input[type="email"]').value;
  let comentario = document.querySelector('textarea').value;
  
  // Envía los datos del comentario al servidor
  fetch('guardar_comentario.php', {
    method: 'POST',
    body: JSON.stringify({ nombre: nombre, email: email, comentario: comentario }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      mostrarComentarios(); // Actualiza los comentarios después de guardar uno nuevo
    } else {
      alert('Error al guardar el comentario');
    }
  });
});
