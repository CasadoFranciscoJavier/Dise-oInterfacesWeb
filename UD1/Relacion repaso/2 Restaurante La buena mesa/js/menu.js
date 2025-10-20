(function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('#menu');
    const overlay = document.querySelector('.overlay');
    const links = menu.querySelectorAll('a');

    // Función para abrir el menú
    const openMenu = () => {
        const isOpen = true;
        
        burger.classList.add('is-open');
        menu.classList.add('is-open');
        overlay.classList.add('is-active');
        
        // Requisito de accesibilidad: aria-expanded y hidden
        burger.setAttribute('aria-expanded', isOpen);
        menu.removeAttribute('hidden');
        overlay.removeAttribute('hidden');
        
    };

    // Función para cerrar el menú
    const closeMenu = () => {
        const isOpen = false;

        burger.classList.remove('is-open');
        menu.classList.remove('is-open');
        overlay.classList.remove('is-active');

        // Requisito de accesibilidad: aria-expanded y hidden
        burger.setAttribute('aria-expanded', isOpen);

        // Usamos setTimeout para que el hidden se aplique DESPUÉS de la transición CSS
        setTimeout(() => {
            menu.setAttribute('hidden', '');
            overlay.setAttribute('hidden', '');
            // Devolver foco al botón que lo abrió
            burger.focus(); 
        }, 300); // 300ms debe coincidir con la duración de la transición CSS
    };

    // Función principal de alternancia
    const toggleMenu = () => {
        // Obtenemos el estado actual del atributo
        const isCurrentlyExpanded = burger.getAttribute('aria-expanded') === 'true';
        isCurrentlyExpanded ? closeMenu() : openMenu();
    };

    // Event Listeners
    burger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
    
    // Cierre por tecla Escape
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
            closeMenu();
        }
    });
    
    // Cierre al hacer click en un enlace del menú
    links.forEach(a => a.addEventListener('click', closeMenu));
})();