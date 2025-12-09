# Guía: Primer proyecto con Sass para personalizar Bootstrap (Windows y Ubuntu)

En esta guía vamos a:

1. Instalar las herramientas necesarias (Node, Sass y Bootstrap).
2. Configurar un proyecto básico.
3. Crear nuestro primer archivo **SCSS**.
4. Compilar Sass a CSS.
5. Personalizar Bootstrap con variables.
6. Hacer un pequeño ejercicio práctico al final.

> ⚠️ Requisitos previos:  
> - Saber moverte mínimamente por la terminal (cd, ls, etc.).
> - Tener un editor de código (Visual Studio Code recomendado).

---

## 1. Instalación de Node.js

### 1.1. Windows

1. Entra en la página oficial de Node.js.  
2. Descarga la versión **LTS** (recomendada).
3. Ejecuta el instalador y sigue los pasos por defecto.
4. Comprueba la instalación:

```bash
node -v
npm -v
```

---

### 1.2. Ubuntu

```bash
sudo apt update
sudo apt install -y nodejs npm
node -v
npm -v
```

---

## 2. Crear estructura del proyecto

```bash
mkdir proyecto-sass-bootstrap
cd proyecto-sass-bootstrap
npm init -y
```

---

## 3. Instalar Bootstrap y Sass

```bash
npm install bootstrap
npm install --save-dev sass
```

---

## 4. Estructura recomendada

```
proyecto-sass-bootstrap
│
├── index.html
├── package.json
├── /scss
│   └── custom-bootstrap.scss
└── /dist
    └── css
        └── custom-bootstrap.css
```

---

## 5. Crear el archivo SCSS

`scss/custom-bootstrap.scss`:

```scss
$primary: #ff5733;
$body-bg: #f8f9fa;
$body-color: #212529;

@import "../node_modules/bootstrap/scss/bootstrap";
```

---

## 6. Compilar Sass

### Editar `package.json`:

```json
"scripts": {
  "sass": "sass scss/custom-bootstrap.scss dist/css/custom-bootstrap.css --watch"
}
```

### Ejecutar compilación:

```bash
npm run sass
```

### Solución para Windows si da error de permisos:

```powershell
Set-ExecutionPolicy RemoteSigned
```

---

## 7. HTML preparado para usar Bootstrap personalizado

`index.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Proyecto Sass + Bootstrap</title>
  <link rel="stylesheet" href="dist/css/custom-bootstrap.css">
</head>
<body>

  <div class="container py-5">
    <h1 class="mb-4 text-primary">Hola, Bootstrap personalizado</h1>
    <p>Este texto usa los colores configurados en Sass.</p>
    <button class="btn btn-primary me-2">Botón primario</button>
    <button class="btn btn-secondary">Botón secundario</button>
  </div>

  <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

## 8. Ejercicios prácticos

### Ejercicio 1: Cambiar la paleta de colores

Modifica en `custom-bootstrap.scss`:

```scss
$primary: #0d6efd;
$secondary: #6c757d;
$success: #198754;
$danger: #dc3545;
$warning: #ffc107;
$info: #0dcaf0;
$light: #f8f9fa;
$dark: #212529;
@import "../node_modules/bootstrap/scss/bootstrap";
```

Crea botones en HTML para ver los cambios.

---

### Ejercicio 2: Tipografía y bordes

```scss
$font-family-sans-serif: 'Segoe UI', system-ui, sans-serif;
$font-size-base: 1.05rem;
$border-radius: 1rem;
@import "../node_modules/bootstrap/scss/bootstrap";
```

Crea una tarjeta en `index.html` para comprobarlo.

---

### Ejercicio 3 : Tema oscuro claro

```scss
$body-bg: #111827;
$body-color: #e5e7eb;
$primary: #3b82f6;
$secondary: #6b7280;
$card-bg: #1f2937;
@import "../node_modules/bootstrap/scss/bootstrap";
```

Añade título, tarjeta y botones al HTML.

