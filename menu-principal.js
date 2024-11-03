// Función para guardar la selección de Delivery o Retiro en LocalStorage
function setOrderType(type) {
    localStorage.setItem('orderType', type);
    window.location.href = 'carta.html'; // Redirigir a la página del menú
}