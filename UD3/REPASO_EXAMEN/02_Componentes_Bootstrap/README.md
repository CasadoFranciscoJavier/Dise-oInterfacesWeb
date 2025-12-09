# 02 - Componentes Bootstrap

Guía completa de todos los componentes de Bootstrap que necesitas para el examen.

---

## 1. BOTONES

### Variantes básicas
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>
<button class="btn btn-link">Link</button>
```

### Botones outline (contorno)
```html
<button class="btn btn-outline-primary">Outline Primary</button>
<button class="btn btn-outline-success">Outline Success</button>
<button class="btn btn-outline-danger">Outline Danger</button>
```

### Tamaños
```html
<button class="btn btn-primary btn-lg">Grande</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-sm">Pequeño</button>
```

### Estados
```html
<button class="btn btn-primary active">Activo</button>
<button class="btn btn-primary" disabled>Deshabilitado</button>
<button class="btn btn-primary w-100">Ancho completo</button>
```

---

## 2. FORMULARIOS

### Input básico con label
```html
<div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" placeholder="nombre@ejemplo.com">
</div>
```

### Input con validación
```html
<div class="mb-3">
    <label for="nombre" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="nombre" required>
    <div class="invalid-feedback">Por favor, introduce tu nombre.</div>
    <div class="valid-feedback">¡Perfecto!</div>
</div>
```

### Select (desplegable)
```html
<select class="form-select" id="select">
    <option value="">Elige...</option>
    <option value="1">Opción 1</option>
    <option value="2">Opción 2</option>
</select>
```

### Textarea
```html
<textarea class="form-control" rows="3"></textarea>
```

### Checkbox
```html
<div class="form-check">
    <input type="checkbox" class="form-check-input" id="check">
    <label class="form-check-label" for="check">
        Acepto los términos
    </label>
</div>
```

### Radio buttons
```html
<div class="form-check">
    <input class="form-check-input" type="radio" name="radio" id="radio1">
    <label class="form-check-label" for="radio1">Opción 1</label>
</div>
<div class="form-check">
    <input class="form-check-input" type="radio" name="radio" id="radio2">
    <label class="form-check-label" for="radio2">Opción 2</label>
</div>
```

### Tamaños de inputs
```html
<input class="form-control form-control-lg" type="text" placeholder="Grande">
<input class="form-control" type="text" placeholder="Normal">
<input class="form-control form-control-sm" type="text" placeholder="Pequeño">
```

---

## 3. NAVBAR RESPONSIVE

### Estructura completa de navbar
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <!-- Logo/Brand -->
        <a class="navbar-brand" href="#">Mi Web</a>

        <!-- Botón hamburguesa (móvil) -->
        <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menú que se colapsa -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Servicios</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#"
                       data-bs-toggle="dropdown">Más</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Opción 1</a></li>
                        <li><a class="dropdown-item" href="#">Opción 2</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

**Clases importantes:**
- `navbar-expand-lg` - Se expande en pantallas grandes
- `navbar-dark` - Texto blanco (para fondos oscuros)
- `navbar-light` - Texto oscuro (para fondos claros)
- `bg-dark`, `bg-light`, `bg-primary` - Colores de fondo
- `ms-auto` - Alinea el menú a la derecha

---

## 4. CARDS

### Card básica
```html
<div class="card">
    <img src="imagen.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Texto de la card.</p>
        <a href="#" class="btn btn-primary">Ver más</a>
    </div>
</div>
```

### Cards con altura igual (IMPORTANTE PARA EXAMEN)
```html
<div class="row">
    <div class="col-md-4">
        <div class="card h-100 d-flex flex-column">
            <img src="imagen.jpg" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">Título</h5>
                <p class="card-text">Texto...</p>
                <a href="#" class="btn btn-primary mt-auto">Ver más</a>
            </div>
        </div>
    </div>
</div>
```

**Explicación:**
- `h-100` - Altura 100% (todas las cards igual de altas)
- `d-flex flex-column` - Flexbox en columna
- `mt-auto` - Margen-top automático (empuja el botón al final)

### Card con header y footer
```html
<div class="card">
    <div class="card-header">Header</div>
    <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Contenido</p>
    </div>
    <div class="card-footer">Footer</div>
</div>
```

---

## 5. MODALES

### Estructura completa de modal
```html
<!-- Botón para abrir el modal -->
<button type="button" class="btn btn-primary"
        data-bs-toggle="modal" data-bs-target="#miModal">
    Abrir Modal
</button>

<!-- Modal -->
<div class="modal fade" id="miModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Título del Modal</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <p>Contenido del modal</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Cerrar
                </button>
                <button type="button" class="btn btn-primary">Guardar</button>
            </div>
        </div>
    </div>
</div>
```

**Clases importantes:**
- `modal fade` - Clase principal del modal
- `modal-dialog` - Contenedor del diálogo
- `modal-content` - Contenido del modal
- `data-bs-toggle="modal"` - Abre el modal
- `data-bs-target="#miModal"` - ID del modal a abrir
- `data-bs-dismiss="modal"` - Cierra el modal

---

## 6. DROPDOWN MENUS

### Dropdown básico
```html
<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button"
            data-bs-toggle="dropdown">
        Dropdown button
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Acción</a></li>
        <li><a class="dropdown-item" href="#">Otra acción</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Algo más</a></li>
    </ul>
</div>
```

---

## 7. COLLAPSE Y ACCORDION

### Collapse simple
```html
<button class="btn btn-primary" type="button"
        data-bs-toggle="collapse" data-bs-target="#collapseExample">
    Toggle Collapse
</button>
<div class="collapse" id="collapseExample">
    <div class="card card-body">
        Contenido colapsable
    </div>
</div>
```

### Accordion (varios collapse)
```html
<div class="accordion" id="accordionExample">
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseOne">
                Accordion Item #1
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show"
             data-bs-parent="#accordionExample">
            <div class="accordion-body">
                Contenido del primer item
            </div>
        </div>
    </div>
    <!-- Más accordion-item aquí -->
</div>
```

---

## 8. LIST GROUPS

### List group básico
```html
<ul class="list-group">
    <li class="list-group-item">Item 1</li>
    <li class="list-group-item active">Item activo</li>
    <li class="list-group-item disabled">Item deshabilitado</li>
</ul>
```

### List group con enlaces
```html
<div class="list-group">
    <a href="#" class="list-group-item list-group-item-action active">
        Enlace activo
    </a>
    <a href="#" class="list-group-item list-group-item-action">Enlace 2</a>
</div>
```

### List group con colores
```html
<ul class="list-group">
    <li class="list-group-item list-group-item-primary">Primary</li>
    <li class="list-group-item list-group-item-success">Success</li>
    <li class="list-group-item list-group-item-danger">Danger</li>
</ul>
```

---

## 9. CAROUSEL

### Carousel básico
```html
<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="imagen1.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="imagen2.jpg" class="d-block w-100" alt="...">
        </div>
    </div>
    <button class="carousel-control-prev" type="button"
            data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button"
            data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
    </button>
</div>
```

---

## 10. TOOLTIPS

### Tooltip básico
```html
<button type="button" class="btn btn-secondary"
        data-bs-toggle="tooltip" data-bs-placement="top"
        title="Texto del tooltip">
    Hover me
</button>

<script>
// IMPORTANTE: Los tooltips necesitan inicialización con JavaScript
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
</script>
```

**Posiciones:**
- `data-bs-placement="top"` - Arriba
- `data-bs-placement="bottom"` - Abajo
- `data-bs-placement="left"` - Izquierda
- `data-bs-placement="right"` - Derecha

---

## TIPS IMPORTANTES PARA EL EXAMEN

1. **Formularios**: Siempre usa `form-control` en inputs, `form-label` en labels, y `mb-3` para espaciado.

2. **Cards**: Para cards con altura igual, usa `h-100`, `d-flex flex-column` en la card, y `mt-auto` en el botón.

3. **Navbar**: No olvides `navbar-toggler` para el botón hamburguesa y `collapse navbar-collapse` para el menú.

4. **Modales**: Necesitan `data-bs-toggle="modal"` y `data-bs-target="#idModal"` en el botón.

5. **Tooltips**: SIEMPRE necesitan JavaScript para inicializarse.

6. **Validación**: Añade `required` a los inputs y usa `invalid-feedback` para mensajes de error.

---

[⬅️ Volver al índice principal](../README.md)