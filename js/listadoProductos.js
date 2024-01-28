// Define los productos de café por galería
var cafeProducts = {
    TodosLosProductos: [
        { name: 'Product 1', imgSrc: 'img/gallery-1.jpg', description: 'Descripción del producto 1' },
        { name: 'Product 2', imgSrc: 'img/gallery-2.jpg', description: 'Descripción del producto 2' },
        // Agrega más productos de la galería 1 aquí
    ],
    Cafés: [
        { 
            name: 'Café Mesa de los Santos',
            imgSrc: 'Proyecto-Final/img/Productos/Mesa.png',
            description: 'Granos de café de alta calidad, tipo arabica, listos para moler y preparar la taza perfecta de café en casa. Disfruta de la frescura y el sabor auténtico.',
            price: '$25.000'
        },
        { 
            name: 'Café Premium "Arábica San Alberto"', 
            imgSrc: 'Proyecto-Final/img/Productos/Arabica.png', 
            description: 'Disfruta de la elegancia y el sabor refinado. Proveniente de las mejores cosechas, cada grano es seleccionado con cuidado para ofrecerte una experiencia única con notas florales, cuerpo sedoso y un toque de avellana.', 
            price: '$35.000' 
        },
        { 
            name: 'Mezcla Intensa "Q.Coffee"', 
            imgSrc: 'Proyecto-Final/img/Productos/Q.png', 
            description: 'Sumérgete en la intensidad de nuestro café. Esta mezcla única ofrece un perfil de sabor audaz y fuerte, con notas de cacao y un toque ahumado. Ideal para aquellos que buscan una experiencia de café potente y llena de carácter.', 
            price: '$30.000' 
        },
        { 
            name: 'Café Descafeinado "Aroma De Occidente"', 
            imgSrc: 'Proyecto-Final/img/Productos/Aroma.png',
            description: 'Experimenta la tranquilidad con nuestro café descafeinado. Una mezcla suave y equilibrada, perfecta para disfrutar en cualquier momento del día. Conserva el delicioso sabor del café sin cafeína, con notas de almendra y un toque sutil de chocolate.', 
            price: '$45.000' 
        }

        // Agrega más productos de la galería 2 aquí
    ],

    Accesorios: [
        { 
            name: 'Aeropress (4 Tazas)', 
            imgSrc: 'Proyecto-Final/img/Productos/Aeropress.png',
            description: 'Innovadora herramienta para preparar café que combina la simplicidad y la calidad. Su diseño portátil la hace perfecta para llevarla contigo y disfrutar de tu café favorito en cualquier lugar.',
            price: '$160.000'
        },
        { 
            name: 'Mini Capuchinera',
            imgSrc: 'Proyecto-Final/img/Productos/Capuccinera.png',
            description: 'Una máquina compacta para preparar diferentes tipos de café. Ofrece la comodidad de disfrutar de un café de calidad de barista sin salir de casa.',
            price: '$550.000'
        },
        { 
            name: 'Chemex Clásica (6 Tazas)',
            imgSrc: 'Proyecto-Final/img/Productos/Chemex.png',
            description: 'Elegante cafetera de vidrio para preparar café mediante el método de goteo. Su diseño único y la calidad del café que produce la convierten en una opción popular entre los amantes del café.',
            price: '$320.000'
        },
        { 
            name: 'Vaso Térmico',
            imgSrc: 'Proyecto-Final/img/Productos/Vaso.png',
            description: 'El vaso termo es un recipiente aislado que mantiene las bebidas calientes o frías por más tiempo. Ideal para llevar tu café favorito contigo mientras te desplazas.',
            price: '$30.000'
        },
        // Agrega más productos de la galería 2 aquí
    ],

    Alimentos: [
        { 
            name: 'Macarrones de Café (Caja x12)',
            imgSrc: 'Proyecto-Final/img/Productos/Macarrones.png',
            description: 'Deliciosos macarrones con sabor a café, una combinación perfecta de textura suave y el distintivo aroma del café.',
            price: '$15.000'
        },
        { 
            name: 'Frappuccino Mocha',
            imgSrc: 'Proyecto-Final/img/Productos/Frappuccino.png',
            description: 'Bebida de café lista para llevar, perfecta para aquellos momentos en los que necesitas tu dosis de cafeína de manera rápida y conveniente.',
            price: '$8.000'
        },
        { 
            name: 'Licor de café Coloma',
            imgSrc: 'Proyecto-Final/img/Productos/Licor.png',
            description: 'Un licor exquisito con el distintivo sabor del café. Perfecto para cócteles, postres o simplemente disfrutarlo solo.',
            price: '$75.000'
        },
        { 
            name: 'Arequipe de café',
            imgSrc: 'Proyecto-Final/img/Productos/Arequipe.png',
            description: 'Una receta original de dulce de leche con el toque de café excelso. Nuestro arequipe ofrece una experiencia suave al paladar, especial para repostería y salsa para helados. ',
            price: '$13.000'
        },
        // Agrega más productos de la galería 3 aquí
        
    ],

    Belleza: [
        { 
            name: 'Isolo Mascarilla Purificante', 
            imgSrc: 'Proyecto-Final/img/Productos/Mascarilla.png',
            description: 'Enriquecida con antioxidantes y propiedades exfoliantes naturales del café, esta mascarilla ayuda a eliminar impurezas, promover la circulación sanguínea y dejar la piel con un aspecto fresco y radiante.',
            price: '$45.000'
        },
        { 
            name: 'Jabón Corporal Tú Aroma', 
            imgSrc: 'Proyecto-Final/img/Productos/Jabón.png',
            description: 'Jabón enriquecido con café, conocido por sus propiedades exfoliantes y revitalizantes. Ideal para una experiencia de cuidado personal enriquecida con el aroma del café.',
            price: '$10.000'
        },
        { 
            name: 'Crema Reafirmante "Supréme"', 
            imgSrc: 'Proyecto-Final/img/Productos/Crema.png',
            description: 'Descubre la firmeza y elasticidad con nuestra crema corporal reafirmante de café. Enriquecida con extracto de café, esta crema ayuda a tonificar la piel, reducir la apariencia de la celulitis y mejorar la textura. Disfruta de una piel más suave y tersa con un aroma deliciosamente estimulante.', 
            price: '$60.000' 
        },
        { 
            name: 'Aceite Facial Revitalizante "Esencia Cafetera"', 
            imgSrc: 'Proyecto-Final/img/Productos/Aceite.png',
            description: 'Revitaliza tu rutina de cuidado facial con nuestro aceite facial de café. Formulado con aceites naturales y extracto de café, este elixir revitalizante ayuda a hidratar, nutrir y darle un impulso antioxidante a tu piel. Disfruta de una tez radiante y con un brillo saludable.', 
            price: '$25.000'
        }
        // Agrega más productos de la galería 3 aquí
    ],

    Artesanías: [
        {
            name: 'Vela Aromática',
            imgSrc: 'Proyecto-Final/img/Productos/Vela.png',
            description: 'Ilumina tus espacios con la suave luz de nuestra vela aromática a base de café. Su fragancia cálida y acogedora te transportará a un rincón acogedor de una cafetería, creando un ambiente relajante y deliciosamente perfumado.',
            price: '$25.000'
          },
          {
            name: 'Aretes ',
            imgSrc: 'Proyecto-Final/img/Productos/Aretes.png',
            description: 'Descubre la elegancia en cada detalle con nuestros aretes hechos a mano con granos de café. Un accesorio único que combina la belleza natural del café con el arte de la joyería, creando una pieza que resalta tu estilo de manera sutil y sofisticada.',
            price: '$50.000'
          },
          {
            name: 'Escultura Elefante Caff',
            imgSrc: 'Proyecto-Final/img/Productos/Escultura.png',
            description: 'Sumérgete en la magia del arte con nuestra escultura de elefante elaborada completamente con granos de café. Cada pieza es una obra maestra única que captura la esencia y la majestuosidad de estos animales, aportando un toque distintivo y artístico a tu espacio.',
            price: '$180.000'
          },
          {
            name: 'Kit Siembra de Café',
            imgSrc: 'Proyecto-Final/img/Productos/Matera.png',
            description: 'Experimenta el ciclo completo del café con nuestro kit de siembra que incluye una matera artesanal elaborada con granos de café reciclados. Cultiva tus propios cafetos y observa cómo crecen en esta matera única, fusionando la pasión por el café con la naturaleza en tu hogar. Ideal para amantes del café y aficionados a la jardinería.',
            price: '$80.000'
          },
          
        // Agrega más productos de la galería 3 aquí
        
    ]
};

// Función para agregar productos de café al contenedor
function addCafeProducts(galleryId) {
    // Obtener el contenedor de productos de café
    var container = document.getElementById('cafe-products-container');

    // Obtener la galería actual
    var galleryProducts = cafeProducts['gallery' + galleryId];

    // Limpiar el contenedor antes de agregar los nuevos productos
    container.innerHTML = '';

    // Agregar los productos de la galería actual al contenedor
    galleryProducts.forEach(function(product) {
        var col = document.createElement('div');
        col.classList.add('col-lg-3');

        var galleryImg = document.createElement('div');
        galleryImg.classList.add('gallery-img', 'position-relative');

        var img = document.createElement('img');
        img.classList.add('img-fluid', 'rounded', 'w-100');
        img.src = product.imgSrc;
        img.alt = product.name;

        var galleryOverlay = document.createElement('div');
        galleryOverlay.classList.add('gallery-overlay', 'p-4');
        galleryOverlay.innerHTML = '<h4 class="text-secondary">' + product.name + '</h4><p>' + product.description + '</p>';

        var searchIcon = document.createElement('div');
        searchIcon.classList.add('search-icon', 'text-center', 'p-3');
        var searchLink = document.createElement('a');
        searchLink.href = product.imgSrc;
        searchLink.setAttribute('data-lightbox', 'gallery-' + galleryId);
        searchLink.classList.add('my-auto');
        var searchIconElement = document.createElement('i');
        searchIconElement.classList.add('fas', 'fa-search-plus', 'btn-primary', 'btn-primary-outline-0', 'rounded-circle', 'p-3');

        searchLink.appendChild(searchIconElement);
        searchIcon.appendChild(searchLink);

        galleryImg.appendChild(img);
        galleryImg.appendChild(galleryOverlay);
        galleryImg.appendChild(searchIcon);

        col.appendChild(galleryImg);

        container.appendChild(col);
    });
}

// Detectar el cambio de pestaña y agregar los productos correspondientes
document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('.nav-link');
    
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            var galleryId = this.getAttribute('data-gallery-id');
            addCafeProducts(galleryId);
        });
    });
});

