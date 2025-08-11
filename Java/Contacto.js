
document.getElementById("contactoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recargar la página

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre && email && mensaje) {
        document.getElementById("mensajeExito").style.display = "block";
        document.getElementById("contactoForm").reset();
    }
});
