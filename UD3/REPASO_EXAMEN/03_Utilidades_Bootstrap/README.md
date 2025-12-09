# 03 - Utilidades Bootstrap

Tabla de referencia rápida de todas las clases utilitarias de Bootstrap.

---

## 1. ESPACIADO (Margin y Padding)

### Formato: `{propiedad}{lados}-{tamaño}`

**Propiedades:**
- `m` = margin
- `p` = padding

**Lados:**
- `t` = top (arriba)
- `b` = bottom (abajo)
- `s` = start (izquierda)
- `e` = end (derecha)
- `x` = horizontal (izquierda y derecha)
- `y` = vertical (arriba y abajo)
- Sin letra = todos los lados

**Tamaños:**
- `0` = 0
- `1` = 0.25rem (4px)
- `2` = 0.5rem (8px)
- `3` = 1rem (16px)
- `4` = 1.5rem (24px)
- `5` = 3rem (48px)
- `auto` = auto (solo para margin)

### Ejemplos más usados

```html
<!-- Margin -->
<div class="m-3">Margin en todos los lados</div>
<div class="mt-3">Margin-top</div>
<div class="mb-3">Margin-bottom (muy usado)</div>
<div class="mx-3">Margin horizontal</div>
<div class="my-3">Margin vertical</div>
<div class="mx-auto">Margin horizontal auto (centrar)</div>
<div class="mt-auto">Margin-top auto (empujar al final en flexbox)</div>

<!-- Padding -->
<div class="p-3">Padding en todos los lados</div>
<div class="pt-3">Padding-top</div>
<div class="pb-3">Padding-bottom</div>
<div class="px-3">Padding horizontal</div>
<div class="py-3">Padding vertical</div>
```

---

## 2. DISPLAY

### Valores básicos

```html
<div class="d-none">Oculto</div>
<div class="d-block">Bloque</div>
<div class="d-inline">Inline</div>
<div class="d-inline-block">Inline-block</div>
<div class="d-flex">Flexbox</div>
<div class="d-grid">Grid</div>
```

### Display responsive (IMPORTANTE)

```html
<!-- Ocultar en móvil, mostrar en tablet+ -->
<div class="d-none d-md-block">Tablet y desktop</div>

<!-- Mostrar en móvil, ocultar en tablet+ -->
<div class="d-block d-md-none">Solo móvil</div>

<!-- Ocultar en móvil y tablet, mostrar en desktop -->
<div class="d-none d-lg-block">Solo desktop</div>

<!-- Flexbox solo en desktop -->
<div class="d-none d-lg-flex">Flex en desktop</div>
```

**Breakpoints:**
- `sm` = 576px
- `md` = 768px
- `lg` = 992px
- `xl` = 1200px
- `xxl` = 1400px

---

## 3. FLEXBOX

### Dirección
```html
<div class="d-flex flex-row">Horizontal (por defecto)</div>
<div class="d-flex flex-column">Vertical</div>
<div class="d-flex flex-row-reverse">Horizontal invertido</div>
<div class="d-flex flex-column-reverse">Vertical invertido</div>
```

### Justify-content (alineación horizontal)
```html
<div class="d-flex justify-content-start">Inicio</div>
<div class="d-flex justify-content-center">Centro</div>
<div class="d-flex justify-content-end">Final</div>
<div class="d-flex justify-content-between">Espaciado entre elementos</div>
<div class="d-flex justify-content-around">Espaciado alrededor</div>
<div class="d-flex justify-content-evenly">Espaciado uniforme</div>
```

### Align-items (alineación vertical)
```html
<div class="d-flex align-items-start">Arriba</div>
<div class="d-flex align-items-center">Centro</div>
<div class="d-flex align-items-end">Abajo</div>
<div class="d-flex align-items-stretch">Estirar (por defecto)</div>
```

### Centrado perfecto
```html
<div class="d-flex justify-content-center align-items-center" style="height: 200px;">
    Centrado horizontal y vertical
</div>
```

---

## 4. TEXTO

### Alineación
```html
<p class="text-start">Izquierda</p>
<p class="text-center">Centro</p>
<p class="text-end">Derecha</p>

<!-- Responsive -->
<p class="text-start text-md-center">Izq en móvil, centro en tablet+</p>
```

### Tamaño de fuente
```html
<p class="fs-1">Tamaño 1 (más grande)</p>
<p class="fs-2">Tamaño 2</p>
<p class="fs-3">Tamaño 3</p>
<p class="fs-4">Tamaño 4</p>
<p class="fs-5">Tamaño 5</p>
<p class="fs-6">Tamaño 6 (más pequeño)</p>
```

### Peso de fuente
```html
<p class="fw-bold">Negrita</p>
<p class="fw-bolder">Más negrita</p>
<p class="fw-normal">Normal</p>
<p class="fw-light">Ligera</p>
<p class="fw-lighter">Más ligera</p>
```

### Transformaciones
```html
<p class="text-lowercase">minúsculas</p>
<p class="text-uppercase">MAYÚSCULAS</p>
<p class="text-capitalize">Capitalizado</p>
```

### Decoraciones
```html
<p class="text-decoration-underline">Subrayado</p>
<p class="text-decoration-line-through">Tachado</p>
<p class="text-decoration-none">Sin decoración (quitar subrayado de enlaces)</p>
<p class="fst-italic">Cursiva</p>
```

---

## 5. COLORES

### Colores de texto
```html
<p class="text-primary">Primario (azul)</p>
<p class="text-secondary">Secundario (gris)</p>
<p class="text-success">Éxito (verde)</p>
<p class="text-danger">Peligro (rojo)</p>
<p class="text-warning">Advertencia (amarillo)</p>
<p class="text-info">Información (cyan)</p>
<p class="text-light">Claro (casi blanco)</p>
<p class="text-dark">Oscuro (casi negro)</p>
<p class="text-muted">Apagado (gris claro)</p>
<p class="text-white">Blanco</p>
<p class="text-black">Negro</p>
```

### Colores de fondo
```html
<div class="bg-primary">Fondo primario</div>
<div class="bg-secondary">Fondo secundario</div>
<div class="bg-success">Fondo éxito</div>
<div class="bg-danger">Fondo peligro</div>
<div class="bg-warning">Fondo advertencia</div>
<div class="bg-info">Fondo información</div>
<div class="bg-light">Fondo claro</div>
<div class="bg-dark">Fondo oscuro</div>
<div class="bg-white">Fondo blanco</div>
<div class="bg-transparent">Fondo transparente</div>
```

---

## 6. BORDES

### Bordes básicos
```html
<div class="border">Borde en todos los lados</div>
<div class="border-top">Borde arriba</div>
<div class="border-end">Borde derecha</div>
<div class="border-bottom">Borde abajo</div>
<div class="border-start">Borde izquierda</div>
<div class="border-0">Sin borde</div>
```

### Colores de bordes
```html
<div class="border border-primary">Borde azul</div>
<div class="border border-success">Borde verde</div>
<div class="border border-danger">Borde rojo</div>
```

### Grosor de bordes
```html
<div class="border border-1">Grosor 1</div>
<div class="border border-2">Grosor 2</div>
<div class="border border-3">Grosor 3</div>
<div class="border border-4">Grosor 4</div>
<div class="border border-5">Grosor 5</div>
```

### Border radius (esquinas redondeadas)
```html
<div class="rounded">Redondeado</div>
<div class="rounded-0">Sin redondear</div>
<div class="rounded-1">Redondeado 1</div>
<div class="rounded-2">Redondeado 2</div>
<div class="rounded-3">Redondeado 3</div>
<div class="rounded-circle">Círculo</div>
<div class="rounded-pill">Píldora</div>
<div class="rounded-top">Redondeado arriba</div>
<div class="rounded-end">Redondeado derecha</div>
<div class="rounded-bottom">Redondeado abajo</div>
<div class="rounded-start">Redondeado izquierda</div>
```

---

## 7. SOMBRAS

```html
<div class="shadow-none">Sin sombra</div>
<div class="shadow-sm">Sombra pequeña</div>
<div class="shadow">Sombra normal</div>
<div class="shadow-lg">Sombra grande</div>
```

---

## 8. ANCHO Y ALTO

### Ancho (width)
```html
<div class="w-25">25% ancho</div>
<div class="w-50">50% ancho</div>
<div class="w-75">75% ancho</div>
<div class="w-100">100% ancho</div>
<div class="w-auto">Ancho automático</div>
```

### Alto (height)
```html
<div class="h-25">25% alto</div>
<div class="h-50">50% alto</div>
<div class="h-75">75% alto</div>
<div class="h-100">100% alto</div>
<div class="h-auto">Alto automático</div>
```

---

## 9. POSICIÓN

```html
<div class="position-static">Estática (por defecto)</div>
<div class="position-relative">Relativa</div>
<div class="position-absolute">Absoluta</div>
<div class="position-fixed">Fija</div>
<div class="position-sticky">Sticky</div>
```

### Posicionamiento
```html
<div class="position-relative">
    <div class="position-absolute top-0 start-0">Arriba izquierda</div>
    <div class="position-absolute top-0 end-0">Arriba derecha</div>
    <div class="position-absolute bottom-0 start-0">Abajo izquierda</div>
    <div class="position-absolute bottom-0 end-0">Abajo derecha</div>
</div>
```

---

## 10. OVERFLOW

```html
<div class="overflow-auto">Scroll si es necesario</div>
<div class="overflow-hidden">Ocultar contenido que desborda</div>
<div class="overflow-visible">Mostrar contenido que desborda</div>
<div class="overflow-scroll">Siempre mostrar scroll</div>
```

---

## COMBINACIONES MÁS USADAS EN EXAMEN

### 1. Card con altura igual y botón al final
```html
<div class="card h-100 d-flex flex-column">
    <div class="card-body d-flex flex-column">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Texto...</p>
        <a href="#" class="btn btn-primary mt-auto">Botón</a>
    </div>
</div>
```

### 2. Centrado perfecto
```html
<div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
    Contenido centrado
</div>
```

### 3. Espaciado entre elementos verticales
```html
<div class="mb-3">Elemento 1</div>
<div class="mb-3">Elemento 2</div>
<div class="mb-3">Elemento 3</div>
```

### 4. Ocultar en móvil
```html
<div class="d-none d-md-block">Solo visible en tablet+</div>
```

### 5. Botón centrado
```html
<div class="text-center">
    <button class="btn btn-primary">Botón centrado</button>
</div>

<!-- O con flexbox -->
<div class="d-flex justify-content-center">
    <button class="btn btn-primary">Botón centrado</button>
</div>
```

---

## TIPS PARA EL EXAMEN

1. **Espaciado**: Usa `mb-3` entre elementos verticales, `p-3` o `p-4` para dar aire interno.

2. **Centrado**: Para centrar horizontalmente usa `text-center` (texto/inline) o `d-flex justify-content-center` (flexbox).

3. **Cards**: SIEMPRE usa `h-100` para igualar alturas y `mt-auto` para empujar botones al final.

4. **Responsive**: Para ocultar en móvil: `d-none d-md-block`. Para mostrar solo en móvil: `d-block d-md-none`.

5. **Flexbox**: Para centrar vertical y horizontalmente: `d-flex justify-content-center align-items-center`.

6. **Formularios**: Usa `mb-3` en cada `div` que contenga label + input.

---

[⬅️ Volver al índice principal](../README.md)