document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    // Selecciona todos los formularios con la clase 'needs-validation'
    var forms = document.querySelectorAll('.needs-validation');

    // Recorre cada formulario y añade el evento de validación
    Array.prototype.forEach.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });
});
