// Selecciona los elementos necesarios del DOM
const boton_aceptar_cookies = document.getElementById('btn-aceptar-cookies');
const aviso_cookies = document.getElementById('aviso-cookies');
const fondoaviso_cookies = document.getElementById('fondo-aviso-cookies');

// Inicializa dataLayer para el seguimiento de eventos
dataLayer = [];

// Muestra el aviso si las cookies no han sido aceptadas previamente
if(!localStorage.getItem('cookies-aceptadas')){
	aviso_cookies.classList.add('activo');
	fondoaviso_cookies.classList.add('activo');
} else {
	// Envía evento si las cookies ya fueron aceptadas
	dataLayer.push({'event': 'cookies-aceptadas'});
}

// Maneja el clic en el botón de aceptar cookies
boton_aceptar_cookies.addEventListener('click', function() {
	// Oculta el aviso de cookies
	aviso_cookies.classList.remove('activo');
	fondoaviso_cookies.classList.remove('activo');
	// Guarda la aceptación en localStorage
	localStorage.setItem('cookies-aceptadas', true);
	// Envía evento de aceptación de cookies
	dataLayer.push({'event': 'cookies-aceptadas'});
});
