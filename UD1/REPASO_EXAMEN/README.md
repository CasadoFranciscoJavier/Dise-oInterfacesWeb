# 📚 CARPETA DE REPASO - UD1 DISEÑO DE INTERFACES WEB

Esta carpeta contiene todos los ejercicios organizados por temas para repasar antes del examen.

## 📁 Estructura de la carpeta

```
REPASO_EXAMEN/
│
├── 00_CHULETA_COMPLETA/          ⭐ EMPIEZA AQUÍ
│   ├── index.html                 → Todos los conceptos en una página
│   └── styles.css                 → CSS completo con comentarios explicativos
│
├── 01_Flexbox_Basico/
│   ├── index.html                 → 8 ejercicios de Flexbox básico
│   └── styles.css                 → display, justify-content, align-items, gap, etc.
│
├── 02_Flexbox_Avanzado/
│   ├── index.html                 → 10 ejercicios de Flexbox avanzado
│   └── styles.css                 → flex-grow, flex-shrink, order, margin: auto, etc.
│
├── 03_Unidades/
│   ├── index.html                 → 10 ejercicios de unidades CSS
│   └── styles.css                 → px, rem, em, %, vh, vw, combinaciones
│
├── 04_MediaQueries/
│   ├── index.html                 → 10 ejercicios de Media Queries
│   └── styles.css                 → Breakpoints, responsive, mobile-first
│
├── 05_Grid/
│   ├── index.html                 → 12 ejercicios de CSS Grid
│   └── styles.css                 → grid-template, areas, auto-fit, minmax, etc.
│
├── 06_Imagenes_Responsive/
│   ├── index.html                 → 10 ejercicios de imágenes responsive
│   └── styles.css                 → object-fit, srcset, picture, aspect-ratio
│
└── 07_Layouts_Completos/
    ├── index.html                 → 10 layouts completos
    └── styles.css                 → Navbar, Hero, Cards, Pricing, Holy Grail, etc.
```

## 🎯 Cómo usar esta carpeta

### Opción 1: Chuleta Completa (Recomendado para repaso rápido)
1. Abre `00_CHULETA_COMPLETA/index.html` en tu navegador
2. Tienes TODOS los conceptos en una sola página
3. Ideal para repasar antes del examen

### Opción 2: Por temas (Recomendado para práctica profunda)
1. Empieza por `01_Flexbox_Basico`
2. Abre el `index.html` en el navegador
3. Lee el CSS con comentarios explicativos
4. Prueba a modificar los valores para entender cómo funcionan
5. Continúa con el siguiente tema

## 📖 Conceptos cubiertos

### ✅ Flexbox
- **Básico**: display, flex-direction, justify-content, align-items, gap, flex-wrap
- **Avanzado**: flex-grow, flex-shrink, flex-basis, order, align-self, margin: auto

### ✅ CSS Grid
- grid-template-columns/rows
- repeat() y fr
- gap
- grid-column/row (span)
- grid-template-areas
- auto-fit + minmax (responsive automático)
- justify-items, align-items

### ✅ Unidades CSS
- **Absolutas**: px
- **Relativas**: rem, em, %, vh, vw
- Diferencia entre em (relativa al padre) y rem (relativa al root)
- Combinaciones: width + max-width

### ✅ Media Queries
- Breakpoints estándar: móvil, tablet, desktop
- min-width, max-width
- Rangos con `and`
- Mobile-first approach
- orientation: portrait/landscape

### ✅ Imágenes Responsive
- Imágenes fluidas: max-width: 100%, height: auto
- object-fit: cover, contain
- srcset con descriptores de ancho (w)
- sizes attribute
- picture element (art direction)
- aspect-ratio
- background-size: cover
- Lazy loading

### ✅ Layouts Completos
- Header-Content-Footer
- Sidebar-Main
- Navbar (Logo + Menu + CTA)
- Hero Section (100vh)
- Tarjetas con botón al fondo
- Pricing Tables
- Galería de imágenes
- Holy Grail Layout
- Centrado perfecto

## 💡 Consejos para el examen

1. **Breakpoints comunes**:
   - Móvil: `< 480px` o `< 600px`
   - Tablet: `481px - 768px` o `600px - 1024px`
   - Desktop: `> 769px` o `> 1024px`

2. **Flexbox vs Grid**:
   - Flexbox: para layouts en **1 dimensión** (fila O columna)
   - Grid: para layouts en **2 dimensiones** (filas Y columnas)

3. **Unidades**:
   - Usa `rem` para font-size (escalable)
   - Usa `%` para anchos fluidos
   - Combina `%` con `max-width` para controlar el crecimiento
   - Usa `vh/vw` para secciones de pantalla completa

4. **Mobile First**:
   - Estilos base para móvil
   - `@media (min-width: ...)` para pantallas más grandes

5. **Trucos útiles**:
   - `margin-left: auto` → empuja a la derecha
   - `margin-top: auto` → empuja abajo (en flex-direction: column)
   - `flex: 1` → crece para ocupar espacio disponible
   - `align-items: stretch` → altura igual en todos los elementos

## 🔧 Propiedades más importantes

### Flexbox Container
```css
display: flex;
flex-direction: row | column;
justify-content: center | space-between | space-around;
align-items: center | stretch | flex-start | flex-end;
gap: 20px;
flex-wrap: wrap;
```

### Flexbox Items
```css
flex: 1; /* flex-grow flex-shrink flex-basis */
order: 2;
align-self: center;
margin-left: auto; /* empujar derecha */
```

### Grid Container
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto 1fr auto;
gap: 20px;
grid-template-areas: "header header" "sidebar main";
```

### Grid Items
```css
grid-column: span 2;
grid-row: 1 / 3;
grid-area: header;
```

## 📝 Todos los archivos tienen comentarios explicativos

Cada archivo CSS incluye:
- ✅ Comentarios detallados de qué hace cada propiedad
- ✅ Ejemplos de uso
- ✅ Resumen al final del archivo
- ✅ Valores comunes de cada propiedad

## 🚀 ¡Buena suerte en el examen!

Recuerda:
1. Lee los comentarios en el CSS
2. Prueba a modificar los valores
3. Redimensiona la ventana para ver el responsive
4. Usa la chuleta completa para repasar rápidamente

---

**Creado para**: Repaso UD1 Diseño de Interfaces Web
**Incluye**: Todos los conceptos vistos en clase
**Estilo**: Basado en los ejercicios del profesor Miguel
