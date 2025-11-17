// ========================================
// EJERCICIO 6.1: Aparición por scroll
// ========================================
const items = document.querySelectorAll('.js-scroll-item');
const options = { threshold: 0.3 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, options);

items.forEach(item => observer.observe(item));


// ========================================
// EJERCICIO 9: Bloque desplegable
// ========================================
const toggle = document.querySelector('.bloque-desplegable__toggle');
const contenido = document.querySelector('.bloque-desplegable__contenido');

// Estado inicial: cerrado
contenido.classList.add('cerrado');

toggle.addEventListener('click', () => {
  contenido.classList.toggle('cerrado');
});
