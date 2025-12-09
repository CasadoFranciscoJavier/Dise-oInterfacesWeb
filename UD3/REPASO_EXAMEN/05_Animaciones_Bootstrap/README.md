# 05 - Animaciones Bootstrap y CSS

Guía completa de transiciones, animaciones y transformaciones para el examen.

---

## 1. TRANSICIONES (transition)

Las transiciones suavizan los cambios entre estados CSS (hover, focus, active, etc.)

### Sintaxis completa
```css
transition: property duration timing-function delay;
```

### Sintaxis con múltiples propiedades
```css
.elemento {
    transition-property: background-color, transform;
    transition-duration: 0.3s, 0.5s;
    transition-timing-function: ease, ease-in-out;
    transition-delay: 0s, 0.1s;
}

/* Shorthand (forma corta) */
.elemento {
    transition: background-color 0.3s ease 0s,
                transform 0.5s ease-in-out 0.1s;
}

/* Para todas las propiedades */
.elemento {
    transition: all 0.3s ease;
}
```

### Ejemplos prácticos

#### Botón con hover
```css
.btn {
    background: #667eea;
    color: white;
    padding: 10px 20px;
    transition: all 0.3s ease;
}

.btn:hover {
    background: #764ba2;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}
```

#### Card con elevación
```css
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
}
```

---

## 2. ANIMACIONES (@keyframes)

Las animaciones permiten crear movimientos complejos y repetitivos.

### Sintaxis de @keyframes
```css
/* Forma simple (from-to) */
@keyframes nombre-animacion {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* Forma con porcentajes (más control) */
@keyframes nombre-animacion {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Aplicar animación
```css
.elemento {
    animation: nombre-animacion 1s ease-out;
}

/* Sintaxis completa */
.elemento {
    animation-name: nombre-animacion;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: 1;      /* O infinite */
    animation-direction: normal;        /* normal, reverse, alternate, alternate-reverse */
    animation-fill-mode: forwards;      /* none, forwards, backwards, both */
    animation-play-state: running;      /* running, paused */
}
```

### Animaciones comunes

#### Fade In
```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 1s ease-out;
}
```

#### Slide In
```css
@keyframes slideIn {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

.slide-in {
    animation: slideIn 0.5s ease-out;
}
```

#### Bounce
```css
@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}

.bounce {
    animation: bounce 1s ease-in-out infinite;
}
```

#### Pulse (crecer y encoger)
```css
@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
}

.pulse {
    animation: pulse 1.5s ease-in-out infinite;
}
```

#### Rotate (rotar)
```css
@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.rotate {
    animation: rotate 2s linear infinite;
}
```

#### Shake (sacudir)
```css
@keyframes shake {
    0%, 100% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-10px);
    }
    50% {
        transform: translateX(10px);
    }
    75% {
        transform: translateX(-10px);
    }
}

.shake {
    animation: shake 0.5s ease-in-out;
}
```

---

## 3. TIMING FUNCTIONS (Funciones de tiempo)

Controlan la velocidad de la animación a lo largo del tiempo.

### Funciones predefinidas
```css
linear          /* Velocidad constante */
ease            /* Lento al inicio y final (por defecto) */
ease-in         /* Lento al inicio, rápido al final */
ease-out        /* Rápido al inicio, lento al final */
ease-in-out     /* Lento al inicio y final (más suave que ease) */
```

### Custom timing function
```css
/* cubic-bezier(x1, y1, x2, y2) */
transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Ejemplos comunes */
cubic-bezier(0.25, 0.1, 0.25, 1)     /* ease */
cubic-bezier(0.42, 0, 1, 1)          /* ease-in */
cubic-bezier(0, 0, 0.58, 1)          /* ease-out */
cubic-bezier(0.42, 0, 0.58, 1)       /* ease-in-out */
```

### Cuándo usar cada una
- **linear**: Para rotaciones continuas, animaciones de loader
- **ease**: Uso general (es el defecto)
- **ease-out**: Para efectos hover (rápido al inicio, suave al final)
- **ease-in-out**: Para animaciones de entrada/salida

---

## 4. TRANSFORM (Transformaciones)

Transform permite modificar elementos sin afectar el flujo del documento.

### Translate (mover)
```css
/* Mover horizontal */
transform: translateX(50px);

/* Mover vertical */
transform: translateY(-20px);

/* Ambos */
transform: translate(50px, -20px);

/* 3D */
transform: translateZ(10px);
transform: translate3d(50px, -20px, 10px);
```

### Scale (escalar)
```css
/* Escalar proporcionalmente */
transform: scale(1.5);        /* 150% */
transform: scale(0.5);        /* 50% */

/* X e Y independientes */
transform: scale(1.2, 0.8);   /* X=120%, Y=80% */
transform: scaleX(1.5);       /* Solo horizontal */
transform: scaleY(0.8);       /* Solo vertical */
```

### Rotate (rotar)
```css
/* Rotar en grados */
transform: rotate(45deg);
transform: rotate(-90deg);

/* Rotar en diferentes ejes (3D) */
transform: rotateX(45deg);
transform: rotateY(90deg);
transform: rotateZ(180deg);
```

### Skew (sesgar)
```css
/* Sesgar horizontal */
transform: skewX(10deg);

/* Sesgar vertical */
transform: skewY(5deg);

/* Ambos */
transform: skew(10deg, 5deg);
```

### Combinar transformaciones
```css
/* El ORDEN importa */
transform: translate(50px, -20px) rotate(45deg) scale(1.2);
```

### Transform origin (punto de origen)
```css
/* Por defecto es el centro (50% 50%) */
transform-origin: center;

/* Cambiar el punto de origen */
transform-origin: top left;
transform-origin: bottom right;
transform-origin: 0 0;
transform-origin: 50% 100%;
```

---

## 5. COMPONENTES ANIMADOS DE BOOTSTRAP

### Spinner (indicador de carga)
```html
<!-- Spinner border -->
<div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<!-- Spinner grow -->
<div class="spinner-grow" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<!-- Con colores -->
<div class="spinner-border text-primary" role="status"></div>
<div class="spinner-border text-success" role="status"></div>
<div class="spinner-border text-danger" role="status"></div>

<!-- Tamaños -->
<div class="spinner-border spinner-border-sm" role="status"></div>
```

### Progress bar animado
```html
<div class="progress" role="progressbar">
    <div class="progress-bar progress-bar-striped progress-bar-animated"
         style="width: 75%"></div>
</div>
```

### Collapse (con animación)
```html
<button data-bs-toggle="collapse" data-bs-target="#collapseExample">
    Toggle
</button>
<div class="collapse" id="collapseExample">
    Contenido colapsable
</div>
```

### Modal (con fade)
```html
<div class="modal fade" id="exampleModal">
    <!-- Contenido del modal -->
</div>
```

---

## 6. EJEMPLOS PRÁCTICOS PARA EL EXAMEN

### Card que se eleva al hover
```css
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
}
```

### Botón que crece al hover
```css
.btn {
    transition: transform 0.2s ease;
}

.btn:hover {
    transform: scale(1.05);
}
```

### Flip card (voltear al hover)
```css
.flip-card {
    perspective: 1000px;
}

.flip-card-inner {
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    backface-visibility: hidden;
}

.flip-card-back {
    transform: rotateY(180deg);
}
```

### Hamburger menu animado
```css
.hamburger span {
    transition: 0.25s ease-in-out;
}

.hamburger.active span:nth-child(1) {
    transform: rotate(135deg);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-135deg);
}
```

### Loading con animación infinita
```css
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.loader {
    animation: spin 1s linear infinite;
}
```

---

## TIPS IMPORTANTES PARA EL EXAMEN

1. **Transitions vs Animations**:
   - `transition`: Para cambios entre estados (hover, focus)
   - `animation`: Para movimientos complejos o infinitos

2. **Performance**:
   - Anima solo `transform` y `opacity` para mejor rendimiento
   - Evita animar `width`, `height`, `margin`, `padding`

3. **Timing functions**:
   - `ease-out`: Para hover (rápido inicio, suave final)
   - `ease-in-out`: Para animaciones de entrada/salida
   - `linear`: Para rotaciones continuas

4. **Transform**:
   - No afecta el flujo del documento
   - Mejor que margin/padding para animaciones
   - El orden importa: `translate` → `rotate` → `scale`

5. **Bootstrap**:
   - Usa `spinner-border` para indicadores de carga
   - Añade `fade` a modales para animación
   - Usa `progress-bar-animated` para barras de progreso

6. **Sintaxis rápida**:
   ```css
   /* Transición suave para todo */
   transition: all 0.3s ease;

   /* Elevación al hover */
   transform: translateY(-5px);

   /* Animación infinita */
   animation: nombre 1s ease infinite;
   ```

---

## PLANTILLA RÁPIDA

```css
/* Hover suave */
.elemento {
    transition: all 0.3s ease;
}

.elemento:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

/* Animación fade in */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 0.6s ease-out;
}
```

---

[⬅️ Volver al índice principal](../README.md)