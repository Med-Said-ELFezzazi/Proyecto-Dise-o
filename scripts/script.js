document.querySelector('.hamburger-button').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});

const tyc = document.getElementById("condiciones");
const enviar = document.getElementById("enviar");

let esta_cambiado = false;

document.getElementById('btn-color').addEventListener('click', function() {
    const divs = document.querySelectorAll('div:not(footer div):not(header div)'); // Excluye divs dentro de footer y header
    if (esta_cambiado) {
        // Elimina los cambios volviendo al estado inicial
        document.body.style.background = '';
        document.body.style.color = '';
        divs.forEach(div => {
            div.style.border = ''; // Quita el color de borde
        });
        esta_cambiado = false;
    } else {
        // Aplica los cambios
        document.body.style.background = '#1A535C';
        document.body.style.color = 'white';
        divs.forEach(div => {
            div.style.border = '2px solid white'; // Cambia el color de borde a blanco
        });
        esta_cambiado = true;
    }
});

