# 🎯 GUÍA DE USO - Carpeta de Repaso UD3

## 📂 Ubicación
`C:\Users\Usuario\Documents\GitHub\2ºDAW\DisenioInterfacesWeb\UD3\REPASO_EXAMEN`

---

## 🚀 INICIO RÁPIDO

### **Opción 1: Navegación Visual** ⭐ RECOMENDADO
Abre este archivo en tu navegador:
```
INDEX.html
```
Te mostrará todas las carpetas con descripción, prioridad y tiempo estimado.

### **Opción 2: Repaso Express** ⚡ ANTES DEL EXAMEN
Abre este archivo:
```
00_CHULETA_COMPLETA/index.html
```
Todo Bootstrap resumido en una sola página para repaso rápido (15 min).

---

## 📚 CONTENIDO COMPLETO

### 🟢 **01_Bootstrap_Grid/**
**Prioridad: ALTA** | Tiempo: 30 min

**Archivos:**
- `index.html` - 12 ejercicios visuales del Grid System
- `README.md` - Guía completa con sintaxis y patrones

**Qué aprenderás:**
- Sistema de 12 columnas
- Breakpoints responsive (xs, sm, md, lg, xl, xxl)
- Gutters (g-*, gx-*, gy-*)
- Alineación (align-items, justify-content)
- Orden (order-*)
- Offset (offset-*)
- Cuadrículas anidadas

**Patrones clave del examen:**
- Layout 3 columnas responsive
- Sidebar + Contenido
- Grid para cards/productos
- Centrar divs

---

### 🟢 **02_Componentes_Bootstrap/**
**Prioridad: ALTA** | Tiempo: 45 min

**Archivos:**
- `index.html` - Página COMPLETA con TODOS los componentes
- `README.md` - Sintaxis de cada componente

**Qué incluye:**
✅ Navbar responsiva sticky con collapse
✅ Hero section con gradiente
✅ 6 Cards con imágenes (h-100, d-flex flex-column, mt-auto)
✅ **6 MODALES** diferentes con headers de colores, imágenes, descripciones detalladas
✅ **Carousel** con 4 slides, indicadores, controles, captions
✅ List group con 5 items
✅ Dropdown menu funcional
✅ **Formulario completo** con validación (nombre, email, select, textarea, checkbox)
✅ **Tooltips** con JavaScript de inicialización
✅ Footer con enlaces
✅ JavaScript completo para todo

**JavaScript incluido:**
```javascript
// Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el))

// Carousel con opciones
const carousel = new bootstrap.Carousel(document.getElementById('carousel'), {
  interval: 3000,
  pause: 'hover',
  wrap: true
})

// Validación de formularios
// ... código completo incluido
```

---

### 🟡 **03_Utilidades_Bootstrap/**
**Prioridad: MEDIA** | Tiempo: 25 min

**Archivos:**
- `index.html` - Ejemplos visuales de utilidades
- `README.md` - Tabla de referencia completa

**Qué incluye:**
- Espaciado: `m-*`, `p-*`, `mx-*`, `my-*`, `mt-*`, `mb-*`, `ms-*`, `me-*`
- Display: `d-none`, `d-block`, `d-flex`, `d-md-block`
- Flexbox: `justify-content-*`, `align-items-*`, `flex-direction-*`
- Texto: `text-center`, `fs-*`, `fw-bold`, `text-uppercase`
- Colores: `bg-*`, `text-*`
- Bordes: `border`, `rounded`, `shadow`
- Ancho/Alto: `w-*`, `h-*`

**Tabla de referencia rápida incluida**

---

### 🟡 **04_Sass_Basico/**
**Prioridad: MEDIA** | Tiempo: 20 min

**Archivos:**
- `index.html` - Página explicativa
- `scss/custom.scss` - Archivo Sass completo con comentarios
- `styles.css` - CSS compilado
- `package.json` - Script de compilación
- `README.md` - Guía de Sass

**Qué aprenderás:**
- Variables Sass
- Nesting (anidamiento)
- Mixins reutilizables
- Personalización de Bootstrap
- Compilación con npm

**Código ejemplo incluido:**
```scss
// Variables
$primary: #007bff;
$font-size-base: 1rem;

// Nesting
.navbar {
  background: $primary;

  .nav-link {
    color: white;

    &:hover {
      color: #ddd;
    }
  }
}

// Mixins
@mixin button-style($bg, $color) {
  background: $bg;
  color: $color;
  padding: 10px 20px;
}

// Personalizar Bootstrap
$primary: #ff0000;
@import "bootstrap/scss/bootstrap";
```

---

### 🟢 **05_Animaciones_Bootstrap/**
**Prioridad: BAJA** | Tiempo: 20 min

**Archivos:**
- `index.html` - Ejemplos interactivos
- `styles.css` - Animaciones CSS
- `README.md` - Guía de animaciones

**Qué incluye:**
- Transiciones CSS (hover effects)
- Animaciones @keyframes (fade, slide, bounce, pulse, rotate)
- Timing functions comparativas
- Transform (translate, scale, rotate, skew)
- Ejemplos prácticos (card hover, button ripple, flip card)

---

### 🟢 **06_Layout_Completo/** ⭐ PROYECTO INTEGRADOR
**Prioridad: ALTA** | Tiempo: 40 min

**Archivos:**
- `index.html` - **PROYECTO COMPLETO** estilo mercadillo navideño

**Qué incluye TODO:**
✅ Navbar sticky responsive con modal
✅ **Carousel hero** con 4 slides, captions, indicadores, controles
✅ Grid responsive de **6 cards** (col-lg-4 col-md-6 col-sm-12, h-100, d-flex flex-column, mt-auto)
✅ **6 MODALES** completos (modal-dialog-centered) con headers de colores, imágenes, descripciones
✅ Section con **list-group** de 4 actividades
✅ Sidebar con card especial (bg-primary, imagen, tooltip)
✅ **Formulario con validación completa** (row g-3, col-lg-6, valid/invalid-feedback)
✅ Footer con gradiente oscuro
✅ **Botón flotante** con funcionalidad JavaScript (genera partículas que caen)
✅ **JavaScript completo:**
   - Carousel instance con opciones (interval, pause, wrap)
   - Tooltips inicializados
   - Validación de formularios
   - Sistema de partículas/efectos
✅ **CSS personalizado completo:**
   - Variables CSS
   - Animaciones @keyframes (fadeInUp, fall)
   - Transiciones en todos los elementos
   - Hover effects avanzados
   - Sticky sidebar
   - Responsive completo

**Este es el archivo más importante para ver TODO integrado**

---

### ⭐ **00_CHULETA_COMPLETA/**
**Prioridad: ALTA** | Tiempo: 15 min

**Archivos:**
- `index.html` - TODO resumido en una página

**Perfecto para:**
- Repaso rápido antes del examen
- Tener todas las sintaxis a mano
- Copiar código rápidamente

**Incluye:**
- Grid System resumido
- Todos los componentes principales
- Tabla de utilidades
- JavaScript essentials
- Patrones del examen

---

## 📅 PLAN DE ESTUDIO RECOMENDADO

### **Día 1: Fundamentos (2 horas)**
1. ✅ Chuleta Completa (lectura rápida) - **15 min**
2. ✅ 01_Bootstrap_Grid - **45 min**
3. ✅ 02_Componentes_Bootstrap - **60 min**

### **Día 2: Práctica (1.5 horas)**
1. ✅ 03_Utilidades_Bootstrap - **25 min**
2. ✅ 04_Sass_Basico - **20 min**
3. ✅ 06_Layout_Completo (analizar código) - **40 min**

### **Día 3: Repaso (1 hora)**
1. ✅ 05_Animaciones_Bootstrap - **20 min**
2. ✅ Chuleta Completa (repaso) - **20 min**
3. ✅ Practicar código desde cero - **20 min**

### **30 minutos antes del examen:**
1. ✅ Chuleta Completa - **15 min**
2. ✅ Tabla de breakpoints - **5 min**
3. ✅ Componentes más usados - **10 min**

---

## 🎯 ARCHIVOS MÁS IMPORTANTES

### **Top 3 para el examen:**

1. **00_CHULETA_COMPLETA/index.html**
   - Repaso express de todo

2. **06_Layout_Completo/index.html**
   - Ver TODO integrado en un proyecto real
   - Copiar patrones directamente

3. **02_Componentes_Bootstrap/index.html**
   - Todos los componentes con código funcional
   - Modales, carousel, formularios, tooltips

---

## 💡 CONSEJOS DE ESTUDIO

### **Cómo usar estos archivos:**
1. ✅ Abre los archivos HTML en el navegador
2. ✅ Redimensiona la ventana para ver responsive
3. ✅ Abre DevTools (F12) y modifica valores
4. ✅ Copia el código y prueba a recrearlo desde cero
5. ✅ Lee TODOS los comentarios HTML/CSS/JavaScript

### **Práctica efectiva:**
1. ✅ Intenta escribir código sin mirar
2. ✅ Crea un proyecto nuevo desde cero
3. ✅ Combina diferentes componentes
4. ✅ Experimenta con las clases

---

## ✅ CHECKLIST DEL EXAMEN

Antes del examen, asegúrate de que puedes hacer esto SIN MIRAR:

- [ ] Crear un grid responsive de 3 columnas
- [ ] Hacer una navbar con collapse
- [ ] Crear cards con h-100 y mt-auto
- [ ] Implementar un modal básico
- [ ] Crear un carousel con controles
- [ ] Hacer un formulario con validación
- [ ] Usar clases de espaciado (m-*, p-*)
- [ ] Centrar elementos (mx-auto, justify-content-center)
- [ ] Ocultar/mostrar según pantalla (d-none d-md-block)
- [ ] Personalizar Bootstrap con Sass variables

---

## 🔧 CÓDIGO ESENCIAL PARA COPIAR

### **Estructura HTML básica con Bootstrap:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Proyecto</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <!-- Tu contenido aquí -->

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### **Grid responsive típico:**
```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">Columna 1</div>
    <div class="col-12 col-md-6 col-lg-4">Columna 2</div>
    <div class="col-12 col-md-6 col-lg-4">Columna 3</div>
  </div>
</div>
```

### **Card con botón al fondo:**
```html
<div class="card h-100">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">Título</h5>
    <p class="card-text">Texto</p>
    <button class="btn btn-primary mt-auto">Ver más</button>
  </div>
</div>
```

### **Modal básico:**
```html
<!-- Botón -->
<button data-bs-toggle="modal" data-bs-target="#miModal">Abrir</button>

<!-- Modal -->
<div class="modal fade" id="miModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Título</h5>
        <button class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">Contenido</div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
```

### **JavaScript para tooltips:**
```javascript
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el))
```

---

## 🎓 RESUMEN FINAL

**Tienes TODO lo necesario para aprobar el examen:**

✅ **60+ ejercicios** prácticos con código funcional
✅ **Ejemplos reales** como los del profesor Miguel
✅ **Código comentado** "para tontos"
✅ **JavaScript completo** para componentes interactivos
✅ **Proyectos integradores** que combinan todo
✅ **Guías de referencia** rápida
✅ **Plan de estudio** organizado

**Empieza por `INDEX.html` y sigue el plan de estudio.**

**¡Mucha suerte en el examen! 🚀**
