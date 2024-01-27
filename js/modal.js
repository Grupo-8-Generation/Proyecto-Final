//importar el archivos js objeto y llamar a la clase Producto
import { Producto } from './objetos.js';

//Crear los objetos para que se puedan llamar en la clase por medio de un array
let productos = 
    [
        new Producto ('Cafe Premium 1', 'Esta descripción es para café premium 1', 'img/cafe-1.jpg', 5, 2000),
        new Producto('Cafe Premium 2', 'Esta descripción es para café premium 2', 'img/about-2.jpg', 3, 5000),
        new Producto('Cafe Premium 3', 'Esta descripción  es para café premium 3', 'img/cafe_contacto.jpg',6 ,1500)
    ];

// Crear el modal
function crearModal(producto) {
    /*Creamos el modal*/
    let modal = document.createElement('div');
    modal.setAttribute('class', 'modal');
    modal.setAttribute('id', 'miModal');

    /*Creamos el contenedor del contenido modal*/
    let modalContenido = document.createElement('div');
    modalContenido.setAttribute('class', 'modal-contenido');

    /*Creamos la x que va a cerrar el modal*/
    let cerrar = document.createElement('span');
    cerrar.setAttribute('class', 'cerrar');
    cerrar.innerHTML = '&times;';
    cerrar.onclick = function() {
        modal.style.display = 'none';
    };

    /* Creamos un div para agregar clase. contenedor galería para que se pueda ver en fila*/
    let contenedorModal = document.createElement('div');
    contenedorModal.classList.add('contenedor-galeria');

    /* ContenedorB en donde se va almacenar los textos en forma de columnas, como titulo, descripción, cantidad y precio*/
    let contenedorTextos = document.createElement('div');
    //Si desea ingresar más clases: contenedorTextos.classList.add('ejemplo1', 'ejemplo2);
    contenedorTextos.classList.add('contenedor-textos');

    //Creamos nuestra etiqueta img que va contener la imagen correspondiente al clic dado
    let imagen = document.createElement('img');
    //Aquí se almacena de acuerdo al parametro enviado, va a mostrar la imagen correspondiente
    imagen.src = producto.imagen;
    imagen.classList.add('imaganesP');

    //Creamos nuestra etiqueta h3 que va contener el título correspondiente al clic dado
    let tituloImagen = document.createElement('h3');
    // Aquí se almacena de acuerdo al parametro enviado, va a mostrar el título correspondiente
    tituloImagen.textContent = producto.nombre;

    // Creamos nuestra etiqueta p que va contener a la descripción correspondiente al clic dado
    let descripcionImagen = document.createElement('p');
    // Aquí se almacena de acuerdo al parametro enviado, va a mostrar la descripción correspondiente
    descripcionImagen.textContent = producto.descripcion;

    // Creamos nuestra etiqueta p que va contener la cantidad correspondiente al clic dado
    let cantidadProducto = document.createElement('p');
    // Aquí se almacena de acuerdo al parametro enviado, va a mostrar la cantidfad correspondiente
    cantidadProducto.innerHTML = `<strong>Cantidad: ${producto.cantidad}</strong>`;

    // Creamos nuestra etiqueta p que va contener el precio correspondiente al clic dado
    let precioImagen = document.createElement('p');
    // Aquí se almacena de acuerdo al parametro enviado, va a mostrar el precio correspondiente
    precioImagen.innerHTML = `<strong>Precio: ${producto.precio}</strong>`;

    //concatenar en el contenedorB, el título, descripción, cantidad, precio
    contenedorTextos.appendChild(tituloImagen);
    contenedorTextos.appendChild(descripcionImagen);
    contenedorTextos.appendChild(cantidadProducto);
    contenedorTextos.appendChild(precioImagen);

    //ContenedorPrincipal que va a tener la imagen y los texto en fila
    contenedorModal.appendChild(imagen);
    contenedorModal.appendChild(contenedorTextos);

    //Finalización del modal para que aparezca
    modalContenido.appendChild(cerrar);
    modalContenido.appendChild(contenedorModal);
    modal.appendChild(modalContenido);
    document.body.appendChild(modal);

    return modal;
}

// Mostrar el modal
function mostrarModal(modal) {
    modal.style.display = 'block';
}

// Evento para cerrar el modal al hacer clic fuera
window.onclick = function(event) {
    let modal = document.getElementById('miModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

let modal;
let imagenesGalerias = document.querySelectorAll('.puntero');//Obtener todas las etiquetas que tengan la clase .puntero

//Comparar que la cantidad de imagenes creadas sea igual a los productos creados en el arreglo
if(imagenesGalerias.length === productos.length)
{
    //Recorrer las imagenes, con la imagen actual y su indice actual
    imagenesGalerias.forEach((imagenActual, index) => 
        {
            //Agregar un evento a la imagen seleccionada
            imagenActual.addEventListener('click', function()
            {
                //crear el modal, de acuerdo al producto del arreglo seleccionado
                modal = crearModal(productos[index]);
                mostrarModal(modal);
            });
        });
}
else
{
    //En caso que las imagenes y los productos creados no sean los mismo, saldra error y no se ejecutara la función
    console.log("las imagenes no son las mismas que los productos ingresados");
}

