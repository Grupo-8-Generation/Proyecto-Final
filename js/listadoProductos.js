
    // Define los productos de café
    var cafeProducts = [
        { name: 'Café 1', imgSrc: 'img/cafe-1.jpg', description: 'Descripción del café 1' },
        { name: 'Café 2', imgSrc: 'img/cafe-2.jpg', description: 'Descripción del café 2' },
        { name: 'Café 3', imgSrc: 'img/cafe-3.jpg', description: 'Descripción del café 3', galeria: "1"},
        // Agrega más productos de café aquí
    ];

    // Función para agregar productos de café al contenedor
    function addCafeProducts() {
        var container = document.getElementById('cafe-products');

        cafeProducts.forEach(function(product) {
            var col = document.createElement('div');
            col.classList.add('col-lg-3');

            var galleryImg = document.createElement('div');
            galleryImg.classList.add('gallery-img');

            var img = document.createElement('img');
            img.classList.add('img-fluid', 'rounded', 'w-100');
            img.src = product.imgSrc;
            img.alt = product.name;

            var galleryOverlay = document.createElement('div');
            galleryOverlay.classList.add('gallery-overlay', 'p-4');
            galleryOverlay.innerHTML = '<h4 class="text-secondary">' + product.name + '</h4><p>' + product.description + '</p>';

            galleryImg.appendChild(img);
            galleryImg.appendChild(galleryOverlay);

            col.appendChild(galleryImg);

            container.appendChild(col);
        });
    }

    // Agrega los productos de café cuando la página cargue
    window.onload = addCafeProducts;
