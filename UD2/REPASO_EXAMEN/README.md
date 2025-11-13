# 📚 CARPETA DE REPASO - UD2 ANIMACIONES Y TRANSICIONES CSS

Esta carpeta contiene todos los ejercicios organizados por temas para repasar antes del examen de la Unidad 2.

## 📁 Estructura de la carpeta

```
REPASO_EXAMEN/
│
├── 00_CHULETA_COMPLETA/          ⭐ TODO EN UNO (próximamente)
│   ├── index.html
│   └── styles.css
│
├── 01_Transiciones/
│   ├── index.html                 → 14 ejercicios de transiciones
│   └── styles.css                 → Comentarios explicativos detallados
│
├── 02_Animaciones_Basicas/
│   ├── index.html                 → 14 ejercicios de animaciones con @keyframes
│   └── styles.css                 → Fade-in, bounce, slide, spin, pulse, etc.
│
├── 03_Animaciones_Avanzadas/
│   ├── index.html                 → 12 ejercicios avanzados
│   └── styles.css                 → fill-mode, direction, cubic-bezier, cadenas
│
└── 04_Componentes_Web/
    ├── index.html                 → 10 componentes reales
    └── styles.css                 → Botones, cards, dropdowns, modals, etc.
```

## 🎯 Cómo usar esta carpeta

### Opción 1: Por temas (Recomendado para aprender)
1. Empieza por `01_Transiciones`
2. Abre el `index.html` en tu navegador
3. Lee los comentarios en `styles.css`
4. Experimenta modificando valores
5. Continúa con el siguiente tema

### Opción 2: Componentes prácticos
1. Si ya dominas la teoría, ve a `04_Componentes_Web`
2. Analiza cómo se aplican transiciones y animaciones en componentes reales
3. Inspecciona el código y modifícalo

## 📖 Conceptos cubiertos

### ✅ 01_Transiciones

**Propiedades básicas:**
- `transition-property`: qué propiedades animar
- `transition-duration`: cuánto dura (0.3s, 1s)
- `transition-timing-function`: ease, linear, ease-in, ease-out
- `transition-delay`: retraso antes de iniciar

**Transforms comunes:**
- `scale()`: agrandar/reducir
- `rotate()`: girar
- `translate()`: mover
- Combinaciones: `rotate(45deg) scale(1.2)`

**Propiedades animables:**
- color, background-color
- opacity
- transform
- box-shadow
- border-radius

**Ejercicios incluidos:** 14 ejemplos prácticos

---

### ✅ 02_Animaciones_Basicas

**Conceptos clave:**
- `@keyframes`: definir la animación
- `animation-name`: nombre de la animación
- `animation-duration`: duración
- `animation-timing-function`: curva de tiempo
- `animation-iteration-count`: 1, 3, infinite
- `animation-delay`: retraso inicial
- `animation-play-state`: running | paused

**Animaciones comunes:**
- Fade In (aparecer)
- Bounce (rebote)
- Slide (deslizar)
- Spin (girar)
- Pulse (pulsar)
- Shake (temblar)
- Zoom In

**Ejercicios incluidos:** 14 animaciones esenciales

---

### ✅ 03_Animaciones_Avanzadas

**animation-fill-mode:**
- `none`: vuelve al estado original
- `forwards`: mantiene estado final
- `backwards`: aplica primer keyframe durante delay
- `both`: forwards + backwards

**animation-direction:**
- `normal`: 0% → 100%
- `reverse`: 100% → 0%
- `alternate`: ida y vuelta
- `alternate-reverse`: vuelta e ida

**Técnicas avanzadas:**
- `cubic-bezier()`: curvas personalizadas
- Múltiples keyframes: 0%, 25%, 50%, 75%, 100%
- Cadenas de animaciones con `forwards` + `delay`
- Loaders y spinners

**Ejercicios incluidos:** 12 ejemplos avanzados

---

### ✅ 04_Componentes_Web

**Componentes reales:**
1. **Botones**: hover effects, gradientes
2. **Cards**: elevación, zoom en imágenes
3. **Dropdown menús**: aparecer/desaparecer
4. **Progress bars**: llenado animado
5. **Tooltips**: aparecer al hover
6. **Skeleton loaders**: efecto shimmer
7. **Modals**: backdrop + fade-in
8. **Navbar**: links con hover
9. **Tabs**: indicador activo
10. **Galerías**: zoom en imágenes

**Ejercicios incluidos:** 10 componentes completos

---

## 💡 Consejos para el examen

### 🔑 Sintaxis esenciales

**Transition shorthand:**
```css
transition: property duration timing-function delay;
transition: background-color 0.3s ease 0s;
```

**Animation shorthand:**
```css
animation: name duration timing-function delay iteration-count direction fill-mode;
animation: bounce 2s ease-in-out 0s infinite alternate forwards;
```

**Transforms combinados:**
```css
transform: translateX(50px) rotate(45deg) scale(1.2);
```

---

### ⚡ Diferencias clave

| Característica | Transitions | Animations |
|----------------|-------------|------------|
| Trigger | Requiere evento (hover, focus) | Automático |
| Keyframes | Solo inicio y fin | Múltiples puntos |
| Repetición | No se repite | Puede ser infinite |
| Control | Menos control | Control total |
| Uso | Interacciones simples | Efectos complejos |

---

### 🎨 Timing functions más usadas

- **ease**: suave inicio y fin (por defecto)
- **linear**: velocidad constante
- **ease-in**: empieza lento
- **ease-out**: termina lento
- **ease-in-out**: lento al inicio y fin
- **cubic-bezier(x1, y1, x2, y2)**: personalizado

---

### 📏 Duraciones recomendadas

| Tipo de efecto | Duración |
|----------------|----------|
| Micro-interacciones (botones) | 0.2s - 0.3s |
| Transiciones estándar | 0.3s - 0.5s |
| Animaciones de entrada | 0.5s - 1s |
| Loaders y efectos continuos | 1s - 2s |

---

### 🚀 Rendimiento (muy importante)

**✅ Propiedades eficientes (usan GPU):**
- `transform` (translate, scale, rotate)
- `opacity`

**❌ Propiedades lentas (evitar en animaciones):**
- `width`, `height`
- `top`, `left`, `right`, `bottom`
- `margin`, `padding`

**Regla de oro:**
- Usa `transform: translateX()` en lugar de `left`
- Usa `transform: scale()` en lugar de `width/height`

---

### 🎯 Trucos del examen

1. **Centrado perfecto con hover:**
```css
.elemento {
  transition: transform 0.3s ease;
}
.elemento:hover {
  transform: translateY(-5px);
}
```

2. **Elevación Material Design:**
```css
.card {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.card:hover {
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
  transform: translateY(-8px);
}
```

3. **Animación de rebote infinito:**
```css
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-50px); }
}
.elemento {
  animation: bounce 1s ease-in-out infinite alternate;
}
```

4. **Pausar animación con hover:**
```css
.elemento {
  animation: girar 3s linear infinite;
}
.elemento:hover {
  animation-play-state: paused;
}
```

5. **Secuencia escalonada:**
```css
.item-1 { animation: fadeIn 0.5s ease 0s forwards; }
.item-2 { animation: fadeIn 0.5s ease 0.2s forwards; }
.item-3 { animation: fadeIn 0.5s ease 0.4s forwards; }
```

---

## 📚 Resumen de propiedades

### Propiedades de Transition
```css
transition-property: all | background-color | transform;
transition-duration: 0.3s | 1s | 500ms;
transition-timing-function: ease | linear | ease-in | ease-out;
transition-delay: 0s | 0.5s;
```

### Propiedades de Animation
```css
animation-name: nombreAnimacion;
animation-duration: 2s;
animation-timing-function: ease-in-out;
animation-delay: 0.5s;
animation-iteration-count: 1 | 3 | infinite;
animation-direction: normal | reverse | alternate;
animation-fill-mode: none | forwards | backwards | both;
animation-play-state: running | paused;
```

---

## 🔧 Estructura de @keyframes

```css
@keyframes nombreAnimacion {
  0% {
    /* Estado inicial */
    transform: translateX(0);
    opacity: 0;
  }
  50% {
    /* Punto intermedio */
    transform: translateX(100px);
    opacity: 0.5;
  }
  100% {
    /* Estado final */
    transform: translateX(200px);
    opacity: 1;
  }
}
```

También se puede usar `from` y `to`:
```css
@keyframes simple {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

## 🎓 Qué esperar en el examen

### Posibles preguntas:
1. Crear una transición en un botón al hacer hover
2. Definir una animación con @keyframes para un rebote
3. Usar animation-fill-mode: forwards
4. Combinar múltiples transforms
5. Crear una secuencia de animaciones con delay
6. Aplicar timing-functions diferentes
7. Hacer un loader/spinner giratorio
8. Animar la aparición de elementos (fade-in-up)
9. Pausar una animación con :hover
10. Usar alternate para animaciones infinitas

### Formato típico:
- Te darán un HTML con elementos
- Deberás escribir CSS con transiciones/animaciones
- Pueden pedirte que uses propiedades específicas
- Posible pregunta teórica sobre diferencias transition vs animation

---

## ✨ Checklist final antes del examen

- [ ] Sé la diferencia entre transition y animation
- [ ] Conozco la sintaxis de @keyframes
- [ ] Sé usar transform (translate, scale, rotate)
- [ ] Entiendo animation-fill-mode (forwards es el más usado)
- [ ] Conozco animation-direction (alternate para loops)
- [ ] Sé pausar animaciones con animation-play-state
- [ ] Puedo crear secuencias con animation-delay
- [ ] Sé combinar múltiples animaciones
- [ ] Entiendo timing-functions (ease, linear, etc.)
- [ ] He practicado los ejercicios de los 4 archivos

---

## 🚀 ¡Último consejo!

**Practica escribiendo código sin mirar:**
1. Abre un nuevo archivo CSS
2. Intenta escribir de memoria:
   - Una transición de hover
   - Una animación de bounce
   - Un loader giratorio
3. Comprueba tu código con los ejemplos

**Si puedes hacer esto, estás listo para el examen.**

---

## 🔗 Recursos adicionales

- **cubic-bezier.com**: crear curvas de timing personalizadas
- **animate.css**: librería de animaciones para inspiración
- **MDN Web Docs**: documentación oficial de CSS

---

**Creado para**: Repaso UD2 Diseño de Interfaces Web
**Incluye**: Transiciones, Animaciones básicas, Animaciones avanzadas y Componentes web
**Estilo**: Basado en los ejercicios del profesor Miguel
**Total de ejercicios**: 50+ ejemplos prácticos con código comentado

---

¡Buena suerte en tu examen! 🎉
