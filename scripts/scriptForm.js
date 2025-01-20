let estaCambiado = false;

document.getElementById('btn-color').addEventListener('click', function() {
    const mainElement = document.querySelector('main.contacto');
    
    if (estaCambiado) {
        // Vuelve al color inicial
        mainElement.style.backgroundColor = '';
        mainElement.style.color = '';
        estaCambiado = false;
    } else {
        mainElement.style.backgroundColor = '#1A535C';
        mainElement.style.color = 'white';
        estaCambiado = true;
    }
});
