document.querySelector('.hamburger-button').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});

const tyc = document.getElementById("condiciones");
const enviar = document.getElementById("enviar");

let esta_cambiado = false;

document.getElementById('btn-color').addEventListener('click', function() {
    if (esta_cambiado) {
        // Elimina el color volviendo al estado inicial
        document.body.style.background = '';
        document.body.style.color = '';
        esta_cambiado = false;
    } else {
        // Aplica el color #1A535C
        document.body.style.background = '#1A535C';
        document.body.style.color = 'white';
        esta_cambiado = true;
    }
});