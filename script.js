let transacciones = [];

function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll("main section");
    secciones.forEach(seccion => {
        seccion.style.display = seccion.id === seccionId ? "block" : "none";
    });

    if (seccionId === "seccion1") {
        mostrarResumenGastos();
    }
}

function agregarTransaccion(event) {
    event.preventDefault();
    
    const descripcion = document.getElementById("descripcion").value;
    const monto = parseFloat(document.getElementById("monto").value);
    
    transacciones.push({ descripcion, monto });
    document.getElementById("transaccionesForm").reset();
    mostrarTransacciones();
    mostrarResumenGastos();
}

function mostrarTransacciones() {
    const listaTransacciones = document.getElementById("lista-transacciones");
    listaTransacciones.innerHTML = "";

    transacciones.forEach(transaccion => {
        const div = document.createElement("div");
        div.textContent = `${transaccion.descripcion}: $${transaccion.monto.toFixed(2)}`;
        listaTransacciones.appendChild(div);
    });
}

function mostrarResumenGastos() {
    const resumenGastos = document.getElementById("resumen-gastos");
    const totalGastos = transacciones.reduce((total, transaccion) => total + transaccion.monto, 0);
    resumenGastos.textContent = `Total de gastos: $${totalGastos.toFixed(2)}`;
}
