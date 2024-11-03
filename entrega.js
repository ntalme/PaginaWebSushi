// -------------- DELIVEY Y RETIRO -------------- 

// SELECCIONAR OPCION DELIVEY O ENTREGA (PRINCIPAL.HTML)
function seleccionarOpcion(opcion) {
    // Guardar la opción seleccionada en localStorage
    localStorage.setItem('opcionEntrega', opcion);
    // Redirigir a carta.html con el parámetro para abrir el carrito
    window.location.href = 'carta.html?abrirCarrito=true';
}

// MOSTRAR EL BOTON SEGUN TIPO DE ENTREGA (DELIVERY O RETIRO)
function mostrarBotonCarrito() {
    const contenedorBoton = document.getElementById('boton-entrega');
    const opcionEntrega = localStorage.getItem('opcionEntrega');

    // Limpiar el contenedor del botón
    contenedorBoton.innerHTML = '';

    // Crear el botón según la opción seleccionada
    if (opcionEntrega === 'delivery') {
        contenedorBoton.innerHTML = `
            <button class="btn btn-entrega d-flex align-items-center">
                <i class="bi bi-bicycle me-2"></i> Ingresar dirección
            </button>
        `;
    } else if (opcionEntrega === 'retiro') {
        contenedorBoton.innerHTML = `
            <button class="btn btn-entrega d-flex align-items-center">
                <i class="bi bi-bag me-2"></i> Ingresar dirección
            </button>
        `;
    }
}

// VERIFICAR QUE SE HAYA ABIERTO CARTA.HTML
function verificarParametroAbrirCarrito() {
    const urlParams = new URLSearchParams(window.location.search);
    const abrirCarrito = urlParams.get('abrirCarrito');

    if (abrirCarrito === 'true') {
        document.getElementById('cart-sidebar').style.transform = 'translateX(0)'; // Mostrar el carrito
        mostrarBotonCarrito(); // Mostrar el botón correspondiente
    }
}

// SE ABRE EL CARRITO AL ABRIR LA PAGINA
document.addEventListener('DOMContentLoaded', verificarParametroAbrirCarrito);

// -------------- ABRIR MODAL INICIAL -------------- 
function abrirModalEntrega() {
    document.getElementById('modal-entrega').style.display = 'flex';
}
function cerrarModal() {
    document.getElementById('modal-entrega').style.display = 'none';
}

// BOTON INGRESAR DIRECCION
document.addEventListener('DOMContentLoaded', function() {
    const botonDireccion = document.querySelector('.btn-entrega');
    if (botonDireccion) {
        botonDireccion.addEventListener('click', abrirModalEntrega);
    }
});

// MOSTRAR OPCION DELIVERY
function mostrarDelivery() {
    const contenidoModal = document.getElementById('contenido-modal');
    contenidoModal.innerHTML = `
        <button class="btn btn-ingresar-direccion mt-3">Ingresar dirección</button>
    `;

    // Cambiar el estado de los botones
    document.querySelector('.btn-delivery').classList.add('active');
    document.querySelector('.btn-retirar').classList.remove('active');
}

// Variable para almacenar la opción seleccionada
let opcionRetiroSeleccionada = '';

// CUANDO SE APRIETE RETIRO
function mostrarRetiro() {
    const contenidoModal = document.getElementById('contenido-modal');
    contenidoModal.innerHTML = `
        <div class="opcion-retiro">
            <input type="radio" name="retiro" id="retiro-maipu" value="Mar de Chile 516, Maipú">
            <label for="retiro-maipu">Mar de Chile 516, Maipú</label>
        </div>
    `;

    // Cambiar el estado de los botones
    document.querySelector('.btn-retirar').classList.add('active');
    document.querySelector('.btn-delivery').classList.remove('active');

    // Asignar evento para seleccionar la opción de retiro
    document.getElementById('retiro-maipu').addEventListener('change', function() {
        opcionRetiroSeleccionada = this.value;
    });
}

// CONFIRMAR LA OPCION DE RETIRO Y ACTUALIZAR EL CARRITO
function confirmarRetiro() {
    if (opcionRetiroSeleccionada) {
        // Cambiar el texto del botón en el carrito
        const botonEntrega = document.querySelector('.btn-entrega');
        if (botonEntrega) {
            botonEntrega.innerHTML = `
                <i class="bi bi-bag me-2"></i> Retirar en Local Maipú
            `;
        }
        // Cerrar el modal
        cerrarModal();
    } else {
        alert('Por favor, selecciona una opción de retiro antes de confirmar.');
    }
}
// Inicializar con el contenido de Delivery al cargar la página
document.addEventListener('DOMContentLoaded', mostrarDelivery);