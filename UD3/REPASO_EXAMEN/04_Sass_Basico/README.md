# 04 - Sass Básico

Guía completa de Sass para personalizar Bootstrap y crear estilos reutilizables.

---

## ¿Qué es Sass?

**Sass (Syntactically Awesome Style Sheets)** es un preprocesador de CSS que extiende las capacidades del CSS tradicional con características como variables, nesting, mixins y más.

**Ventajas:**
- Código más organizado y mantenible
- Reutilización de código con variables y mixins
- Anidamiento de selectores (nesting)
- Funciones matemáticas y de color
- Importación de archivos parciales
- Personalización fácil de frameworks como Bootstrap

---

## 1. VARIABLES

Las variables permiten almacenar valores reutilizables.

### Sintaxis
```scss
$nombre-variable: valor;
```

### Ejemplos
```scss
// Definir variables
$color-primary: #667eea;
$color-secondary: #764ba2;
$spacing-base: 1rem;
$font-size-large: 24px;
$border-radius: 8px;

// Usar variables
.button {
    background-color: $color-primary;
    padding: $spacing-base;
    font-size: $font-size-large;
    border-radius: $border-radius;
}

.card {
    border: 1px solid $color-secondary;
    margin-bottom: $spacing-base * 2; // Puedes hacer operaciones
}
```

### Tipos de variables
```scss
// Colores
$color-primary: #667eea;
$color-text: rgba(0, 0, 0, 0.8);

// Números
$spacing: 1rem;
$font-size: 16px;

// Strings
$font-family: 'Arial', sans-serif;

// Booleanos
$enable-shadows: true;

// Listas
$sizes: 1rem, 2rem, 3rem;

// Maps (objetos)
$colors: (
    "primary": #667eea,
    "secondary": #764ba2,
    "success": #10b981
);
```

---

## 2. NESTING (Anidamiento)

Permite anidar selectores de forma jerárquica, haciendo el código más legible.

### Sintaxis
```scss
.parent {
    property: value;

    .child {
        property: value;
    }
}
```

### Ejemplos
```scss
// Nesting básico
.card {
    background: white;
    padding: 20px;

    .card-title {
        font-size: 24px;
        color: blue;
    }

    .card-body {
        margin-top: 10px;

        p {
            line-height: 1.6;
        }
    }
}

// Se compila a:
.card { background: white; padding: 20px; }
.card .card-title { font-size: 24px; color: blue; }
.card .card-body { margin-top: 10px; }
.card .card-body p { line-height: 1.6; }
```

### Uso del & (referencia al padre)
```scss
.button {
    background: blue;
    color: white;

    // &:hover = .button:hover
    &:hover {
        background: darkblue;
    }

    // &.active = .button.active
    &.active {
        font-weight: bold;
    }

    // &__icon = .button__icon (BEM)
    &__icon {
        margin-right: 5px;
    }

    // &--large = .button--large (BEM)
    &--large {
        padding: 20px;
    }
}
```

### IMPORTANTE: No anides más de 3 niveles
```scss
// MAL - Difícil de mantener
.header {
    .nav {
        .nav-list {
            .nav-item {
                .nav-link {
                    // Demasiados niveles
                }
            }
        }
    }
}

// BIEN - Máximo 3 niveles
.header {
    .nav-list {
        .nav-item {
            color: blue;
        }
    }
}
```

---

## 3. MIXINS

Los mixins son bloques de código reutilizables, como funciones.

### Definir y usar mixins
```scss
// Definir mixin
@mixin nombre-mixin {
    property: value;
}

// Usar mixin
.clase {
    @include nombre-mixin;
}
```

### Ejemplos básicos
```scss
// Mixin sin parámetros
@mixin box-shadow {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card {
    @include box-shadow;
}

// Mixin con parámetros
@mixin button-style($bg-color, $text-color) {
    background-color: $bg-color;
    color: $text-color;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
}

// Usar con diferentes valores
.btn-primary {
    @include button-style(#007bff, white);
}

.btn-danger {
    @include button-style(#dc3545, white);
}
```

### Mixins con valores por defecto
```scss
@mixin border-radius($radius: 5px) {
    border-radius: $radius;
}

.box1 {
    @include border-radius; // Usa 5px por defecto
}

.box2 {
    @include border-radius(10px); // Usa 10px
}
```

### Mixins comunes y útiles
```scss
// Centrar con flexbox
@mixin center-flex {
    display: flex;
    justify-content: center;
    align-items: center;
}

// Truncar texto
@mixin text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

// Responsive
@mixin respond-to($breakpoint) {
    @if $breakpoint == mobile {
        @media (max-width: 768px) { @content; }
    } @else if $breakpoint == desktop {
        @media (min-width: 992px) { @content; }
    }
}

// Uso
.container {
    @include center-flex;

    @include respond-to(mobile) {
        padding: 1rem;
    }
}
```

---

## 4. FUNCIONES DE SASS

Sass incluye funciones integradas para manipular valores.

### Funciones de color
```scss
$color: #667eea;

.box {
    background: lighten($color, 20%);  // Aclara 20%
    border: darken($color, 20%);       // Oscurece 20%
    color: saturate($color, 30%);      // Aumenta saturación
    opacity: rgba($color, 0.5);        // Añade transparencia
}
```

### Funciones matemáticas
```scss
$spacing: 1rem;

.box {
    margin: $spacing * 2;              // 2rem
    padding: $spacing / 2;             // 0.5rem
    width: percentage(1/3);            // 33.33333%
}
```

---

## 5. IMPORT Y PARTIALS

Divide tu código en múltiples archivos para mejor organización.

### Estructura de archivos
```
scss/
├── _variables.scss    (variables globales)
├── _mixins.scss       (mixins reutilizables)
├── _base.scss         (estilos base)
├── _components.scss   (componentes)
└── main.scss          (archivo principal)
```

### Importar archivos
```scss
// main.scss
@import 'variables';    // Sin _ y sin .scss
@import 'mixins';
@import 'base';
@import 'components';
```

**Nota:** Los archivos que empiezan con `_` (underscore) son "partials" y no se compilan individualmente.

---

## 6. PERSONALIZAR BOOTSTRAP CON SASS

### Paso 1: Instalar dependencias
```bash
npm install sass bootstrap --save-dev
```

### Paso 2: Crear custom.scss
```scss
// custom.scss

// 1. Definir variables ANTES de importar Bootstrap
$primary: #667eea;
$secondary: #764ba2;
$success: #10b981;
$danger: #ef4444;

$border-radius: 8px;
$font-family-base: 'Arial', sans-serif;

// 2. Importar Bootstrap
@import "~bootstrap/scss/bootstrap";

// 3. Agregar estilos personalizados
.mi-clase {
    color: $primary;
    background: $secondary;
}
```

### Paso 3: Compilar
```bash
# Watch mode (recompilar automáticamente)
npx sass --watch scss/custom.scss:styles.css

# Compilar una vez
npx sass scss/custom.scss:styles.css

# Compilar comprimido (producción)
npx sass scss/custom.scss:styles.css --style=compressed
```

### Variables de Bootstrap que puedes sobrescribir
```scss
// Colores
$primary: #007bff;
$secondary: #6c757d;
$success: #28a745;
$danger: #dc3545;
$warning: #ffc107;
$info: #17a2b8;

// Espaciado
$spacer: 1rem;

// Tipografía
$font-family-base: system-ui, -apple-system, sans-serif;
$font-size-base: 1rem;
$line-height-base: 1.5;

// Botones
$btn-padding-y: 0.375rem;
$btn-padding-x: 0.75rem;
$btn-border-radius: 0.25rem;

// Cards
$card-border-radius: 0.25rem;
$card-spacer-y: 1rem;
$card-spacer-x: 1rem;

// Grid
$grid-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    xxl: 1400px
);
```

---

## 7. METODOLOGÍA BEM CON SASS

BEM (Block Element Modifier) funciona perfecto con Sass.

```scss
// Block
.card {
    background: white;
    padding: 20px;

    // Element
    &__title {
        font-size: 24px;
        color: blue;
    }

    &__body {
        margin-top: 10px;
    }

    &__button {
        padding: 10px 20px;
    }

    // Modifier
    &--large {
        padding: 40px;
    }

    &--dark {
        background: black;
        color: white;
    }
}

// Se compila a:
.card { ... }
.card__title { ... }
.card__body { ... }
.card__button { ... }
.card--large { ... }
.card--dark { ... }
```

---

## 8. COMPILACIÓN DE SASS

### Con npm scripts
```json
// package.json
{
    "scripts": {
        "sass": "sass --watch scss/custom.scss:styles.css",
        "sass-build": "sass scss/custom.scss:styles.css",
        "sass-compressed": "sass scss/custom.scss:styles.css --style=compressed"
    }
}
```

```bash
# Ejecutar
npm run sass           # Watch mode
npm run sass-build     # Compilar una vez
npm run sass-compressed # Compilar comprimido
```

### Estilos de salida
- `expanded` (por defecto) - Legible
- `compressed` - Minificado (producción)

---

## TIPS IMPORTANTES PARA EL EXAMEN

1. **Variables**: Usa `$nombre-variable` para definirlas. Define variables de Bootstrap ANTES de importar.

2. **Nesting**: Máximo 3 niveles. Usa `&` para referencia al padre.

3. **Mixins**: Define con `@mixin nombre`, usa con `@include nombre`.

4. **Import**: Los archivos parciales empiezan con `_`. Importa sin `_` y sin `.scss`.

5. **Bootstrap**: Importa Bootstrap DESPUÉS de definir tus variables para sobrescribir.

6. **Compilación**: Usa `sass --watch` para desarrollo, `--style=compressed` para producción.

7. **BEM**: Usa `&__element` y `&--modifier` para BEM.

8. **Funciones**: `lighten()`, `darken()`, `rgba()` para colores.

---

## COMANDOS ESENCIALES

```bash
# Instalar Sass
npm install sass --save-dev

# Watch mode (recompilar automáticamente)
npx sass --watch scss/custom.scss:styles.css

# Compilar una vez
npx sass scss/custom.scss:styles.css

# Compilar comprimido
npx sass scss/custom.scss:styles.css --style=compressed

# Instalar Bootstrap
npm install bootstrap
```

---

[⬅️ Volver al índice principal](../README.md)