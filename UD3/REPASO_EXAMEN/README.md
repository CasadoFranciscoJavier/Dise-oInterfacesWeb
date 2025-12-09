# 📚 CARPETA DE REPASO - UD3 BOOTSTRAP Y SASS

Esta carpeta contiene todos los ejercicios organizados por temas para repasar antes del examen de la Unidad 3.

## 📁 Estructura de la carpeta

```
REPASO_EXAMEN/
│
├── 00_CHULETA_COMPLETA/          ⭐ EMPIEZA AQUÍ
│   ├── index.html                 → Todos los conceptos en una página
│   └── styles.css                 → CSS completo con comentarios explicativos
│
├── 01_Bootstrap_Grid/
│   ├── index.html                 → 12 ejercicios del sistema de cuadrícula
│   └── README.md                  → Explicación detallada del Grid System
│
├── 02_Componentes_Bootstrap/
│   ├── index.html                 → 15 componentes Bootstrap principales
│   └── README.md                  → Guía de componentes con ejemplos
│
├── 03_Utilidades_Bootstrap/
│   ├── index.html                 → 10 ejercicios de clases utilitarias
│   └── README.md                  → Chuleta de utilidades más usadas
│
├── 04_Sass_Basico/
│   ├── scss/
│   │   └── custom.scss           → Variables, nesting, mixins
│   ├── css/
│   │   └── custom.css            → CSS compilado
│   ├── index.html                → Ejemplos de personalización
│   ├── package.json              → Configuración npm
│   └── README.md                 → Guía de Sass básico
│
├── 05_Animaciones_Bootstrap/
│   ├── index.html                → 10 ejemplos de animaciones
│   ├── styles.css                → Animaciones y transiciones personalizadas
│   └── README.md                 → Guía de animaciones
│
└── 06_Layout_Completo/
    ├── index.html                → Proyecto completo integrador
    ├── styles.css                → CSS personalizado
    └── README.md                 → Explicación del proyecto final
```

## 🎯 Cómo usar esta carpeta

### Opción 1: Chuleta Completa (Recomendado para repaso rápido)
1. Abre `00_CHULETA_COMPLETA/index.html` en tu navegador
2. Tienes TODOS los conceptos de Bootstrap y Sass en una sola página
3. Ideal para repasar antes del examen

### Opción 2: Por temas (Recomendado para práctica profunda)
1. Empieza por `01_Bootstrap_Grid`
2. Abre el `index.html` en el navegador
3. Lee el README.md de cada carpeta para entender los conceptos
4. Prueba a modificar los valores para entender cómo funcionan
5. Continúa con el siguiente tema en orden

### Opción 3: Proyecto Final (Para integrar todo)
1. Ve directamente a `06_Layout_Completo`
2. Analiza cómo se integran todos los conceptos
3. Úsalo como referencia para crear tus propios proyectos

## 📖 Conceptos cubiertos

### ✅ 01_Bootstrap_Grid (Sistema de Cuadrícula)

**Conceptos básicos:**
- Sistema de 12 columnas
- Contenedores: `container`, `container-fluid`
- Filas y columnas: `row`, `col`

**Breakpoints responsivos:**
- Extra small (xs): < 576px → `col-`
- Small (sm): ≥ 576px → `col-sm-`
- Medium (md): ≥ 768px → `col-md-`
- Large (lg): ≥ 992px → `col-lg-`
- Extra large (xl): ≥ 1200px → `col-xl-`
- Extra extra large (xxl): ≥ 1400px → `col-xxl-`

**Características avanzadas:**
- Columnas automáticas: `col` sin número
- Anchos específicos: `col-4`, `col-6`, `col-8`
- Gutters (espaciado): `gx-*`, `gy-*`, `g-*`
- Alineación: `align-items-*`, `justify-content-*`
- Orden: `order-1`, `order-2`, `order-3`
- Offset: `offset-*`
- Cuadrículas anidadas

**Ejercicios incluidos:** 12 ejemplos prácticos

---

### ✅ 02_Componentes_Bootstrap

**Botones:**
- Variantes: `btn-primary`, `btn-secondary`, `btn-success`, `btn-danger`, `btn-warning`, `btn-info`, `btn-light`, `btn-dark`
- Tamaños: `btn-lg`, `btn-sm`
- Outline: `btn-outline-primary`
- Estados: `disabled`, `active`

**Formularios:**
- Campos: `form-control`, `form-label`, `form-text`
- Selectores: `form-select`
- Checkboxes y radios: `form-check`, `form-check-input`, `form-check-label`
- Validación: `is-valid`, `is-invalid`, `valid-feedback`, `invalid-feedback`
- Layout en grid: `row`, `col-md-6`

**Navbar (Barra de navegación):**
- Estructura: `navbar`, `navbar-brand`, `navbar-nav`
- Collapse responsivo: `navbar-toggler`, `navbar-collapse`
- Temas: `navbar-light bg-light`, `navbar-dark bg-dark`
- Posicionamiento: `fixed-top`, `fixed-bottom`, `sticky-top`

**Cards (Tarjetas):**
- Estructura: `card`, `card-img-top`, `card-body`, `card-title`, `card-text`
- Layout en grid: `col-md-4 mb-3`
- Altura uniforme: `h-100`
- Flexbox en cards: `d-flex flex-column`

**Modales:**
- Estructura: `modal fade`, `modal-dialog`, `modal-content`
- Partes: `modal-header`, `modal-body`, `modal-footer`
- Activación: `data-bs-toggle="modal"`, `data-bs-target="#id"`
- Opciones: `modal-dialog-centered`, `modal-lg`, `modal-sm`

**Otros componentes:**
- Dropdown: `dropdown`, `dropdown-toggle`, `dropdown-menu`
- Collapse: `data-bs-toggle="collapse"`
- Carousel: `carousel`, `carousel-item`, `carousel-control-*`
- List group: `list-group`, `list-group-item`
- Tooltips: `data-bs-toggle="tooltip"`

**Ejercicios incluidos:** 15 componentes con ejemplos

---

### ✅ 03_Utilidades_Bootstrap

**Espaciado (Spacing):**
- Margin: `m-*`, `mt-*`, `mb-*`, `ms-*`, `me-*`, `mx-*`, `my-*`
- Padding: `p-*`, `pt-*`, `pb-*`, `ps-*`, `pe-*`, `px-*`, `py-*`
- Valores: 0, 1, 2, 3, 4, 5 (0 = 0, 5 = 3rem)
- Auto: `m-auto`, `mx-auto`

**Display:**
- `d-none`, `d-block`, `d-inline`, `d-inline-block`
- `d-flex`, `d-inline-flex`
- `d-grid`, `d-table`
- Responsive: `d-none d-md-block`, `d-lg-none`

**Flexbox:**
- Direction: `flex-row`, `flex-column`
- Justify: `justify-content-start`, `justify-content-center`, `justify-content-between`, `justify-content-around`, `justify-content-evenly`
- Align: `align-items-start`, `align-items-center`, `align-items-end`, `align-items-stretch`
- Wrap: `flex-wrap`, `flex-nowrap`
- Grow/Shrink: `flex-grow-1`, `flex-shrink-1`

**Texto:**
- Alineación: `text-start`, `text-center`, `text-end`
- Transform: `text-lowercase`, `text-uppercase`, `text-capitalize`
- Weight: `fw-bold`, `fw-normal`, `fw-light`
- Tamaño: `fs-1`, `fs-2`, `fs-3`, `fs-4`, `fs-5`, `fs-6`

**Colores:**
- Texto: `text-primary`, `text-secondary`, `text-success`, `text-danger`, `text-warning`, `text-info`, `text-light`, `text-dark`, `text-muted`, `text-white`
- Fondo: `bg-primary`, `bg-secondary`, `bg-success`, `bg-danger`, `bg-warning`, `bg-info`, `bg-light`, `bg-dark`, `bg-white`

**Bordes:**
- `border`, `border-top`, `border-bottom`, `border-start`, `border-end`
- `border-0`, `border-1`, `border-2`, `border-3`, `border-4`, `border-5`
- `rounded`, `rounded-top`, `rounded-bottom`, `rounded-circle`, `rounded-pill`

**Posicionamiento:**
- `position-static`, `position-relative`, `position-absolute`, `position-fixed`, `position-sticky`
- `top-0`, `bottom-0`, `start-0`, `end-0`

**Sombras:**
- `shadow-none`, `shadow-sm`, `shadow`, `shadow-lg`

**Ejercicios incluidos:** 10 ejemplos de utilidades

---

### ✅ 04_Sass_Basico

**Variables Sass:**
```scss
$primary-color: #007bff;
$secondary-color: #6c757d;
$font-family: 'Segoe UI', sans-serif;
$font-size-base: 1rem;
$border-radius: 0.5rem;
```

**Nesting (Anidación):**
```scss
.navbar {
  background-color: $primary-color;

  .nav-link {
    color: white;

    &:hover {
      color: $secondary-color;
    }
  }
}
```

**Mixins (Funciones reutilizables):**
```scss
@mixin button-style($bg-color, $text-color) {
  background-color: $bg-color;
  color: $text-color;
  border: none;
  padding: 10px 20px;
  border-radius: $border-radius;
}

.btn-custom {
  @include button-style($primary-color, white);
}
```

**Extend (Herencia):**
```scss
.message {
  padding: 10px;
  border-radius: 5px;
}

.message-success {
  @extend .message;
  background-color: green;
}
```

**Personalización de Bootstrap:**
```scss
// Sobrescribir variables de Bootstrap
$primary: #fd0dad;
$secondary: #6c757d;
$body-bg: #111827;
$body-color: #e5e7eb;

// Importar Bootstrap
@import "../node_modules/bootstrap/scss/bootstrap";
```

**Compilación:**
```json
{
  "scripts": {
    "sass": "sass scss/custom.scss css/custom.css --watch"
  }
}
```

**Ejercicios incluidos:** Proyecto completo con Sass

---

### ✅ 05_Animaciones_Bootstrap

**Animaciones incorporadas:**
- Modal: clase `fade`
- Collapse: transición automática
- Dropdown: animación de apertura
- Tooltip: animación suave

**CSS Personalizado:**

**Transiciones:**
```css
.btn {
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
```

**Hover effects en cards:**
```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}
```

**Animaciones con @keyframes:**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-element {
  animation: fadeInUp 1s ease-out;
}
```

**Animation delays:**
```css
.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }
```

**Ejercicios incluidos:** 10 ejemplos de animaciones

---

### ✅ 06_Layout_Completo

**Proyecto integrador con:**
- Navbar responsiva completa
- Hero section con diseño atractivo
- Sistema de cards en grid
- Modales interactivos
- Formulario con validación
- Footer con enlaces
- Animaciones personalizadas
- Tooltips y componentes interactivos
- CSS personalizado con transiciones
- JavaScript para interactividad

**Características:**
- Mobile-first design
- Totalmente responsive
- Accesible (ARIA labels)
- Validación de formularios
- Componentes reutilizables

---

## 💡 Consejos para el examen

### 🔑 Estructura básica HTML con Bootstrap

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Proyecto</title>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- CSS Personalizado (opcional) -->
  <link href="styles.css" rel="stylesheet">
</head>
<body>

  <!-- Tu contenido aquí -->

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

  <!-- JavaScript personalizado (opcional) -->
  <script src="script.js"></script>
</body>
</html>
```

---

### 📏 Breakpoints de Bootstrap (MEMORIZA ESTO)

| Breakpoint | Tamaño | Clase | Ejemplo |
|------------|--------|-------|---------|
| Extra small | < 576px | `col-` | `col-12` |
| Small | ≥ 576px | `col-sm-` | `col-sm-6` |
| Medium | ≥ 768px | `col-md-` | `col-md-4` |
| Large | ≥ 992px | `col-lg-` | `col-lg-3` |
| Extra large | ≥ 1200px | `col-xl-` | `col-xl-2` |
| Extra extra large | ≥ 1400px | `col-xxl-` | `col-xxl-1` |

---

### 🎨 Colores de Bootstrap (MEMORIZA ESTO)

```html
<!-- Botones -->
<button class="btn btn-primary">Primary (Azul)</button>
<button class="btn btn-secondary">Secondary (Gris)</button>
<button class="btn btn-success">Success (Verde)</button>
<button class="btn btn-danger">Danger (Rojo)</button>
<button class="btn btn-warning">Warning (Amarillo)</button>
<button class="btn btn-info">Info (Cian)</button>
<button class="btn btn-light">Light (Blanco)</button>
<button class="btn btn-dark">Dark (Negro)</button>

<!-- Texto -->
<p class="text-primary">Texto azul</p>
<p class="text-success">Texto verde</p>

<!-- Fondos -->
<div class="bg-primary text-white">Fondo azul</div>
<div class="bg-danger text-white">Fondo rojo</div>
```

---

### 🚀 Trucos útiles del examen

**1. Layout de 3 columnas responsive:**
```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-4">Columna 1</div>
    <div class="col-12 col-md-4">Columna 2</div>
    <div class="col-12 col-md-4">Columna 3</div>
  </div>
</div>
```
- En móvil (< 768px): 3 filas de ancho completo
- En tablet/desktop (≥ 768px): 3 columnas iguales

**2. Centrar un div:**
```html
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6">Contenido centrado</div>
  </div>
</div>
```

**3. Card con botón al fondo:**
```html
<div class="card h-100">
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">Título</h5>
    <p class="card-text">Texto</p>
    <button class="btn btn-primary mt-auto">Ver más</button>
  </div>
</div>
```

**4. Navbar responsive básica:**
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Servicios</a></li>
      </ul>
    </div>
  </div>
</nav>
```

**5. Modal básico:**
```html
<!-- Botón que abre el modal -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#miModal">
  Abrir Modal
</button>

<!-- Modal -->
<div class="modal fade" id="miModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Título</h5>
        <button class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        Contenido del modal
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
```

**6. Formulario con validación:**
```html
<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" required>
    <div class="invalid-feedback">
      Por favor, introduce un email válido.
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```

**7. Grid responsive común (sidebar + main):**
```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-3">Sidebar</div>
    <div class="col-12 col-md-9">Contenido principal</div>
  </div>
</div>
```

**8. Espaciado rápido:**
```html
<!-- Margen superior de 3 -->
<div class="mt-3">Contenido</div>

<!-- Margen horizontal auto (centrar) -->
<div class="mx-auto" style="width: 200px;">Centrado</div>

<!-- Padding en todos los lados de 4 -->
<div class="p-4">Contenido</div>

<!-- Margen inferior de 5 -->
<div class="mb-5">Contenido</div>
```

---

### ⚡ Diferencias clave

| Concepto | CSS Normal | Bootstrap |
|----------|-----------|-----------|
| Centrar div | `margin: 0 auto;` | `mx-auto` |
| Display flex | `display: flex;` | `d-flex` |
| Justify center | `justify-content: center;` | `justify-content-center` |
| Margin top 20px | `margin-top: 20px;` | `mt-3` o `mt-4` |
| Width 50% | `width: 50%;` | `col-md-6` |
| Hide on mobile | Media query manual | `d-none d-md-block` |

---

### 🎓 Qué esperar en el examen

**Posibles ejercicios:**

1. **Grid System:**
   - Crear un layout de 3 columnas que se apile en móvil
   - Usar diferentes breakpoints para diferentes dispositivos
   - Centrar contenido con grid

2. **Componentes:**
   - Crear una navbar responsive
   - Implementar cards con imágenes y botones
   - Crear un modal funcional
   - Formulario con validación

3. **Sass:**
   - Personalizar colores de Bootstrap
   - Crear variables Sass
   - Usar nesting
   - Compilar Sass a CSS

4. **Responsive:**
   - Ocultar/mostrar elementos según tamaño de pantalla
   - Cambiar layout en diferentes breakpoints
   - Usar clases utilitarias responsive

5. **Integración:**
   - Proyecto completo con navbar + grid + cards + modal + formulario
   - Todo debe ser responsive
   - Personalizar con CSS o Sass

---

## ✨ Checklist final antes del examen

### Bootstrap Grid
- [ ] Sé usar el sistema de 12 columnas
- [ ] Conozco los breakpoints (sm, md, lg, xl)
- [ ] Puedo combinar clases responsive (col-12 col-md-6 col-lg-4)
- [ ] Sé usar gutters (g-*, gx-*, gy-*)
- [ ] Entiendo order-* y offset-*

### Componentes
- [ ] Puedo crear botones con variantes y tamaños
- [ ] Sé crear formularios con form-control y form-label
- [ ] Puedo implementar una navbar responsive
- [ ] Sé crear cards con imágenes y contenido
- [ ] Entiendo cómo funcionan los modales
- [ ] Puedo usar dropdown menus
- [ ] Sé implementar collapse/accordion

### Utilidades
- [ ] Conozco las clases de espaciado (m-*, p-*)
- [ ] Sé usar clases de display (d-none, d-block, d-flex)
- [ ] Entiendo flexbox utilities (justify-content-*, align-items-*)
- [ ] Conozco clases de texto (text-center, fs-*, fw-*)
- [ ] Sé usar colores (bg-*, text-*)
- [ ] Puedo ocultar/mostrar elementos responsive

### Sass
- [ ] Sé crear variables Sass ($variable: valor;)
- [ ] Entiendo nesting (selectores anidados)
- [ ] Puedo crear mixins básicos
- [ ] Sé sobrescribir variables de Bootstrap
- [ ] Entiendo cómo compilar Sass a CSS

### Responsive
- [ ] Sé crear layouts mobile-first
- [ ] Entiendo los breakpoints de Bootstrap
- [ ] Puedo adaptar diseños a diferentes dispositivos
- [ ] Sé usar d-none y d-*-block para visibilidad

### JavaScript Bootstrap
- [ ] Sé activar modales con data-bs-toggle
- [ ] Puedo inicializar tooltips
- [ ] Entiendo data-bs-target para componentes
- [ ] Sé usar collapse con data-bs-toggle

---

## 🚀 Último consejo

**Practica creando proyectos completos:**

1. Abre un nuevo archivo HTML
2. Incluye Bootstrap desde CDN
3. Crea de memoria:
   - Una navbar responsive
   - Un grid de 3 columnas
   - Cards con imágenes
   - Un modal
   - Un formulario

**Si puedes hacer esto sin mirar, estás listo para el examen.**

---

## 🔗 Recursos de Bootstrap

- **Bootstrap Docs**: https://getbootstrap.com/docs/5.3/
- **Bootstrap Icons**: https://icons.getbootstrap.com/
- **Bootstrap Examples**: https://getbootstrap.com/docs/5.3/examples/
- **Sass Documentation**: https://sass-lang.com/documentation/

---

**Creado para**: Repaso UD3 Diseño de Interfaces Web
**Incluye**: Bootstrap Grid, Componentes, Utilidades, Sass y Proyectos completos
**Estilo**: Basado en los ejercicios del profesor Miguel
**Total de ejercicios**: 60+ ejemplos prácticos con código comentado

---

¡Buena suerte en tu examen! 🎉
