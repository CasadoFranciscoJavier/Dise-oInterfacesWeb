# 🎄 Ejercicio de Repaso – Bootstrap + Sass  
## **“Mercadillo de Navidad 2025”**

---

# 🎁 0. Personalización con Sass (solo la paleta)

En tu archivo `scss/custom-bootstrap.scss`, define *antes de importar Bootstrap* tu propia **paleta navideña**. Puedes inspirarte en este ejemplo:

```scss
$primary: #b3001b;        // rojo navideño
$secondary: #125c26;      // verde abeto
$warning: #f3c24d;        // dorado
$light: #fdf7f0;          // tono crema
$dark: #1b1b1b;           // carbón

$body-bg: #0b1220;        // azul noche
$body-color: #f9fafb;     // blanco nieve

$font-family-sans-serif: 'Segoe UI', system-ui, sans-serif;
$border-radius: 0.75rem;

@import "../node_modules/bootstrap/scss/bootstrap";
```

Esta paleta debe reflejarse en todos los elementos que utilicen clases de Bootstrap (`btn-primary`, `bg-primary`, etc.).

---

# 🎅 1. Barra de Navegación (Navbar)

Crea una **navbar** fija en la parte superior con:

- Logotipo o texto principal:  
  **“Mercadillo de Navidad 2025”**
- Menú colapsable con enlaces:
  - Inicio
  - Puestos
  - Actividades
  - Contacto
- Un botón destacado con clase `.btn-warning`:
  **Comprar tickets**
- El menú debe colapsar en móviles usando el *navbar-toggler*.
- Usa utilidades de Bootstrap para espaciado, las que consideres (`ms-auto`, `mt-3`, `mt-lg-0`, etc.).

---

# ❄️ 2. Sección Hero con Carousel

Debajo de la navbar coloca un **carousel** con:

### Requisitos del carrusel
- Tres diapositivas con imágenes (`img-fluid`)
- Cada imagen debe tener un título y subtítulo usando `carousel-caption`
- Añade el JS necesario para que se mueva cada 4 segundos
- Debe tener:
  - Indicadores
  - Botones de navegación (prev/next)
- Estilizar los textos con clases como `.fw-bold`, `.text-shadow`, `.display-5`(opcional)


# 🎄 3. Sección “Puestos Navideños” (Cards + Modal)

Crea una sección con título y descripción, seguida de un *grid* de **6 tarjetas**.

### Distribución de tarjetas

| Pantalla | Nº de columnas |
|---------|----------------|
| `lg`    | 3 columnas     |
| `md`    | 2 columnas     |
| `sm`    | 1 columna      |

### Cada tarjeta debe incluir:
- Imagen representativa
- Título del puesto
- Breve descripción
- Botón **Ver más** → que abre un **modal**

### Modal
Cada modal debe contener:

- Título
- Imagen amplia (`img-fluid`)
- Descripción detallada
- Botones:
  - **Cerrar**
  - **Añadir a favoritos**

### Transicion personalizada del modal
En `styles.css` crea una transicion suave que:

- Deslice el modal hacia abajo al aparecer  
- Aplique opacidad progresiva (fade-in)

Ejemplo orientativo:

```css
.modal-custom .modal-dialog {
  transform: translateY(-20px);
  opacity: 0;
  transition: 0.4s ease-out;
}
.modal-custom.show .modal-dialog {
  transform: translateY(0);
  opacity: 1;
}
```

---

# 🎶 4. Sección “Actividades del Día”

Usa una `row` con dos columnas:

---

## **Columna 1 – 8 columnas (`lg`)**

Incluye una lista de **mínimo 4 actividades**, por ejemplo:

- Concierto de villancicos  
- Taller infantil de galletas  
- Photocall con Papá Noel  
- Encendido del árbol  

Debe estar maquetado con `list-group` o una estructura de títulos y textos bien ordenados.

---

## **Columna 2 – 4 columnas (`lg`)**

Bloque destacado con:

- Fondo navideño (`bg-primary`, `bg-dark`, según tu paleta Sass)
- Título: **Sorteo especial**
- Texto explicativo
- Imagen (`img-fluid`)
- Botón con tooltip:  
  **“Ver bases del sorteo”**

Además:

- Un mensaje adicional visible **solo en pantallas medianas o superiores**:  
  Usa `d-none d-md-block`.

---

# 💌 5. Sección “Formulario de Contacto”

Incluye los siguientes campos:

- Nombre  
- Correo electrónico  
- Motivo de contacto (selector)  
- Mensaje (textarea)  
- Botón **Enviar mensaje**

### Requisitos
- En pantallas `lg`, el formulario debe mostrarse en **dos columnas**
- Usa validación visual (opcional):
  - `.is-valid`  
  - `.is-invalid`  
  - `.valid-feedback`  
  - `.invalid-feedback`
- Aplica utilidades:
  - `mb-3`, `py-4`, `rounded-4`, etc.

---

# 🌨 6. Botón flotante “Modo nieve ❄️”

Crea un botón flotante con:

```css
position: fixed;
bottom: 1.5rem;
right: 1.5rem;
```

El botón:

- Lleva el icono ❄️
- Al pulsarlo:
  - Muestra u oculta un panel superior (`d-none`)
  - El panel debe tener una animación suave (slide-down)


---

# 🎇 7. Footer

Incluye:

- Texto centrado:  
  **© 2025 Mercadillo de Navidad – Todos los derechos reservados**
- Enlaces a:
  - Instagram
  - Facebook
  - TikTok
- Utilidades:
  - `text-center`
  - `py-4`
  - `gap-3`



