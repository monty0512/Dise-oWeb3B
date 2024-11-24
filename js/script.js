document.addEventListener('DOMContentLoaded', function() {
    // Inicialización del efecto Typed.js
    var options = {
        strings: ["Team Leader", "Logistic Coordinator", "Systems Engineering Student"], // Palabras a escribir
        typeSpeed: 100, // Velocidad de escritura
        backSpeed: 50,  // Velocidad de borrado
        backDelay: 1000, // Tiempo de espera antes de borrar
        loop: true,      // Repetir el efecto
    };

    var typed = new Typed(".typed-text", options); // Aplicar el efecto en el span con la clase "typed-text"
});

// validar formulario de contacto y modal de confirmación
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        var form = document.getElementById('contact');
        form.reset();
        if (name && email && message) {
            alert('The message has been sent successfully. Thank you for contacting us.');
        } else {
            alert('Please, fill in all the fields.');
        }
    });
});
