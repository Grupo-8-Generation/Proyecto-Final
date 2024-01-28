//Clase para la creación de objetos
export class Producto
{
    //Constructor principal para que se pueda importar a la clase modal
    constructor(nombre, descripcion, imagen, cantidad, precio)
    {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    productos = [
        
        //Todos los productos(?)
        new Producto('Product 1', 'Descripción del producto 1', 'img/gallery-1.jpg', null, null),
        new Producto('Product 2', 'Descripción del producto 2', 'img/gallery-2.jpg', null, null),
    
        //Cafés
        new Producto('Café Mesa de los Santos', 'Granos de café de alta calidad, tipo arabica, listos para moler y preparar la taza perfecta de café en casa. Disfruta de la frescura y el sabor auténtico.', 'Proyecto-Final/img/Productos/Mesa.png', '20', '$25.000'),
        new Producto('Café Premium "Arábica San Alberto"', 'Disfruta de la elegancia y el sabor refinado. Proveniente de las mejores cosechas, cada grano es seleccionado con cuidado para ofrecerte una experiencia única con notas florales, cuerpo sedoso y un toque de avellana.', 'Proyecto-Final/img/Productos/Arabica.png', '15', '$35.000'),
        new Producto('Mezcla Intensa "Q.Coffee"', 'Sumérgete en la intensidad de nuestro café. Esta mezcla única ofrece un perfil de sabor audaz y fuerte, con notas de cacao y un toque ahumado. Ideal para aquellos que buscan una experiencia de café potente y llena de carácter.', 'Proyecto-Final/img/Productos/Q.png', '12', '$30.000'),
        new Producto('Café Descafeinado "Aroma De Occidente"', 'Experimenta la tranquilidad con nuestro café descafeinado. Una mezcla suave y equilibrada, perfecta para disfrutar en cualquier momento del día. Conserva el delicioso sabor del café sin cafeína, con notas de almendra y un toque sutil de chocolate.', 'Proyecto-Final/img/Productos/Aroma.png', '7', '$45.000'),
    
        //Accesorios
        new Producto('Aeropress (4 Tazas)', 'Innovadora herramienta para preparar café que combina la simplicidad y la calidad. Su diseño portátil la hace perfecta para llevarla contigo y disfrutar de tu café favorito en cualquier lugar.', 'Proyecto-Final/img/Productos/Aeropress.png', '4', '$160.000'),
        new Producto('Mini Capuchinera', 'Una máquina compacta para preparar diferentes tipos de café. Ofrece la comodidad de disfrutar de un café de calidad de barista sin salir de casa.', 'Proyecto-Final/img/Productos/Capuccinera.png', '2', '$550.000'),
        new Producto('Chemex Clásica (6 Tazas)', 'Elegante cafetera de vidrio para preparar café mediante el método de goteo. Su diseño único y la calidad del café que produce la convierten en una opción popular entre los amantes del café.', 'Proyecto-Final/img/Productos/Chemex.png', '3', '$320.000'),
        new Producto('Termo Vaso', 'El vaso termo es un recipiente aislado que mantiene las bebidas calientes o frías por más tiempo. Ideal para llevar tu café favorito contigo mientras te desplazas.', 'Proyecto-Final/img/Productos/Vaso.png', '40', '$30.000'),
    
        //Alimentos
        new Producto('Macarrones de Café (Caja x12)', 'Deliciosos macarrones con sabor a café, una combinación perfecta de textura suave y el distintivo aroma del café.', 'Proyecto-Final/img/Productos/Macarrones.png','20', '$15.000'),
        new Producto('Frappuccino Mocha', 'Bebida de café lista para llevar, perfecta para aquellos momentos en los que necesitas tu dosis de cafeína de manera rápida y conveniente.', 'Proyecto-Final/img/Productos/Frappuccino.png', '15', '$8.000'),
        new Producto('Licor de café Coloma', 'Un licor exquisito con el distintivo sabor del café. Perfecto para cócteles, postres o simplemente disfrutarlo solo.', 'Proyecto-Final/img/Productos/Licor.png', '5', '$75.000'),
        new Producto('Arequipe de café', 'Una receta original de dulce de leche con el toque de café excelso. Nuestro arequipe ofrece una experiencia suave al paladar, especial para repostería y salsa para helados.', 'Proyecto-Final/img/Productos/Arequipe.png', '17', '$13.000'),
    
        //Belleza
        new Producto('Isolo Mascarilla Purificante', 'Enriquecida con antioxidantes y propiedades exfoliantes naturales del café, esta mascarilla ayuda a eliminar impurezas, promover la circulación sanguínea y dejar la piel con un aspecto fresco y radiante.', 'Proyecto-Final/img/Productos/Mascarilla.png', '13', '$45.000'),
        new Producto('Jabón Corporal Tú Aroma', 'Jabón enriquecido con café, conocido por sus propiedades exfoliantes y revitalizantes. Ideal para una experiencia de cuidado personal enriquecida con el aroma del café.', 'Proyecto-Final/img/Productos/Jabón.png', '20', '$10.000'),
        new Producto('Crema Reafirmante "Supréme"', 'Descubre la firmeza y elasticidad con nuestra crema corporal reafirmante de café. Enriquecida con extracto de café, esta crema ayuda a tonificar la piel, reducir la apariencia de la celulitis y mejorar la textura. Disfruta de una piel más suave y tersa con un aroma deliciosamente estimulante.', 'Proyecto-Final/img/Productos/Crema.png', '10', '$60.000'),
        new Producto('Aceite Facial Revitalizante "Esencia Cafetera"', 'Revitaliza tu rutina de cuidado facial con nuestro aceite facial de café. Formulado con aceites naturales y extracto de café, este elixir revitalizante ayuda a hidratar, nutrir y darle un impulso antioxidante a tu piel. Disfruta de una tez radiante y con un brillo saludable.', 'Proyecto-Final/img/Productos/Aceite.png', '21', '$25.000'),
    
        //Artesanías
        new Producto('Vela Aromática', 'Ilumina tus espacios con la suave luz de nuestra vela aromática a base de café. Su fragancia cálida y acogedora te transportará a un rincón acogedor de una cafetería, creando un ambiente relajante y deliciosamente perfumado.', 'Proyecto-Final/img/Productos/Vela.png', '12', '$25.000'),
        new Producto('Aretes ', 'Descubre la elegancia en cada detalle con nuestros aretes hechos a mano con granos de café. Un accesorio único que combina la belleza natural del café con el arte de la joyería, creando una pieza que resalta tu estilo de manera sutil y sofisticada.', 'Proyecto-Final/img/Productos/Aretes.png', '10', '$50.000'),
        new Producto('Escultura Elefante Caff', 'Sumérgete en la magia del arte con nuestra escultura de elefante elaborada completamente con granos de café. Cada pieza es una obra maestra única que captura la esencia y la majestuosidad de estos animales, aportando un toque distintivo y artístico a tu espacio.', 'Proyecto-Final/img/Productos/Escultura.png', '1', '$180.000'),
        new Producto('Kit Siembra de Café', 'Experimenta el ciclo completo del café con nuestro kit de siembra que incluye una matera artesanal elaborada con granos de café reciclados. Cultiva tus propios cafetos y observa cómo crecen en esta matera única, fusionando la pasión por el café con la naturaleza en tu hogar. Ideal para amantes del café y aficionados a la jardinería.', 'Proyecto-Final/img/Productos/Matera.png', '5', '$80.000'),
    ];
}
    // Acceso al primer producto en la categoría de Cafés
    console.log(cafeProducts[2]);