
document.addEventListener("DOMContentLoaded", function() {
    const horariosDisponibles = [
        "7:45 a.m.", "8:00 a.m.", "8:15 a.m.", "8:30 a.m.",
        "8:45 a.m.", "9:00 a.m.", "9:15 a.m.", "9:30 a.m.",
        "9:45 a.m.", "10:00 a.m.", "10:15 a.m.", "10:30 a.m.",
        "10:45 a.m.", "11:00 a.m.", "11:15 a.m."
    ];

    const horariosGrid = document.getElementById("horariosGrid");

    horariosDisponibles.forEach(hora => {
        let div = document.createElement("div");
        div.classList.add("horario-box");
        div.textContent = hora;
        div.addEventListener("click", function() {
            document.querySelectorAll(".horario-box").forEach(el => el.classList.remove("horario-seleccionado"));
            div.classList.add("horario-seleccionado");
        });
        horariosGrid.appendChild(div);
    });

    document.getElementById("reservar").addEventListener("click", function() {
        let nombre = document.getElementById("nombre").value.trim();
        let apellidos = document.getElementById("apellidos").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let fecha = document.getElementById("fecha").value;
        let horarioSeleccionado = document.querySelector(".horario-seleccionado");

        if (!nombre || !apellidos || !correo || !telefono || !fecha || !horarioSeleccionado) {
            alert("Por favor, completa todos los campos antes de reservar.");
        } else {
            alert(`Reserva confirmada para ${nombre} ${apellidos} en horario: ${horarioSeleccionado.textContent}. ¡Gracias por tu reserva!`);
        }
    });

    
    document.getElementById("btnBuscar").addEventListener("click", function() {
        let searchTerm = document.getElementById("search").value.trim().toLowerCase();
        if (searchTerm) {
            alert("Buscando: " + searchTerm);
        }
    });
});
