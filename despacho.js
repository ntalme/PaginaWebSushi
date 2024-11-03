
// Inicializar el mapa centrado en Maipú, Santiago
var map = L.map('map').setView([-33.5105, -70.7591], 14);

// Cargar el mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Añadir el punto de despacho: Mar de Chile 516, Maipú, Santiago
L.marker([-33.5105, -70.7591]).addTo(map).bindPopup("Mar de Chile 516, Maipú, Santiago").openPopup();

// Definir un radio circular de cobertura (ej. 2000 metros alrededor del punto)
var radius = 2000; // Radio de 2 kilómetros

// Añadir el círculo al mapa
L.circle([-33.5105, -70.7591], {
    color: 'orange',
    fillColor: '#f03',
    fillOpacity: 0.2,
    radius: radius
}).addTo(map);
