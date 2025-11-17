/* ========================================
   CHULETA COMPLETA - JAVASCRIPT
   Animaciones con Intersection Observer
   ======================================== */

// ========================================
// 1. APARICIÓN CON SCROLL (JavaScript)
// ========================================

const scrollItems = document.querySelectorAll('.js-scroll-item');

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3
});

scrollItems.forEach(item => {
  scrollObserver.observe(item);
});


// ========================================
// 2. APARICIÓN ESCALONADA CON JAVASCRIPT
// ========================================

const staggerItems = document.querySelectorAll('.js-stagger-item');

const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;

      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay * 200); // 200ms entre cada elemento

      // Dejar de observar después de animar
      staggerObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

staggerItems.forEach(item => {
  staggerObserver.observe(item);
});


// ========================================
// 3. BLOQUE DESPLEGABLE CON JAVASCRIPT (Toggle)
// ========================================

const collapsibleBtn = document.querySelector('.collapsible-js__btn');
const collapsibleContent = document.querySelector('.collapsible-js__content');

if (collapsibleBtn && collapsibleContent) {
  // Estado inicial: cerrado
  collapsibleContent.classList.add('cerrado');

  collapsibleBtn.addEventListener('click', () => {
    collapsibleContent.classList.toggle('cerrado');

    // Cambiar el icono del botón
    const isOpen = !collapsibleContent.classList.contains('cerrado');
    collapsibleBtn.textContent = isOpen ? '▲ Click para colapsar' : '▼ Click para expandir';
  });
}


// ========================================
// INFORMACIÓN Y DEBUGGING
// ========================================

console.log('✅ Chuleta Completa - Script cargado correctamente');
console.log(`📊 Observando ${scrollItems.length} elementos con scroll simple`);
console.log(`📊 Observando ${staggerItems.length} elementos con scroll escalonado`);


/* ========================================
   NOTAS SOBRE INTERSECTION OBSERVER API
   ========================================

   Propiedades útiles del entry:
   - entry.isIntersecting: true si el elemento es visible
   - entry.intersectionRatio: porcentaje visible (0.0 a 1.0)
   - entry.target: el elemento DOM observado
   - entry.boundingClientRect: posición del elemento

   Opciones del Observer:
   - threshold: 0.5 = 50% visible para activar
   - threshold: [0, 0.25, 0.5, 0.75, 1] = múltiples puntos
   - rootMargin: "50px" = activar 50px antes
   - root: null (viewport) o elemento contenedor específico

   ======================================== */
