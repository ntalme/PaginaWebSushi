// Variable para verificar si el usuario está autenticado
let usuarioAutenticado = false;

// ------------ INICIO SESION --------------- 
function iniciarSesion() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validar los campos de entrada
    if (email === '' || password === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Simulación de autenticación
    if (email === 'admin@example.com' && password === 'admin123') {
        alert('Inicio de sesión exitoso como administrador.');
        usuarioAutenticado = true;

        // Guardar el estado de la sesión en el Local Storage
        localStorage.setItem('usuarioAutenticado', 'true');
        localStorage.setItem('nombreUsuario', 'Almendra Manríquez');
        localStorage.setItem('esAdmin', 'true'); // Guardar el estado de administrador

        // Cerrar el modal de inicio de sesión
        cerrarModalLogin();

        // Actualizar el nombre del usuario en el menú de perfil
        document.getElementById('nombre-usuario').textContent = 'Almendra Manríquez';

        // Cambiar la funcionalidad del ícono de perfil para mostrar el menú de perfil
        actualizarIconoPerfil();

        // Mostrar la interfaz de administrador
        mostrarInterfazAdministrador();

    } else if (email === 'user@example.com' && password === 'user123') {
        alert('Inicio de sesión exitoso.');
        usuarioAutenticado = true;

        // Guardar el estado de la sesión en el Local Storage
        localStorage.setItem('usuarioAutenticado', 'true');
        localStorage.setItem('nombreUsuario', 'Usuario Regular');
        localStorage.setItem('esAdmin', 'false'); // No es administrador

        // Cerrar el modal de inicio de sesión
        cerrarModalLogin();

        // Actualizar el nombre del usuario en el menú de perfil
        document.getElementById('nombre-usuario').textContent = 'Usuario Regular';

        // Cambiar la funcionalidad del ícono de perfil para mostrar el menú de perfil
        actualizarIconoPerfil();
    } else {
        alert('Credenciales incorrectas.');
    }
}

// Función para restaurar la sesión desde el Local Storage
function restaurarSesion() {
    if (localStorage.getItem('usuarioAutenticado') === 'true') {
        usuarioAutenticado = true;

        // Actualizar el nombre del usuario en el menú de perfil
        const nombreUsuario = localStorage.getItem('nombreUsuario');
        document.getElementById('nombre-usuario').textContent = nombreUsuario;

        // Mostrar la interfaz de administrador si el usuario es admin
        if (localStorage.getItem('esAdmin') === 'true') {
            mostrarInterfazAdministrador();
        }

        // Cambiar la funcionalidad del ícono de perfil para mostrar el menú de perfil
        actualizarIconoPerfil();
    }
}

// Función para actualizar la funcionalidad del ícono de perfil
function actualizarIconoPerfil() {
    const loginIcon = document.getElementById('login-icon');

    // Eliminar todos los eventos previos
    loginIcon.removeEventListener('click', abrirModalLogin);
    loginIcon.removeEventListener('click', toggleMenuPerfil);

    // Asignar el evento correcto según el estado de autenticación
    if (usuarioAutenticado) {
        loginIcon.addEventListener('click', toggleMenuPerfil);
    } else {
        loginIcon.addEventListener('click', abrirModalLogin);
    }
}

// ADMINISTRADOR
function mostrarInterfazAdministrador() {
    const adminSection = document.getElementById('admin-section');
    if (adminSection) {
        adminSection.style.display = 'block'; // Mostrar la sección de administrador
    }
}

// CERRAR SESION
function cerrarSesion() {
    alert('Sesión cerrada.');
    usuarioAutenticado = false;

    // Eliminar el estado de la sesión del Local Storage
    localStorage.removeItem('usuarioAutenticado');
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('esAdmin');

    // Restablecer la funcionalidad del ícono de perfil
    actualizarIconoPerfil();

    // Ocultar el menú de perfil y la sección de administrador
    document.getElementById('menu-perfil').style.display = 'none';
    const adminSection = document.getElementById('admin-section');
    if (adminSection) {
        adminSection.style.display = 'none'; // Ocultar la sección de administrador
    }

    // Mostrar el modal de inicio de sesión nuevamente
    abrirModalLogin();
}

// ABRIR MODAL INICIO SESION
function abrirModalLogin() {
    if (!usuarioAutenticado) {
        document.getElementById('login-modal').style.display = 'flex';
    }
}

// CERRAR MODAL INICIO SESION
function cerrarModalLogin() {
    document.getElementById('login-modal').style.display = 'none';
}

// MOSTRAR OCULTAR PERFIL CON EL ICONO DE PERFIL
function toggleMenuPerfil() {
    const menuPerfil = document.getElementById('menu-perfil');
    menuPerfil.style.display = (menuPerfil.style.display === 'none' || menuPerfil.style.display === '') ? 'block' : 'none';
}
