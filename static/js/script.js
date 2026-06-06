/**
 * ==========================================================================
 * GESTOR DE ESTILOS VISUALES (CONMUTADOR DE TEMAS)
 * ==========================================================================
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionar los elementos del DOM necesarios
    const botonesTema = document.querySelectorAll('.opcion-tema');
    const elementoRaiz = document.documentElement; // Esto selecciona la etiqueta <html>

    // 2. Comprobar si el usuario ya tenía un tema guardado anteriormente en el navegador
    const temaGuardado = localStorage.getItem('portfolio-tema');

    if (temaGuardado && temaGuardado !== 'defecto') {
        // Si hay un tema válido guardado, lo aplicamos de inmediato al cargar la web
        elementoRaiz.setAttribute('data-tema', temaGuardado);
    }

    // 3. Escuchar los clics en cada uno de los botones de la lista
    botonesTema.forEach(boton => {
        boton.addEventListener('click', () => {
            // Obtenemos el valor del atributo personalizado (defecto, claro o hacker)
            const nuevoTema = boton.getAttribute('data-tema-valor');

            if (nuevoTema === 'defecto') {
                // Tema oscuro estándar: eliminamos el atributo para regresar al :root por defecto
                elementoRaiz.removeAttribute('data-tema');
                localStorage.setItem('portfolio-tema', 'defecto');
            } else {
                // Temas alternativos (claro o hacker): inyectamos el atributo correspondiente
                elementoRaiz.setAttribute('data-tema', nuevoTema);
                localStorage.setItem('portfolio-tema', nuevoTema);
            }
        });
    });
});