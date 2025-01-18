document.querySelector('.hamburger-button').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});

document.getElementById('btn-color').addEventListener('click', () => {
    const btn = document.getElementById('btn-color');
    const esAzul = btn.getAttribute('data-is-blue') === 'true'; // Verifica el estado actual

    let currentElement = document.querySelector('h2');
    const newBackgroundColor = esAzul ? '' : '#1A535C'; // Fondo vacío para resetear o azul
    const newTextColor = esAzul ? '' : 'white'; // Texto vacío para resetear o blanco

    while (currentElement) {
        // Si llegamos al footer, salimos del bucle
        if (currentElement.tagName.toLowerCase() === 'footer') break;

        currentElement.style.backgroundColor = newBackgroundColor;
        currentElement.style.color = newTextColor;

        // Cambiar estilos a todos los descendientes
        const descendants = currentElement.querySelectorAll('*');
        descendants.forEach(descendant => {
            descendant.style.backgroundColor = newBackgroundColor;
            descendant.style.color = newTextColor;
        });

        currentElement = currentElement.nextElementSibling;
    }

    btn.setAttribute('data-is-blue', !esAzul); // Alternar el estado
});

