
# Taller: Tooltips, Carrusel e Interacción con JavaScript en Bootstrap

Objetivo:  
Crear paso a paso una página `index.html` que incluya:

1. Un carrusel de imágenes.  
2. Varios botones con tooltip.  
3. Interacción con JavaScript para:
   - Inicializar los tooltips.
   - Controlar el carrusel desde JavaScript.

Usaremos **Bootstrap 5 por CDN** y **imágenes de prueba** de `https://placehold.co`.

---

## 0. Estructura del proyecto

Crea una carpeta de proyecto, por ejemplo:

```text
bootstrap-interactivo/
└── index.html
```

Trabajaremos solo con ese archivo `index.html` (todo en uno).

---

## 1. Plantilla base con Bootstrap

1. Abre `index.html` en Visual Studio Code (o tu editor).
2. Copia este HTML base:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Taller Bootstrap Interactivo</title>

  <!-- Bootstrap CSS por CDN -->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
</head>
<body>

  <h1 class="text-center my-4">Taller: Tooltips y Carrusel</h1>

  <div class="container my-5">
    <!-- Aquí añadiremos el carrusel y los tooltips -->
  </div>

  <!-- Bootstrap JS (bundle con Popper) -->
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js">
  </script>

  <!-- Aquí pondremos nuestro JavaScript -->
  <script>
    // JS personalizado vendrá aquí
  </script>
</body>
</html>
```

Comprueba que se ve el título centrado al abrir el archivo en el navegador.

---

## 2. Añadir el carrusel de Bootstrap

Dentro del `<div class="container my-5">...</div>`, vamos a crear un carrusel con 3 diapositivas.

1. Sustituye el comentario `<!-- Aquí añadiremos el carrusel y los tooltips -->` por este código:

```html
    <!-- Carrusel principal -->
    <div id="heroCarousel" class="carousel slide mb-5" data-bs-ride="carousel">
      <!-- Indicadores -->
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Diapositiva 1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Diapositiva 2"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Diapositiva 3"></button>
      </div>

      <!-- Imágenes -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://placehold.co/800x400?text=Primera+diapositiva" class="d-block w-100" alt="Primera imagen">
          <div class="carousel-caption d-none d-md-block">
            <h5>Primera diapositiva</h5>
            <p>Texto descriptivo de la primera imagen.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img src="https://placehold.co/800x400?text=Segunda+diapositiva" class="d-block w-100" alt="Segunda imagen">
          <div class="carousel-caption d-none d-md-block">
            <h5>Segunda diapositiva</h5>
            <p>Más contenido de ejemplo.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img src="https://placehold.co/800x400?text=Tercera+diapositiva" class="d-block w-100" alt="Tercera imagen">
          <div class="carousel-caption d-none d-md-block">
            <h5>Tercera diapositiva</h5>
            <p>Última imagen del carrusel.</p>
          </div>
        </div>
      </div>

      <!-- Controles anterior / siguiente -->
      <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
```

2. Guarda y recarga el navegador.  
   Deberías ver un carrusel con 3 imágenes de `placehold.co`.

---

## 3. Añadir botones con Tooltips

Debajo del carrusel, vamos a crear una fila de botones que muestren un tooltip al pasar el ratón por encima.

1. Justo debajo del `</div>` del carrusel, añade:

```html
    <!-- Botones con tooltips -->
    <h2 class="mb-3">Acciones rápidas</h2>
    <div class="d-flex flex-wrap gap-3">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Comienza la presentación desde el principio">
        Inicio
      </button>

      <button
        type="button"
        class="btn btn-success"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Avanza a la siguiente diapositiva">
        Siguiente
      </button>

      <button
        type="button"
        class="btn btn-warning"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Pausa el carrusel">
        Pausar
      </button>

      <button
        type="button"
        class="btn btn-danger"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Reanudar el carrusel">
        Reanudar
      </button>
    </div>
```

Estos botones **tienen tooltips definidos con atributos `data-`**, pero aún necesitamos inicializarlos con JavaScript.

---

## 4. Inicializar los Tooltips con JavaScript

En la parte inferior de tu archivo, dentro del bloque:

```html
  <script>
    // JS personalizado vendrá aquí
  </script>
```

sustituye el comentario por este código:

```html
  <script>
    // 1. Inicializar todos los tooltips de la página
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  </script>
```

Guarda y recarga.  
Pasa el ratón por encima de los botones: deberían aparecer los tooltips.

---

## 5. Controlar el carrusel con JavaScript

Vamos a usar los botones para controlar el carrusel desde JavaScript.

1. Amplía el `<script>` que ya tienes para añadir la lógica del carrusel.  
   Deja **todo junto** así:

```html
  <script>
    // 1. Inicializar todos los tooltips de la página
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // 2. Obtener el carrusel y crear la instancia JS
    const carouselElement = document.getElementById('heroCarousel');
    const heroCarousel = new bootstrap.Carousel(carouselElement, {
      interval: 3000, // 3 segundos entre diapositivas
      pause: false,   // no se pausa automáticamente al pasar el ratón
      wrap: true      // vuelve al inicio cuando llega al final
    });

    // 3. Conectar los botones a acciones del carrusel
    const btns = document.querySelectorAll('.btn');

    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const text = btn.textContent.trim();

        if (text === 'Inicio') {
          heroCarousel.to(0); // Ir a la primera diapositiva (índice 0)
        }

        if (text === 'Siguiente') {
          heroCarousel.next(); // Ir a la siguiente diapositiva
        }

        if (text === 'Pausar') {
          heroCarousel.pause(); // Pausar el carrusel
        }

        if (text === 'Reanudar') {
          heroCarousel.cycle(); // Reanudar el carrusel
        }
      });
    });
  </script>
```

2. Prueba en el navegador:
   - Haz clic en **Inicio** → el carrusel debe ir a la primera imagen.
   - Haz clic en **Siguiente** → pasa a la siguiente diapositiva.
   - Haz clic en **Pausar** → el carrusel deja de moverse solo.
   - Haz clic en **Reanudar** → vuelve a avanzar automáticamente.

