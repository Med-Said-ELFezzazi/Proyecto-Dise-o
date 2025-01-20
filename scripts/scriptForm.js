document.querySelector('.hamburger-button').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});

let estaCambiado = false;

document.getElementById('btn-color').addEventListener('click', function() {
    const mainElement = document.querySelector('main.contacto');
    const texts = mainElement.querySelectorAll('legend, h2, p, label'); // Selección general de hijos relevantes
    const actividadElement = mainElement.querySelector('td b'); // Selecciona específicamente el <b> dentro del <td>
    
    if (estaCambiado) {
        mainElement.style.backgroundColor = '';
        texts.forEach(element => {
            element.style.color = ''; // Restaura el color predeterminado
        });
        if (actividadElement) {
            actividadElement.style.color = ''; // Restaura color específico del elemento
        }
        estaCambiado = false;
    } else {
        mainElement.style.backgroundColor = '#1A535C';
        texts.forEach(element => {
            element.style.color = 'white'; // Cambia el color a blanco para los textos generales
        });
        if (actividadElement) {
            actividadElement.style.color = 'white'; // FORZAR EL CAMBIO PQ NO TIENE <b> y poniendo label daba errores en accesibilidad 'ERR SIN SENTIDO'
        }
        estaCambiado = true;
    }
});
