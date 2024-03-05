const express = require('express');
const app = express();
const mongoose = require('mongoose');

// ... Configuración de mongoose y otros middleware ...

// Ruta para registrar un usuario
app.post('/registrarUsuario', (req, res) => {
    // Obtener los datos del cuerpo de la solicitud
    const { nombreCompleto, telefono, email, contrasena } = req.body;

    // Realizar operaciones de registro en la base de datos
    // ...

    // Responder al cliente
    res.json({ mensaje: 'Usuario registrado exitosamente' });
});

// ... Otras rutas y configuraciones ...

// Escuchar en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
