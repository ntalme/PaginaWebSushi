// VARIABLES CARRITO
let carrito = [];

// AGREGAR EL PRODUCTO AL APRETAR EL BOTON AGREGAR DEL MODAL
function agregarProductoDesdeModal(nombre, precioBase, imagen, event, formId) {
    // Verificar si el evento proviene del modal
    const source = event?.target?.dataset?.source;
    if (source !== 'modal') return;

    // Detener la propagación del evento para evitar conflictos
    event.stopPropagation();

    // Obtener el extra seleccionado y su precio usando el formId específico
    const extraSeleccionado = document.querySelector(`#${formId} input[name="extra"]:checked`);
    let precioExtra = 0;
    let nombreExtra = '';

    // Verificar si se seleccionó un extra
    if (extraSeleccionado) {
        precioExtra = parseInt(extraSeleccionado.value); // Obtener el valor del extra
        nombreExtra = extraSeleccionado.dataset.nombre || extraSeleccionado.nextElementSibling.textContent.trim(); // Obtener el nombre del extra
    }

    // Calcular el precio total con el extra
    const precioTotal = precioBase + precioExtra;

    // Verificar si el mismo producto con el mismo extra ya está en el carrito
    const productoExistente = carrito.find(producto => 
        producto.nombre === nombre && producto.extra === nombreExtra
    );

    if (productoExistente) {
        // Si el producto ya existe, incrementa la cantidad
        productoExistente.cantidad++;
    } else {
        // Si no existe, agrega el producto como una nueva entrada
        carrito.push({
            nombre: nombre,
            precio: precioTotal,
            cantidad: 1,
            imagen: imagen,
            extra: nombreExtra
        });
    }

    actualizarCarrito(); // Actualizar la visualización del carrito
    mostrarCarrito(); // Mostrar el carrito lateral
}

// AGREGAR EL PRODUCTO AL CARRITO AL APRETAR EL BOTON +
function agregarProductoAlCarrito(nombre, precio, imagen) {
    const source = event?.target?.dataset?.source;
    if (source !== 'carta') return;

    // Verificar si el producto ya existe en el carrito sin extras
    const productoExistente = carrito.find(producto => 
        producto.nombre === nombre && producto.extra === ''
    );

    if (productoExistente) {
        // Si el producto ya existe, incrementar la cantidad
        productoExistente.cantidad++;
    } else {
        // Si no existe, agregar el producto como nueva entrada
        carrito.push({
            nombre: nombre,
            precio: precio,
            cantidad: 1,
            imagen: imagen,
            extra: ''
        });
    }

    actualizarCarrito(); // Actualizar la visualización del carrito
    mostrarCarrito(); // Mostrar el carrito lateral
}

// ACTUALIZAR CARRITO
function actualizarCarrito() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalProductos = document.getElementById('cart-total-productos');
    const subtotal = document.getElementById('cart-subtotal');
    const botonContinuar = document.getElementById('continuar-compra');

    // Limpiar el contenedor del carrito
    cartItemsContainer.innerHTML = '';

    // Variables para total de productos y subtotal
    let totalCantidad = 0;
    let totalPrecio = 0;

    // Verificar si el carrito está vacío
    if (carrito.length === 0) {
        // Mostrar el mensaje de carrito vacío
        cartItemsContainer.innerHTML = `
            <p class="empty-message"><strong>¡Arma tu carrito ahora!</strong></p>
            <p class="subtext">Los productos que agregues aparecerán aquí</p>
        `;
        botonContinuar.textContent = 'Ir al Menú';
        botonContinuar.onclick = () => window.location.href = 'carta.html';
    } else {
        // Recorrer el carrito y generar el contenido
        carrito.forEach((producto, index) => {
            totalCantidad += producto.cantidad;
            totalPrecio += producto.precio * producto.cantidad;

            const productoElement = document.createElement('div');
            productoElement.classList.add('carrito-producto', 'd-flex', 'align-items-start', 'mb-3');
            productoElement.innerHTML = `
                <div class="carrito-img me-2">
                    <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 60px; height: 60px; border-radius: 5px;">
                </div>
                <div class="carrito-detalle flex-grow-1">
                    <div class="d-flex justify-content-between">
                        <strong>${producto.nombre}</strong>
                        <span class="carrito-precio">$${producto.precio.toLocaleString('es-CL')}</span>
                    </div>
                    ${producto.extra ? `<p class="carrito-extra">Escoge tu Extra:<br> • ${producto.extra}</p>` : ''}
                    <div class="d-flex align-items-center mt-2">
                        <button class="btn btn-light btn-sm me-1" onclick="modificarCantidad(${index}, -1)">-</button>
                        <span>${producto.cantidad}</span>
                        <button class="btn btn-light btn-sm ms-1" onclick="modificarCantidad(${index}, 1)">+</button>
                        <button class="btn btn-secondary btn-sm ms-3 ms-auto" onclick="editarProducto(${index})">Editar</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(productoElement);
        });

        botonContinuar.textContent = 'Continuar Compra';
        botonContinuar.onclick = () => window.location.href = 'despacho.html';
    }

    totalProductos.textContent = totalCantidad;
    subtotal.textContent = `$${totalPrecio.toLocaleString('es-CL')}`;
}

// FUNCION MODIFICAR CANTIDAD DE PRODUCTO EN EL CARRITO
function modificarCantidad(index, cantidad) {
    if (carrito[index].cantidad + cantidad > 0) {
        carrito[index].cantidad += cantidad;
    } else {
        carrito.splice(index, 1);
    }
    actualizarCarrito(); // Actualizar la visualización del carrito
}

// MOSTRAR U OCULTAR EL CARRITO LATERAL
function mostrarCarrito() {
    document.getElementById('cart-sidebar').style.transform = 'translateX(0)';
}

function ocultarCarrito() {
    document.getElementById('cart-sidebar').style.transform = 'translateX(100%)';
}

// CERRAR EL CARRITO
document.getElementById('close-cart').addEventListener('click', ocultarCarrito);

// ABRIR EL CARRITO AL HACER CLIC EN EL ICONO DEL CARRITO
document.getElementById('cart-icon').addEventListener('click', mostrarCarrito);

// RESTABLECER EL CARRITO
function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
    ocultarCarrito();
}
