// Recuperar la selección de Delivery o Retiro desde LocalStorage
const orderType = localStorage.getItem('orderType');
const iconDynamic = document.getElementById('icon-dynamic');

// Cambiar el ícono dinámico según la selección del usuario
if (orderType === 'delivery') {
    iconDynamic.textContent = '🏍️'; // Mostrar ícono de moto
} else if (orderType === 'pickup') {
    iconDynamic.textContent = '🛍️'; // Mostrar ícono de bolsa
}

