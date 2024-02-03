// Importa la clase Producto
import { Producto } from './objetos.js';

// Crea los objetos Producto en un array
let productos = 
    [
        new Producto ('Café Mesa de los Santos', 'Granos de café de alta calidad, tipo arabica, listos para moler y preparar la taza perfecta de café en casa. Disfruta de la frescura y el sabor auténtico.', 'img/Productos/Santos.png', 20, 25000),
        new Producto('Mezcla Intensa "Q.Coffee"', 'Sumérgete en la intensidad de nuestro café. Esta mezcla única ofrece un perfil de sabor audaz y fuerte, con notas de cacao y un toque ahumado. Ideal para aquellos que buscan una experiencia de café potente y llena de carácter.', 'img/Productos/premium.png', 12, 30000),
        new Producto('Café Premium "Arábica San Alberto"', 'Disfruta de la elegancia y el sabor refinado. Proveniente de las mejores cosechas, cada grano es seleccionado con cuidado para ofrecerte una experiencia única con notas florales, cuerpo sedoso y un toque de avellana.', 'img/Productos/Arabica.png', 15, 35000),
        new Producto('Café Descafeinado "Aroma De Occidente"', 'Experimenta la tranquilidad con nuestro café descafeinado. Una mezcla suave y equilibrada, perfecta para disfrutar en cualquier momento del día. Conserva el delicioso sabor del café sin cafeína, con notas de almendra y un toque sutil de chocolate.', 'img/Productos/Aroma.png', 20, 45000),
        new Producto('Aeropress (4 Tazas)', 'Innovadora herramienta para preparar café que combina la simplicidad y la calidad. Su diseño portátil la hace perfecta para llevarla contigo y disfrutar de tu café favorito en cualquier lugar.', 'img/Productos/Aeropress.png', 4, 160000),
        new Producto('Mini Capuchinera', 'Una máquina compacta para preparar diferentes tipos de café. Ofrece la comodidad de disfrutar de un café de calidad de barista sin salir de casa.', 'img/Productos/Capuccinera.png', 2, 550000),
        new Producto('Chemex Clásica (6 Tazas)', 'Elegante cafetera de vidrio para preparar café mediante el método de goteo. Su diseño único y la calidad del café que produce la convierten en una opción popular entre los amantes del café.', 'img/Productos/Chemex.png', 3 , 320000),
        new Producto('Termo Vaso', 'El vaso termo es un recipiente aislado que mantiene las bebidas calientes o frías por más tiempo. Ideal para llevar tu café favorito contigo mientras te desplazas.', 'img/Productos/Vaso.png', 40, 30000),
        new Producto('Macarrones de Café (Caja x12)', 'Deliciosos macarrones con sabor a café, una combinación perfecta de textura suave y el distintivo aroma del café.', 'img/Productos/Macarrones.png', 20, 15000),
        new Producto('Frappuccino Mocha', 'Bebida de café lista para llevar, perfecta para aquellos momentos en los que necesitas tu dosis de cafeína de manera rápida y conveniente.', 'img/Productos/Frappuccino.png', 15, 8000),
        new Producto ('Licor de café Coloma', 'Un licor exquisito con el distintivo sabor del café. Perfecto para cócteles, postres o simplemente disfrutarlo solo.', 'img/Productos/Licor.png', 5, 75000),
    ];

// Función para crear el modal
function crearModal(producto) {
    let modal = document.createElement('div');
    modal.setAttribute('class', 'modal');
    modal.setAttribute('id', 'miModal');

    let modalContenido = document.createElement('div');
    modalContenido.setAttribute('class', 'modal-contenido');

    let cerrar = document.createElement('span');
    cerrar.setAttribute('class', 'cerrar');
    cerrar.innerHTML = '&times;';
    cerrar.onclick = function() {
        ocultarModal(modal); // Llama a la función ocultarModal pasando el modal como parámetro
    };

    let contenedorModal = document.createElement('div');
    contenedorModal.classList.add('contenedor-galeria');

    let contenedorTextos = document.createElement('div');
    contenedorTextos.classList.add('contenedor-textos');

    let imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.classList.add('imaganesP');

    let tituloImagen = document.createElement('h3');
    tituloImagen.textContent = producto.nombre;

    let descripcionImagen = document.createElement('p');
    descripcionImagen.textContent = producto.descripcion;

    let cantidadProducto = document.createElement('p');
    cantidadProducto.innerHTML = `<strong>Cantidad: ${producto.cantidad}</strong>`;

    let precioImagen = document.createElement('p');
    precioImagen.innerHTML = `<strong>Precio: ${producto.precio}</strong>`;

    let agregarCarrito = document.createElement('button');
    agregarCarrito.innerHTML = `<strong> Agregar al Carrito </strong>`;


    if(window.innerWidth == 360 || window.innerWidth == 390 || window.innerWidth == 393 || window.innerWidth == 412 
        || window.innerWidth == 412 || window.innerWidth == 414)
    {
        contenedorTextos.appendChild(descripcionImagen);
        contenedorTextos.appendChild(cantidadProducto);
        contenedorTextos.appendChild(precioImagen);
        contenedorTextos.appendChild(agregarCarrito);

        contenedorModal.appendChild(tituloImagen);
        contenedorModal.appendChild(imagen);
        contenedorModal.appendChild(contenedorTextos);

        modalContenido.appendChild(cerrar);
        modalContenido.appendChild(contenedorModal);
        modal.appendChild(modalContenido);
        document.body.appendChild(modal);
    }
    else
    {
        contenedorTextos.appendChild(tituloImagen);
        contenedorTextos.appendChild(descripcionImagen);
        contenedorTextos.appendChild(cantidadProducto);
        contenedorTextos.appendChild(precioImagen);
        contenedorTextos.appendChild(agregarCarrito);

        contenedorModal.appendChild(imagen);
        contenedorModal.appendChild(contenedorTextos);

        modalContenido.appendChild(cerrar);
        modalContenido.appendChild(contenedorModal);
        modal.appendChild(modalContenido);
        document.body.appendChild(modal);
    }

    return modal;
}

// Función para mostrar el modal
function mostrarModal(modal) {
    modal.style.display = 'block';
    // Deshabilita los botones con clase 'search-icon'
    let cuerpo = document.getElementsByClassName('search-icon');
    for (let x = 0; x < cuerpo.length; x++) {
        cuerpo[x].style.pointerEvents = 'none';
    }
}

// Función para ocultar el modal
function ocultarModal(modal) {
    modal.style.display = 'none';
    // Habilita los botones con clase 'search-icon'
    let cuerpo = document.getElementsByClassName('search-icon');
    for (let x = 0; x < cuerpo.length; x++) {
        cuerpo[x].style.pointerEvents = 'auto';
    }
}

// Evento para cerrar el modal al hacer clic fuera
window.onclick = function(event) {
    let modal = document.getElementById('miModal');
    if (event.target == modal) {
        ocultarModal(modal); // Llama a la función ocultarModal pasando el modal como parámetro
    }
};

let modal;
let imagenesGalerias = document.querySelectorAll('.puntero');

if (imagenesGalerias.length === productos.length) {
    imagenesGalerias.forEach((imagenActual, index) => {
        imagenActual.addEventListener('click', function() {
            modal = crearModal(productos[index]);
            mostrarModal(modal);
        });
    });
} else {
    console.log("Las imágenes no son las mismas que los productos ingresados");
}
