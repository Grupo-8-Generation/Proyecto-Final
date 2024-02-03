//importar el archivos js objeto y llamar a la clase Producto
import { Producto } from './objetos.js';

//Crear los objetos para que se puedan llamar en la clase por medio de un array
let productos = 
    [
        //Todos los productos(?)
        new Producto('Café Mesa de los Santos', 'Granos de café de alta calidad, tipo arabica, listos para moler y preparar la taza perfecta de café en casa. Disfruta de la frescura y el sabor auténtico.', './img/Productos/Santos.png', 20, $25000),
        new Producto('Mezcla Intensa "Q.Coffee"', 'Sumérgete en la intensidad de nuestro café. Esta mezcla única ofrece un perfil de sabor audaz y fuerte, con notas de cacao y un toque ahumado. Ideal para aquellos que buscan una experiencia de café potente y llena de carácter.', '/img/Productos/premium.png', 12, $30000),
    
        //Cafés
        new Producto(),
        new Producto('Mezcla Intensa "Q.Coffee"', 'Sumérgete en la intensidad de nuestro café. Esta mezcla única ofrece un perfil de sabor audaz y fuerte, con notas de cacao y un toque ahumado. Ideal para aquellos que buscan una experiencia de café potente y llena de carácter.', '/img/Productos/premium.png', 12, $30000),

        
        new Producto('Café Premium "Arábica San Alberto"', 'Disfruta de la elegancia y el sabor refinado. Proveniente de las mejores cosechas, cada grano es seleccionado con cuidado para ofrecerte una experiencia única con notas florales, cuerpo sedoso y un toque de avellana.', '/img/Productos/Arabica.png', '15', '$35.000'),
        
        new Producto('Café Descafeinado "Aroma De Occidente"', 'Experimenta la tranquilidad con nuestro café descafeinado. Una mezcla suave y equilibrada, perfecta para disfrutar en cualquier momento del día. Conserva el delicioso sabor del café sin cafeína, con notas de almendra y un toque sutil de chocolate.', '/img/Productos/Aroma.png', null, '$45.000'),

        //Accesorios
        new Producto('Aeropress (4 Tazas)', 'Innovadora herramienta para preparar café que combina la simplicidad y la calidad. Su diseño portátil la hace perfecta para llevarla contigo y disfrutar de tu café favorito en cualquier lugar.', '/img/Productos/Aeropress.png', '4', '$160.000'),
        new Producto('Mini Capuchinera', 'Una máquina compacta para preparar diferentes tipos de café. Ofrece la comodidad de disfrutar de un café de calidad de barista sin salir de casa.', '/img/Productos/Capuccinera.png', '2', '$550.000'),
        new Producto('Chemex Clásica (6 Tazas)', 'Elegante cafetera de vidrio para preparar café mediante el método de goteo. Su diseño único y la calidad del café que produce la convierten en una opción popular entre los amantes del café.', '/img/Productos/Chemex.png', '3' , '$320.000'),
        new Producto('Termo Vaso', 'El vaso termo es un recipiente aislado que mantiene las bebidas calientes o frías por más tiempo. Ideal para llevar tu café favorito contigo mientras te desplazas.', '/img/Productos/Vaso.png', '40', '$30.000'),
    
        //Alimentos
        new Producto('Macarrones de Café (Caja x12)', 'Deliciosos macarrones con sabor a café, una combinación perfecta de textura suave y el distintivo aroma del café.', '/img/Productos/Macarrones.png', '20', '$15.000'),
        new Producto('Frappuccino Mocha', 'Bebida de café lista para llevar, perfecta para aquellos momentos en los que necesitas tu dosis de cafeína de manera rápida y conveniente.', '/img/Productos/Frappuccino.png', '15', '$8.000'),
        new Producto('Licor de café Coloma', 'Un licor exquisito con el distintivo sabor del café. Perfecto para cócteles, postres o simplemente disfrutarlo solo.', '/img/Productos/Licor.png', '5', '$75.000'),
        new Producto('Arequipe de café', 'Una receta original de dulce de leche con el toque de café excelso. Nuestro arequipe ofrece una experiencia suave al paladar, especial para repostería y salsa para helados.', '/img/Productos/Arequipe.png', '17', '$13.000'),
    
        //Belleza
        new Producto('Isolo Mascarilla Purificante', 'Enriquecida con antioxidantes y propiedades exfoliantes naturales del café, esta mascarilla ayuda a eliminar impurezas, promover la circulación sanguínea y dejar la piel con un aspecto fresco y radiante.', '/img/Productos/Mascarilla.png', '13', '$45.000'),
        new Producto('Jabón Corporal Tú Aroma', 'Jabón enriquecido con café, conocido por sus propiedades exfoliantes y revitalizantes. Ideal para una experiencia de cuidado personal enriquecida con el aroma del café.', '/img/Productos/Jabón.png', '20', '$10.000'),
        new Producto('Crema Reafirmante "Supréme"', 'Descubre la firmeza y elasticidad con nuestra crema corporal reafirmante de café. Enriquecida con extracto de café, esta crema ayuda a tonificar la piel, reducir la apariencia de la celulitis y mejorar la textura. Disfruta de una piel más suave y tersa con un aroma deliciosamente estimulante.', '/img/Productos/Crema.png', '10', '$60.000'),
        new Producto('Aceite Facial Revitalizante "Esencia Cafetera"', 'Revitaliza tu rutina de cuidado facial con nuestro aceite facial de café. Formulado con aceites naturales y extracto de café, este elixir revitalizante ayuda a hidratar, nutrir y darle un impulso antioxidante a tu piel. Disfruta de una tez radiante y con un brillo saludable.', '/img/Productos/Aceite.png', '21', '$25.000'),
    
        //Artesanías
        new Producto('Vela Aromática', 'Ilumina tus espacios con la suave luz de nuestra vela aromática a base de café. Su fragancia cálida y acogedora te transportará a un rincón acogedor de una cafetería, creando un ambiente relajante y deliciosamente perfumado.', '/img/Productos/Vela.png', '12', '$25.000'),
        new Producto('Aretes ', 'Descubre la elegancia en cada detalle con nuestros aretes hechos a mano con granos de café. Un accesorio único que combina la belleza natural del café con el arte de la joyería, creando una pieza que resalta tu estilo de manera sutil y sofisticada.', '/img/Productos/Aretes.png', '10', '$50.000'),
        new Producto('Escultura Elefante Caff', 'Sumérgete en la magia del arte con nuestra escultura de elefante elaborada completamente con granos de café. Cada pieza es una obra maestra única que captura la esencia y la majestuosidad de estos animales, aportando un toque distintivo y artístico a tu espacio.', '/img/Productos/Escultura.png', '1', '$180.000'),
        new Producto('Kit Siembra de Café', 'Experimenta el ciclo completo del café con nuestro kit de siembra que incluye una matera artesanal elaborada con granos de café reciclados. Cultiva tus propios cafetos y observa cómo crecen en esta matera única, fusionando la pasión por el café con la naturaleza en tu hogar. Ideal para amantes del café y aficionados a la jardinería.', '/img/Productos/Matera.png', '5', '$80.000'),
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

     // Creamos un button que va contener el agregar carrito al clic dado
    let agregarCarrito = document.createElement('button');
     //Aquí se almacena de acuerdo al parametro enviado, va a mostrar "Agregar al carrito"
    agregarCarrito.innerHTML = `<strong> Agregar al Carrito </strong>`;

    //concatenar en el contenedorB, el título, descripción, cantidad, precio
    contenedorTextos.appendChild(tituloImagen);
    contenedorTextos.appendChild(descripcionImagen);
    contenedorTextos.appendChild(cantidadProducto);
    contenedorTextos.appendChild(precioImagen);
    contenedorTextos.appendChild(agregarCarrito);

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

