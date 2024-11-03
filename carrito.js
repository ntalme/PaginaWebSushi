// Abrir y cerrar el carrito
document.getElementById('cart-icon').addEventListener('click', function() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.style.transform = 'translateX(0%)'; // Muestra el carrito
});

document.getElementById('close-cart').addEventListener('click', function() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.style.transform = 'translateX(100%)'; // Oculta el carrito
});

// Array para almacenar los productos en el carrito
let carrito = [];

// Función para abrir el carrito
function abrirCarrito() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.style.transform = 'translateX(0%)'; // Muestra el carrito
}

// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    // Buscar si el producto ya está en el carrito con el mismo nombre y los mismos extras
    const productoExistente = carrito.find(item => 
        item.nombre === producto.nombre && 
        JSON.stringify(item.extras) === JSON.stringify(producto.extras)
    );

    if (productoExistente) {
        // Incrementa la cantidad si el producto ya existe con los mismos extras
        productoExistente.cantidad += producto.cantidad;
    } else {
        // Si no existe, añade el nuevo producto al carrito
        carrito.push(producto);
    }

    actualizarCarrito(); // Actualiza la vista del carrito
}

// Función para actualizar el contenido del carrito en el sidebar
function actualizarCarrito() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Limpiar el contenido anterior

    if (carrito.length === 0) {
        cartItems.innerHTML = `
            <p><strong>¡Arma tu carrito ahora!</strong></p>
            <p>Los productos que agregues aparecerán aquí</p>
        `;
    } else {
        carrito.forEach(item => {
            const extrasHTML = item.extras.length > 0 ? `<small>Extras: ${item.extras.join(', ')}</small>` : '';
            
            cartItems.innerHTML += `
                <div class="cart-item d-flex justify-content-between align-items-center">
                    <span>${item.nombre}</span>
                    ${extrasHTML}
                    <div class="d-flex align-items-center">
                        <span class="mx-2">$${(item.precio * item.cantidad).toLocaleString('es-CL')}</span>
                    </div>
                </div>
            `;
        });

        const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
        document.getElementById('total-amount').innerHTML = `$${total.toLocaleString('es-CL', { minimumFractionDigits: 0 })}`;
        document.getElementById('go-to-menu').innerText = 'Continuar';
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    document.getElementById('go-to-menu').onclick = function() {
        const botonTexto = this.innerText;
        if (botonTexto === 'Ir al menú') {
            window.location.href = 'carta.html'; 
        } else if (botonTexto === 'Continuar') {
            window.location.href = 'pago.html'; 
        }
    };
}

// Función para incrementar cantidad de producto
function incrementarCantidad(nombre) {
    const producto = carrito.find(item => item.nombre === nombre);
    if (producto) {
        producto.cantidad += 1;
        actualizarCarrito();
    }
}

// Función para disminuir cantidad de producto
function disminuirCantidad(nombre) {
    const producto = carrito.find(item => item.nombre === nombre);
    if (producto && producto.cantidad > 1) {
        producto.cantidad -= 1;
    } else {
        carrito = carrito.filter(item => item.nombre !== nombre);
    }
    actualizarCarrito();
}

// Función para abrir el modal de edición
function abrirModal(nombreProducto) {
    const productoModalMap = {
        'Promo 1': 'promo1Modal',
        'Promo 2': 'promo2Modal',
        'Promo 3': 'promo3Modal',
        'Promo 4': 'promo4Modal',
        'Gohan Especial': 'gohan1Modal',
    };
    
    const modalId = productoModalMap[nombreProducto];
    
    if (modalId) {
        const modalElement = document.getElementById(modalId);
        if (modalElement) {
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
        } else {
            console.error(`No se encontró un modal con el id: ${modalId}`);
        }
    } else {
        console.error(`No se encontró un modal para el producto: ${nombreProducto}`);
    }
}

//SOLO FUNCIONA PARA LA PROMO 1 Y LOS BOTONES + Y - NO FUNCIONAN CUANDO HAY EXTRAS
// Evento para los botones de compra
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const producto = {
            nombre: this.parentElement.querySelector('.card-title').innerText,
            precio: parseFloat(this.parentElement.querySelector('.new-price').innerText.replace(/\./g, '').replace('$', '')), // Asegúrate de que no haya puntos
            imagen: this.parentElement.querySelector('img').src // Captura la imagen del producto
        };
        
        // Agregar el producto con una cantidad inicial de 1 al carrito
        agregarAlCarrito({ ...producto, cantidad: 1 });
    });
});

// Evento para el botón "Agregar" en el modal
document.getElementById('finalPrice').addEventListener('click', function() {
    const cantidad = parseInt(document.getElementById('quantity').innerText);
    const productoNombre = document.getElementById('promo1ModalLabel').innerText; // Obtiene el nombre del producto del modal
    const precioBase = 16990; // Precio base

    // Obtener el precio de los extras seleccionados
    const extrasSeleccionados = document.querySelectorAll('input[name="extra"]:checked');
    const extras = Array.from(extrasSeleccionados).map(extra => extra.labels[0].innerText.split('\n')[0].trim()); // Captura los nombres de los extras

    const producto = {
        nombre: productoNombre,
        precio: precioBase + (extrasSeleccionados.length * 1000), // Sumar el precio base con el precio de los extras
        imagen: 'imagenes/promo1.webp', // Asegúrate de que la imagen esté disponible
        cantidad: cantidad,
        extras: extras // Guarda los extras en el producto
    };

    agregarAlCarrito(producto);
});
