// PROMO 1
let basePrice = 16990; // Precio base 
let quantity = 1; // Cantidad inicial de productos
let selectedExtra = null; // Variable para guardar el extra seleccionado
const priceDisplay = document.getElementById('finalPrice'); // Elemento donde se mostrará el precio total

// Función para actualizar el precio total
function updateTotal() {
    // Obtiene el precio del extra seleccionado, si existe
    const extraPrice = selectedExtra ? parseInt(selectedExtra.value) : 0;
    // Calcula el precio total multiplicando el precio base más el extra por la cantidad
    const totalPrice = (basePrice + extraPrice) * quantity;
    // Actualiza el contenido del elemento priceDisplay con el precio formateado
    priceDisplay.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

// Botón para aumentar la cantidad
document.querySelector('.btn-mas').addEventListener('click', () => {
    quantity++; // Aumenta la cantidad
    document.getElementById('quantity').textContent = quantity; // Actualiza el texto que muestra la cantidad
    updateTotal(); // Llama a la función para actualizar el precio total
});

// Botón para disminuir la cantidad
document.querySelector('.btn-menos').addEventListener('click', () => {
    if (quantity > 1) { // Asegura que la cantidad no sea menor que 1
        quantity--; // Disminuye la cantidad
        document.getElementById('quantity').textContent = quantity; // Actualiza el texto que muestra la cantidad
        updateTotal(); // Llama a la función para actualizar el precio total
    }
});

// Añadir un listener para los cambios en los extras
const extrasForm = document.getElementById('extrasForm'); // Elemento del formulario de extras
extrasForm.addEventListener('click', (event) => {
    if (event.target.name === 'extra') { // Verifica si se ha seleccionado un extra
        if (selectedExtra === event.target) { // Si se selecciona el mismo extra, lo desmarca
            selectedExtra.checked = false;
            selectedExtra = null; // Reinicia la selección
        } else {
            // Selecciona el nuevo extra
            selectedExtra = event.target;
        }
        updateTotal(); // Llama a la función para actualizar el precio total
    }
});
function agregarProductoAlCarrito(nombre, basePrice, cantidad, extra) {
    const producto = {
        nombre: nombre,
        precio: basePrice,
        cantidad: cantidad,
        extras: extra ? [extra] : [], // Si hay un extra seleccionado, se añade en el array
    };

    agregarAlCarrito(producto); // Llama a la función del carrito.js para agregar el producto
}
// Ejemplo de cómo se usará en un modal específico
document.getElementById('finalPrice').addEventListener('click', () => {
    const nombreProducto = 'Promo 1'; // El nombre del producto
    const extraSeleccionado = selectedExtra ? selectedExtra.value : null;
    agregarProductoAlCarrito(nombreProducto, basePrice, quantity, extraSeleccionado);
});

// PROMO 2
let basePrice2 = 16990; // Precio base
let quantity2 = 1; // Cantidad inicial 
let selectedExtra2 = null;
const priceDisplay2 = document.getElementById('finalPrice2'); 

// Función para actualizar el precio total en promo 2
function updateTotal2() {
    const extraPrice = selectedExtra2 ? parseInt(selectedExtra2.value) : 0;
    const totalPrice = (basePrice2 + extraPrice) * quantity2;
    priceDisplay2.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

// Botón para aumentar la cantidad 
document.querySelectorAll('#promo2Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity2++;
        document.getElementById('quantity2').textContent = quantity2;
        updateTotal2();
    });
});

// Botón para disminuir la cantidad 
document.querySelectorAll('#promo2Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity2 > 1) {
            quantity2--;
            document.getElementById('quantity2').textContent = quantity2;
            updateTotal2();
        }
    });
});

// Listener para los cambios en los extras 
const extrasForm2 = document.getElementById('extrasForm2');
extrasForm2.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra2 === event.target) {
            selectedExtra2.checked = false;
            selectedExtra2 = null;
        } else {
            selectedExtra2 = event.target;
        }
        updateTotal2();
    }
});

// PROMO 3
let basePrice3 = 21990 // Precio base
let quantity3 = 1; // Cantidad inicial
let selectedExtra3 = null; 
const priceDisplay3 = document.getElementById('finalPrice3'); 

// Función para actualizar el precio total
function updateTotal3() {
    const extraPrice = selectedExtra3 ? parseInt(selectedExtra3.value) : 0;
    const totalPrice = (basePrice3 + extraPrice) * quantity3;
    priceDisplay3.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

// Botón para aumentar la cantidad 
document.querySelectorAll('#promo3Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity3++;
        document.getElementById('quantity3').textContent = quantity3;
        updateTotal3();
    });
});

// Botón para disminuir la cantidad 
document.querySelectorAll('#promo3Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity3 > 1) {
            quantity3--;
            document.getElementById('quantity3').textContent = quantity3;
            updateTotal3();
        }
    });
});

// Listener para los cambios en los extras 
const extrasForm3 = document.getElementById('extrasForm3');
extrasForm3.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra3 === event.target) {
            selectedExtra3.checked = false;
            selectedExtra3 = null;
        } else {
            selectedExtra3 = event.target;
        }
        updateTotal3();
    }
});

// PROMO 4
let basePrice4 = 17990 // Precio base
let quantity4 = 1; // Cantidad inicial 
let selectedExtra4 = null; 
const priceDisplay4 = document.getElementById('finalPrice4'); 

// Función para actualizar el precio total 
function updateTotal4() {
    const extraPrice = selectedExtra4 ? parseInt(selectedExtra4.value) : 0;
    const totalPrice = (basePrice4 + extraPrice) * quantity4;
    priceDisplay4.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

// Botón para aumentar la cantidad 
document.querySelectorAll('#promo4Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity4++;
        document.getElementById('quantity4').textContent = quantity4;
        updateTotal4();
    });
});

// Botón para disminuir la cantidad 
document.querySelectorAll('#promo4Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity4 > 1) {
            quantity4--;
            document.getElementById('quantity4').textContent = quantity4;
            updateTotal4();
        }
    });
});

// Listener para los cambios en los extras 
const extrasForm4 = document.getElementById('extrasForm4');
extrasForm4.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra4=== event.target) {
            selectedExtra4.checked = false;
            selectedExtra4 = null;
        } else {
            selectedExtra4 = event.target;
        }
        updateTotal4();
    }
});

//GOHAN 1
let basePrice5 = 8800; // Precio base 
let quantity5 = 1; // Cantidad inicial 
let selectedExtra5 = null; 
const priceDisplay5 = document.getElementById('finalPrice5'); 

// Función para actualizar el precio total
function updateTotal5() {
    const extraPrice = selectedExtra5 ? parseInt(selectedExtra5.value) : 0;
    const totalPrice = (basePrice5 + extraPrice) * quantity5;
    priceDisplay5.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

// Botón para aumentar la cantidad 
document.querySelectorAll('#gohan1Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity5++;
        document.getElementById('quantity5').textContent = quantity5;
        updateTotal5();
    });
});
//// Botón para disminuir la cantidad 
document.querySelectorAll('#gohan1Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity5 > 1) {
            quantity5--;
            document.getElementById('quantity5').textContent = quantity5;
            updateTotal5();
        }
    });
});

// Listener para los cambios en los extras 
const extrasForm5 = document.getElementById('extrasForm5');
extrasForm5.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra5 === event.target) {
            selectedExtra5.checked = false;
            selectedExtra5 = null;
        } else {
            selectedExtra5 = event.target;
        }
        updateTotal5();
    }
});

//GOHAN 2
let basePrice6 = 7800; // Precio base 
let quantity6 = 1; // Cantidad inicial 
let selectedExtra6 = null;
const priceDisplay6 = document.getElementById('finalPrice6');

// Función para actualizar el precio total 
function updateTotal6() {
    const extraPrice = selectedExtra6 ? parseInt(selectedExtra6.value) : 0;
    const totalPrice = (basePrice6 + extraPrice) * quantity6;
    priceDisplay6.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

// Botón para aumentar la cantidad 
document.querySelectorAll('#gohan2Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity6++;
        document.getElementById('quantity6').textContent = quantity6;
        updateTotal6();
    });
});

// Botón para disminuir la cantidad 
document.querySelectorAll('#gohan2Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity6 > 1) {
            quantity6--;
            document.getElementById('quantity6').textContent = quantity6;
            updateTotal6();
        }
    });
});

// Listener para los cambios en los extras
const extrasForm6 = document.getElementById('extrasForm6');
extrasForm6.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra6 === event.target) {
            selectedExtra6.checked = false;
            selectedExtra6 = null;
        } else {
            selectedExtra6 = event.target;
        }
        updateTotal6();
    }
});

//GOHAN 3
let basePrice7 = 5800; // Precio base
let quantity7 = 1; // Cantidad inicial 
let selectedExtra7 = null;
const priceDisplay7 = document.getElementById('finalPrice7');

// Función para actualizar el precio total 
function updateTotal7() {
    const extraPrice = selectedExtra7 ? parseInt(selectedExtra7.value) : 0;
    const totalPrice = (basePrice7 + extraPrice) * quantity7;
    priceDisplay7.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

// Funciones para manejar la cantidad 
document.querySelectorAll('#gohan3Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity7++;
        document.getElementById('quantity7').textContent = quantity7;
        updateTotal7();
    });
});

document.querySelectorAll('#gohan3Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity7 > 1) {
            quantity7--;
            document.getElementById('quantity7').textContent = quantity7;
            updateTotal7();
        }
    });
});

// Listener para los cambios en los extras 
const extrasForm7 = document.getElementById('extrasForm7');
extrasForm7.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra7 === event.target) {
            selectedExtra7.checked = false;
            selectedExtra7 = null;
        } else {
            selectedExtra7 = event.target;
        }
        updateTotal7();
    }
});

//GOHAN 4
let basePrice8 = 12990; // Precio base 
let quantity8 = 1; // Cantidad inicial 
let selectedExtra8 = null; // Para guardar el extra seleccionado
const priceDisplay8 = document.getElementById('finalPrice8'); 

// Función para actualizar el precio total 
function updateTotal8() {
    const extraPrice = selectedExtra8 ? parseInt(selectedExtra8.value) : 0;
    const totalPrice = (basePrice8 + extraPrice) * quantity8;
    priceDisplay8.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

// Funciones para manejar la cantidad
document.querySelectorAll('#gohan4Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity8++;
        document.getElementById('quantity8').textContent = quantity8;
        updateTotal8();
    });
});

document.querySelectorAll('#gohan4Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity8 > 1) {
            quantity8--;
            document.getElementById('quantity8').textContent = quantity8;
            updateTotal8();
        }
    });
});

// Listener para los cambios en los extras 
const extrasForm8 = document.getElementById('extrasForm8');
extrasForm8.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra8 === event.target) {
            selectedExtra8.checked = false;
            selectedExtra8 = null;
        } else {
            selectedExtra8 = event.target;
        }
        updateTotal8();
    }
});

// TEMPURA 1
let basePrice9 = 5800; // Precio base 
let quantity9 = 1; // Cantidad inicial 
let selectedExtra9 = null; // Para guardar el extra seleccionado 
const priceDisplay9 = document.getElementById('finalPrice9'); 

// Función para actualizar el precio total
function updateTotal9() {
    const extraPrice = selectedExtra9 ? parseInt(selectedExtra9.value) : 0;
    const totalPrice = (basePrice9 + extraPrice) * quantity9;
    priceDisplay9.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

// Funciones para manejar la cantidad 
document.querySelectorAll('#tempura1Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity9++;
        document.getElementById('quantity9').textContent = quantity9;
        updateTotal9();
    });
});

document.querySelectorAll('#tempura1Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity9 > 1) {
            quantity9--;
            document.getElementById('quantity9').textContent = quantity9;
            updateTotal9();
        }
    });
});

// Listener para los cambios en los extras 
const extrasForm9 = document.getElementById('extrasForm9');
extrasForm9.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra9 === event.target) {
            selectedExtra9.checked = false;
            selectedExtra9 = null;
        } else {
            selectedExtra9 = event.target;
        }
        updateTotal9();
    }
});

// TEMPURA 2
let basePrice10 = 4900; // Precio base 
let quantity10 = 1; // Cantidad inicial 
let selectedExtra10 = null; // Para guardar el extra seleccionado 
const priceDisplay10 = document.getElementById('finalPrice10'); 

function updateTotal10() {
    const extraPrice = selectedExtra10 ? parseInt(selectedExtra10.value) : 0;
    const totalPrice = (basePrice10 + extraPrice) * quantity10;
    priceDisplay10.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

document.querySelectorAll('#tempura2Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity10++;
        document.getElementById('quantity10').textContent = quantity10;
        updateTotal10();
    });
});

document.querySelectorAll('#tempura2Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity10 > 1) {
            quantity10--;
            document.getElementById('quantity10').textContent = quantity10;
            updateTotal10();
        }
    });
});

const extrasForm10 = document.getElementById('extrasForm10');
extrasForm10.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra10 === event.target) {
            selectedExtra10.checked = false;
            selectedExtra10 = null;
        } else {
            selectedExtra10 = event.target;
        }
        updateTotal10();
    }
});

// TEMPURA 3
let basePrice11 = 5200; // Precio base 
let quantity11 = 1; // Cantidad inicial 
let selectedExtra11 = null; // Para guardar el extra seleccionado 
const priceDisplay11 = document.getElementById('finalPrice11'); 

function updateTotal11() {
    const extraPrice = selectedExtra11 ? parseInt(selectedExtra11.value) : 0;
    const totalPrice = (basePrice11 + extraPrice) * quantity11;
    priceDisplay11.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

document.querySelectorAll('#tempura3Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity11++;
        document.getElementById('quantity11').textContent = quantity11;
        updateTotal11();
    });
});

document.querySelectorAll('#tempura3Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity11 > 1) {
            quantity11--;
            document.getElementById('quantity11').textContent = quantity11;
            updateTotal11();
        }
    });
});

const extrasForm11 = document.getElementById('extrasForm11');
extrasForm11.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra11 === event.target) {
            selectedExtra11.checked = false;
            selectedExtra11 = null;
        } else {
            selectedExtra11 = event.target;
        }
        updateTotal11();
    }
});

// TEMPURA 4
let basePrice12 = 6300; // Precio base 
let quantity12 = 1; // Cantidad inicial 
let selectedExtra12 = null; // Para guardar el extra seleccionado 
const priceDisplay12 = document.getElementById('finalPrice12'); 

function updateTotal12() {
    const extraPrice = selectedExtra12 ? parseInt(selectedExtra12.value) : 0;
    const totalPrice = (basePrice12 + extraPrice) * quantity12;
    priceDisplay12.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

document.querySelectorAll('#tempura4Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity12++;
        document.getElementById('quantity12').textContent = quantity12;
        updateTotal12();
    });
});

document.querySelectorAll('#tempura4Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity12 > 1) {
            quantity12--;
            document.getElementById('quantity12').textContent = quantity12;
            updateTotal12();
        }
    });
});

const extrasForm12 = document.getElementById('extrasForm12');
extrasForm12.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra12 === event.target) {
            selectedExtra12.checked = false;
            selectedExtra12 = null;
        } else {
            selectedExtra12 = event.target;
        }
        updateTotal12();
    }
});

// AVOCADO 1
let basePrice13 = 5300; // Precio base 
let quantity13 = 1; // Cantidad inicial 
let selectedExtra13 = null; // Para guardar el extra seleccionado 
const priceDisplay13 = document.getElementById('finalPrice13'); 

// Función para actualizar el precio total
function updateTotal13() {
    const extraPrice = selectedExtra13 ? parseInt(selectedExtra13.value) : 0;
    const totalPrice = (basePrice13 + extraPrice) * quantity13;
    priceDisplay13.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

// Funciones para manejar la cantidad 
document.querySelectorAll('#avocado1Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity13++;
        document.getElementById('quantity13').textContent = quantity13;
        updateTotal13();
    });
});

document.querySelectorAll('#avocado1Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity13 > 1) {
            quantity13--;
            document.getElementById('quantity13').textContent = quantity13;
            updateTotal13();
        }
    });
});

// Listener para los cambios en los extras 
const extrasForm13 = document.getElementById('extrasForm13');
extrasForm13.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra13 === event.target) {
            selectedExtra13.checked = false;
            selectedExtra13 = null;
        } else {
            selectedExtra13 = event.target;
        }
        updateTotal13();
    }
});

// AVOCADO 2
let basePrice14 = 6000; // Precio base 
let quantity14 = 1; // Cantidad inicial 
let selectedExtra14 = null; // Para guardar el extra seleccionado 
const priceDisplay14 = document.getElementById('finalPrice14'); 

function updateTotal14() {
    const extraPrice = selectedExtra14 ? parseInt(selectedExtra14.value) : 0;
    const totalPrice = (basePrice14 + extraPrice) * quantity14;
    priceDisplay14.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

document.querySelectorAll('#avocado2Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity14++;
        document.getElementById('quantity14').textContent = quantity14;
        updateTotal14();
    });
});

document.querySelectorAll('#avocado2Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity14 > 1) {
            quantity14--;
            document.getElementById('quantity14').textContent = quantity14;
            updateTotal14();
        }
    });
});

const extrasForm14 = document.getElementById('extrasForm14');
extrasForm14.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra14 === event.target) {
            selectedExtra14.checked = false;
            selectedExtra14 = null;
        } else {
            selectedExtra14 = event.target;
        }
        updateTotal14();
    }
});

// AVOCADO 3
let basePrice15 = 5.100; // Precio base 
let quantity15 = 1; // Cantidad inicial 
let selectedExtra15 = null; // Para guardar el extra seleccionado 
const priceDisplay15 = document.getElementById('finalPrice15'); 

function updateTotal15() {
    const extraPrice = selectedExtra15 ? parseInt(selectedExtra15.value) : 0;
    const totalPrice = (basePrice15 + extraPrice) * quantity15;
    priceDisplay15.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

document.querySelectorAll('#avocado3Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity15++;
        document.getElementById('quantity15').textContent = quantity15;
        updateTotal15();
    });
});

document.querySelectorAll('#avocado3Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity15 > 1) {
            quantity15--;
            document.getElementById('quantity15').textContent = quantity15;
            updateTotal15();
        }
    });
});

const extrasForm15 = document.getElementById('extrasForm15');
extrasForm15.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra15 === event.target) {
            selectedExtra15.checked = false;
            selectedExtra15 = null;
        } else {
            selectedExtra15 = event.target;
        }
        updateTotal15();
    }
});

// AVOCADO 4
let basePrice16 = 6200; // Precio base 
let quantity16 = 1; // Cantidad inicial 
let selectedExtra16 = null; // Para guardar el extra seleccionado 
const priceDisplay16 = document.getElementById('finalPrice16'); 

function updateTotal16() {
    const extraPrice = selectedExtra16 ? parseInt(selectedExtra16.value) : 0;
    const totalPrice = (basePrice16 + extraPrice) * quantity16;
    priceDisplay16.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

document.querySelectorAll('#avocado4Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity16++;
        document.getElementById('quantity16').textContent = quantity16;
        updateTotal16();
    });
});

document.querySelectorAll('#avocado4Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity16 > 1) {
            quantity16--;
            document.getElementById('quantity16').textContent = quantity16;
            updateTotal16();
        }
    });
});

const extrasForm16 = document.getElementById('extrasForm16');
extrasForm16.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra16 === event.target) {
            selectedExtra16.checked = false;
            selectedExtra16 = null;
        } else {
            selectedExtra16 = event.target;
        }
        updateTotal16();
    }
});

// CHEESE 1
let basePrice17 = 5800; // Precio base 
let quantity17 = 1; // Cantidad inicial 
let selectedExtra17 = null; // Para guardar el extra seleccionado 
const priceDisplay17 = document.getElementById('finalPrice17'); 

// Función para actualizar el precio total
function updateTotal17() {
    const extraPrice = selectedExtra17 ? parseInt(selectedExtra17.value) : 0;
    const totalPrice = (basePrice17 + extraPrice) * quantity17;
    priceDisplay17.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

// Funciones para manejar la cantidad 
document.querySelectorAll('#cheese1Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity17++;
        document.getElementById('quantity17').textContent = quantity17;
        updateTotal17();
    });
});

document.querySelectorAll('#cheese1Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity17 > 1) {
            quantity17--;
            document.getElementById('quantity17').textContent = quantity17;
            updateTotal17();
        }
    });
});

// Listener para los cambios en los extras 
const extrasForm17 = document.getElementById('extrasForm17');
extrasForm17.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra17 === event.target) {
            selectedExtra17.checked = false;
            selectedExtra17 = null;
        } else {
            selectedExtra17 = event.target;
        }
        updateTotal17();
    }
});

// CHEESE 2
let basePrice18 = 6200; // Precio base 
let quantity18 = 1; // Cantidad inicial 
let selectedExtra18 = null; // Para guardar el extra seleccionado 
const priceDisplay18 = document.getElementById('finalPrice18'); 

function updateTotal18() {
    const extraPrice = selectedExtra18 ? parseInt(selectedExtra18.value) : 0;
    const totalPrice = (basePrice18 + extraPrice) * quantity18;
    priceDisplay18.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

document.querySelectorAll('#cheese2Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity18++;
        document.getElementById('quantity18').textContent = quantity18;
        updateTotal18();
    });
});

document.querySelectorAll('#cheese2Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity18 > 1) {
            quantity18--;
            document.getElementById('quantity18').textContent = quantity18;
            updateTotal18();
        }
    });
});

const extrasForm18 = document.getElementById('extrasForm18');
extrasForm18.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra18 === event.target) {
            selectedExtra18.checked = false;
            selectedExtra18 = null;
        } else {
            selectedExtra18 = event.target;
        }
        updateTotal18();
    }
});

// CHEESE 3
let basePrice19 = 5.500; // Precio base 
let quantity19 = 1; // Cantidad inicial 
let selectedExtra19 = null; // Para guardar el extra seleccionado 
const priceDisplay19 = document.getElementById('finalPrice19'); 

function updateTotal19() {
    const extraPrice = selectedExtra19 ? parseInt(selectedExtra19.value) : 0;
    const totalPrice = (basePrice19 + extraPrice) * quantity19;
    priceDisplay19.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

document.querySelectorAll('#cheese3Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity19++;
        document.getElementById('quantity19').textContent = quantity19;
        updateTotal19();
    });
});

document.querySelectorAll('#cheese3Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity19 > 1) {
            quantity19--;
            document.getElementById('quantity19').textContent = quantity19;
            updateTotal19();
        }
    });
});

const extrasForm19 = document.getElementById('extrasForm19');
extrasForm19.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra19 === event.target) {
            selectedExtra19.checked = false;
            selectedExtra19 = null;
        } else {
            selectedExtra19 = event.target;
        }
        updateTotal19();
    }
});

// CHEESE 4
let basePrice20 = 6.200; // Precio base 
let quantity20 = 1; // Cantidad inicial 
let selectedExtra20 = null; // Para guardar el extra seleccionado 
const priceDisplay20 = document.getElementById('finalPrice20'); 

function updateTotal20() {
    const extraPrice = selectedExtra20 ? parseInt(selectedExtra20.value) : 0;
    const totalPrice = (basePrice20 + extraPrice) * quantity20;
    priceDisplay20.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

document.querySelectorAll('#cheese4Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity20++;
        document.getElementById('quantity20').textContent = quantity20;
        updateTotal20();
    });
});

document.querySelectorAll('#cheese4Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity20 > 1) {
            quantity20--;
            document.getElementById('quantity20').textContent = quantity20;
            updateTotal20();
        }
    });
});

const extrasForm20 = document.getElementById('extrasForm20');
extrasForm20.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra20 === event.target) {
            selectedExtra20.checked = false;
            selectedExtra20 = null;
        } else {
            selectedExtra20 = event.target;
        }
        updateTotal20();
    }
});

// CALIFORNIA 1
let basePrice21 = 5100; // Precio base 
let quantity21 = 1; // Cantidad inicial 
let selectedExtra21 = null; // Para guardar el extra seleccionado 
const priceDisplay21 = document.getElementById('finalPrice21'); 

// Función para actualizar el precio total
function updateTotal21() {
    const extraPrice = selectedExtra21 ? parseInt(selectedExtra21.value) : 0;
    const totalPrice = (basePrice21 + extraPrice) * quantity21;
    priceDisplay21.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

// Funciones para manejar la cantidad 
document.querySelectorAll('#california1Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity21++;
        document.getElementById('quantity21').textContent = quantity21;
        updateTotal21();
    });
});

document.querySelectorAll('#california1Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity21 > 1) {
            quantity21--;
            document.getElementById('quantity21').textContent = quantity21;
            updateTotal21();
        }
    });
});

// Listener para los cambios en los extras 
const extrasForm21 = document.getElementById('extrasForm21');
extrasForm21.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra21 === event.target) {
            selectedExtra21.checked = false;
            selectedExtra21 = null;
        } else {
            selectedExtra21 = event.target;
        }
        updateTotal21();
    }
});

// CALIFORNIA 2
let basePrice22 = 5400; // Precio base 
let quantity22 = 1; // Cantidad inicial 
let selectedExtra22 = null; // Para guardar el extra seleccionado 
const priceDisplay22 = document.getElementById('finalPrice22'); 

function updateTotal22() {
    const extraPrice = selectedExtra22 ? parseInt(selectedExtra22.value) : 0;
    const totalPrice = (basePrice22 + extraPrice) * quantity22;
    priceDisplay22.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

document.querySelectorAll('#california2Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity22++;
        document.getElementById('quantity22').textContent = quantity22;
        updateTotal22();
    });
});

document.querySelectorAll('#california2Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity22 > 1) {
            quantity22--;
            document.getElementById('quantity22').textContent = quantity22;
            updateTotal22();
        }
    });
});

const extrasForm22 = document.getElementById('extrasForm22');
extrasForm22.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra22 === event.target) {
            selectedExtra22.checked = false;
            selectedExtra22 = null;
        } else {
            selectedExtra22 = event.target;
        }
        updateTotal22();
    }
});

// CALIFORNIA 3
let basePrice23 = 4500; // Precio base 
let quantity23 = 1; // Cantidad inicial 
let selectedExtra23 = null; // Para guardar el extra seleccionado 
const priceDisplay23 = document.getElementById('finalPrice23'); 

function updateTotal23() {
    const extraPrice = selectedExtra23 ? parseInt(selectedExtra23.value) : 0;
    const totalPrice = (basePrice23 + extraPrice) * quantity23;
    priceDisplay23.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

document.querySelectorAll('#california3Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity23++;
        document.getElementById('quantity23').textContent = quantity23;
        updateTotal23();
    });
});

document.querySelectorAll('#california3Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity23 > 1) {
            quantity23--;
            document.getElementById('quantity23').textContent = quantity23;
            updateTotal23();
        }
    });
});

const extrasForm23 = document.getElementById('extrasForm23');
extrasForm23.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra23 === event.target) {
            selectedExtra23.checked = false;
            selectedExtra23 = null;
        } else {
            selectedExtra23 = event.target;
        }
        updateTotal23();
    }
});

// CALIFORNIA 4
let basePrice24 = 5600; // Precio base 
let quantity24 = 1; // Cantidad inicial 
let selectedExtra24 = null; // Para guardar el extra seleccionado 
const priceDisplay24 = document.getElementById('finalPrice24'); 

function updateTotal24() {
    const extraPrice = selectedExtra24 ? parseInt(selectedExtra24.value) : 0;
    const totalPrice = (basePrice24 + extraPrice) * quantity24;
    priceDisplay24.textContent = `Agregar - $${totalPrice.toLocaleString('es-CL')}`;
}

document.querySelectorAll('#california4Modal .btn-mas').forEach(button => {
    button.addEventListener('click', () => {
        quantity24++;
        document.getElementById('quantity24').textContent = quantity24;
        updateTotal24();
    });
});

document.querySelectorAll('#california4Modal .btn-menos').forEach(button => {
    button.addEventListener('click', () => {
        if (quantity24 > 1) {
            quantity24--;
            document.getElementById('quantity24').textContent = quantity24;
            updateTotal24();
        }
    });
});

const extrasForm24 = document.getElementById('extrasForm24');
extrasForm24.addEventListener('click', (event) => {
    if (event.target.name === 'extra') {
        if (selectedExtra24 === event.target) {
            selectedExtra24.checked = false;
            selectedExtra24 = null;
        } else {
            selectedExtra24 = event.target;
        }
        updateTotal24();
    }
});
