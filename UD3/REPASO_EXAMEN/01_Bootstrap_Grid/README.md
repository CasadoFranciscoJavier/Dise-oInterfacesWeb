# 📐 Bootstrap Grid System - Guía de Repaso

## ¿Qué es el Grid System?

El **Grid System** de Bootstrap es un sistema de cuadrícula responsive basado en **12 columnas** que utiliza **flexbox**. Es la base para crear layouts adaptables a cualquier dispositivo.

## Conceptos Fundamentales

### 1. Estructura Básica

```html
<div class="container">     <!-- Contenedor principal -->
  <div class="row">          <!-- Fila -->
    <div class="col">        <!-- Columna -->
      Contenido
    </div>
  </div>
</div>
```

**Elementos esenciales:**
- `container`: Contenedor con ancho máximo y centrado
- `container-fluid`: Contenedor de ancho completo (100%)
- `row`: Fila que contiene columnas
- `col`: Columna flexible

---

### 2. Sistema de 12 Columnas

Bootstrap divide el ancho en **12 columnas**. Puedes combinarlas para crear el layout que necesites:

```html
<!-- 3 columnas iguales (4+4+4=12) -->
<div class="row">
  <div class="col-4">Columna 1</div>
  <div class="col-4">Columna 2</div>
  <div class="col-4">Columna 3</div>
</div>

<!-- Sidebar + Contenido (3+9=12) -->
<div class="row">
  <div class="col-3">Sidebar</div>
  <div class="col-9">Contenido</div>
</div>

<!-- 2 columnas (6+6=12) -->
<div class="row">
  <div class="col-6">Mitad izquierda</div>
  <div class="col-6">Mitad derecha</div>
</div>
```

---

### 3. Breakpoints Responsive

Bootstrap define 6 breakpoints para diferentes tamaños de pantalla:

| Breakpoint | Tamaño | Clase | Dispositivo |
|------------|--------|-------|-------------|
| Extra small | < 576px | `col-` | Móvil (portrait) |
| Small | ≥ 576px | `col-sm-` | Móvil (landscape) |
| Medium | ≥ 768px | `col-md-` | Tablet |
| Large | ≥ 992px | `col-lg-` | Desktop |
| Extra large | ≥ 1200px | `col-xl-` | Desktop grande |
| Extra extra large | ≥ 1400px | `col-xxl-` | Pantalla grande |

**Ejemplo de uso combinado (Mobile First):**

```html
<div class="row">
  <div class="col-12 col-md-6 col-lg-4">
    Columna responsive
  </div>
</div>
```

**Cómo se comporta:**
- Móvil (< 768px): ocupa 12 columnas (ancho completo)
- Tablet (≥ 768px): ocupa 6 columnas (mitad del ancho)
- Desktop (≥ 992px): ocupa 4 columnas (un tercio del ancho)

---

### 4. Columnas Automáticas

Usando solo `col` sin número, las columnas se distribuyen equitativamente:

```html
<div class="row">
  <div class="col">Columna 1</div>
  <div class="col">Columna 2</div>
  <div class="col">Columna 3</div>
</div>
```

Las 3 columnas ocuparán el mismo espacio (33.33% cada una).

---

### 5. Gutters (Espaciado entre Columnas)

Controla el espacio entre columnas con clases `g-*`:

```html
<!-- Sin espaciado -->
<div class="row g-0">
  <div class="col">Sin espacio</div>
  <div class="col">Sin espacio</div>
</div>

<!-- Espaciado grande -->
<div class="row g-5">
  <div class="col">Con mucho espacio</div>
  <div class="col">Con mucho espacio</div>
</div>

<!-- Solo espaciado horizontal -->
<div class="row gx-4">
  <div class="col">Espacio horizontal</div>
  <div class="col">Espacio horizontal</div>
</div>

<!-- Solo espaciado vertical -->
<div class="row gy-3">
  <div class="col-12">Fila 1</div>
  <div class="col-12">Fila 2</div>
</div>
```

**Valores disponibles:** `0`, `1`, `2`, `3`, `4`, `5` (de menor a mayor espaciado)

---

### 6. Alineación con Flexbox

#### Alineación Vertical (`align-items-*`)

```html
<!-- Alineación superior -->
<div class="row align-items-start">
  <div class="col">Arriba</div>
</div>

<!-- Alineación centrada -->
<div class="row align-items-center">
  <div class="col">Centro</div>
</div>

<!-- Alineación inferior -->
<div class="row align-items-end">
  <div class="col">Abajo</div>
</div>
```

#### Alineación Horizontal (`justify-content-*`)

```html
<!-- Centrar columnas -->
<div class="row justify-content-center">
  <div class="col-4">Centrado</div>
</div>

<!-- Espacio entre columnas -->
<div class="row justify-content-between">
  <div class="col-3">Izquierda</div>
  <div class="col-3">Derecha</div>
</div>

<!-- Espacio alrededor -->
<div class="row justify-content-around">
  <div class="col-3">Columna 1</div>
  <div class="col-3">Columna 2</div>
</div>
```

---

### 7. Orden de Columnas (`order-*`)

Cambia el orden visual sin modificar el HTML:

```html
<div class="row">
  <div class="col order-3">Primero en HTML, tercero visual</div>
  <div class="col order-1">Segundo en HTML, primero visual</div>
  <div class="col order-2">Tercero en HTML, segundo visual</div>
</div>
```

**Valores:** `order-1`, `order-2`, `order-3`, `order-4`, `order-5`

También responsive: `order-md-1`, `order-lg-2`, etc.

---

### 8. Offset (Desplazamiento)

Desplaza columnas hacia la derecha:

```html
<!-- Centrar una columna con offset -->
<div class="row">
  <div class="col-4 offset-4">Columna centrada</div>
</div>

<!-- Dejar espacio a la izquierda -->
<div class="row">
  <div class="col-3 offset-2">Desplazada 2 columnas</div>
</div>
```

También responsive: `offset-md-3`, `offset-lg-2`, etc.

---

### 9. Cuadrículas Anidadas

Puedes crear `row` dentro de `col` para subdividir:

```html
<div class="row">
  <div class="col-8">
    Columna principal
    <div class="row">
      <div class="col-6">Anidada 1 (mitad de col-8)</div>
      <div class="col-6">Anidada 2 (mitad de col-8)</div>
    </div>
  </div>
  <div class="col-4">
    Sidebar
  </div>
</div>
```

---

## Patrones Comunes del Examen

### 1. Layout de 3 Columnas Responsive

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-4">Columna 1</div>
    <div class="col-12 col-md-4">Columna 2</div>
    <div class="col-12 col-md-4">Columna 3</div>
  </div>
</div>
```

- Móvil: 1 columna por fila
- Tablet+: 3 columnas en la misma fila

---

### 2. Sidebar + Contenido

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-3">Sidebar</div>
    <div class="col-12 col-md-9">Contenido</div>
  </div>
</div>
```

- Móvil: Sidebar arriba, contenido abajo
- Tablet+: Sidebar izquierda, contenido derecha

---

### 3. Grid para Cards/Productos

```html
<div class="row g-4">
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">Card 1</div>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">Card 2</div>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">Card 3</div>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">Card 4</div>
</div>
```

- Móvil: 1 card por fila
- Small: 2 cards por fila
- Medium: 3 cards por fila
- Large+: 4 cards por fila

---

### 4. Centrar un Div

```html
<!-- Opción 1: Con offset -->
<div class="row">
  <div class="col-6 offset-3">Centrado</div>
</div>

<!-- Opción 2: Con justify-content -->
<div class="row justify-content-center">
  <div class="col-6">Centrado</div>
</div>
```

---

## Trucos y Consejos

### Mobile First

Siempre empieza diseñando para móvil y luego añade breakpoints mayores:

```html
<!-- ✅ CORRECTO (Mobile First) -->
<div class="col-12 col-md-6 col-lg-4">Contenido</div>

<!-- ❌ INCORRECTO (Desktop First - no uses esto) -->
<div class="col-lg-4 col-md-6 col-12">Contenido</div>
```

---

### No te pases de 12 columnas por fila

```html
<!-- ✅ CORRECTO (4+4+4=12) -->
<div class="row">
  <div class="col-4">1</div>
  <div class="col-4">2</div>
  <div class="col-4">3</div>
</div>

<!-- ❌ INCORRECTO (6+6+6=18, se desborda) -->
<div class="row">
  <div class="col-6">1</div>
  <div class="col-6">2</div>
  <div class="col-6">3</div> <!-- Esta se va a la siguiente línea -->
</div>
```

---

### Combina Breakpoints Inteligentemente

```html
<!-- Cards que se adaptan -->
<div class="col-12 col-sm-6 col-md-4 col-lg-3">
  <!-- Móvil: 1 por fila (100%) -->
  <!-- Small: 2 por fila (50%) -->
  <!-- Medium: 3 por fila (33%) -->
  <!-- Large: 4 por fila (25%) -->
</div>
```

---

## Tabla de Referencia Rápida

| Clase | Uso | Ejemplo |
|-------|-----|---------|
| `container` | Contenedor con max-width | `<div class="container">` |
| `container-fluid` | Contenedor 100% ancho | `<div class="container-fluid">` |
| `row` | Fila de columnas | `<div class="row">` |
| `col` | Columna automática | `<div class="col">` |
| `col-6` | Columna de 6/12 (50%) | `<div class="col-6">` |
| `col-md-4` | Columna 4/12 en ≥768px | `<div class="col-md-4">` |
| `g-3` | Gutter de tamaño 3 | `<div class="row g-3">` |
| `gx-4` | Gutter horizontal | `<div class="row gx-4">` |
| `gy-2` | Gutter vertical | `<div class="row gy-2">` |
| `align-items-center` | Centrado vertical | `<div class="row align-items-center">` |
| `justify-content-center` | Centrado horizontal | `<div class="row justify-content-center">` |
| `order-2` | Orden visual | `<div class="col order-2">` |
| `offset-3` | Desplazamiento 3 cols | `<div class="col-6 offset-3">` |

---

## Errores Comunes a Evitar

1. ❌ Olvidar el `row` antes de los `col`
2. ❌ Poner más de 12 columnas en una fila
3. ❌ No usar breakpoints responsive
4. ❌ Olvidar el `container` o `container-fluid`
5. ❌ Usar Desktop First en lugar de Mobile First

---

**Practica con el archivo [index.html](index.html) que contiene 12 ejercicios completos con ejemplos visuales!**
