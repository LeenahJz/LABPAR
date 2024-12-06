//Elemento salida
const outputEventosAsync = document.getElementById("eventosAsync-output");
const outputEventosPromises = document.getElementById("eventosPromises-output");

//listener para envio del formulario y mensaje de confirmacion

const formulario = document.getElementById("contact-form");
formulario.addEventListener("submit", enviarForm);

window.addEventListener("load", function () {
    console.log("Página cargada");
    alert("Bienvenido a nuestra página, revise nuestras promociones.");
});

function enviarForm(evento) {
    evento.preventDefault();
    const nombre = formulario.nombre.value;
    alert("Gracias, tu formulario fue enviado.");
}

//uso de async/await y promesas

//simulación de llamada a una API REST para obtener datos de doctores
function obtenerDatosDeDoctores() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.3; // 0% de probabilidad de éxito
            if (exito) {
                resolve([
                    { id: 1, nombre: "Pamela Chavez", especialidad: "Cardiología" },
                    { id: 2, nombre: "Maria Salisbury", especialidad: "Pediatría" },
                    { id: 3, nombre: "Philipp Anwandter", especialidad: "Neurología" },
                ]);
            } else {
                reject("Error: No se pudieron obtener los datos de los doctores.");
            }
        }, 2000); //espera de 2 segundos
    });
}

//callback para manejar errores
function manejarError(error) {
    console.error("Callback manejando error:", error);
    outputEventosPromises.textContent = `Callback: ${error}`;
}

//uso de promesas
function ejecutarPromesas() {
    obtenerDatosDeDoctores()
        .then((doctores) => {
            console.log("Datos obtenidos con promesas:", doctores);
            outputEventosPromises.textContent = `Datos obtenidos con promesas:\n${JSON.stringify(doctores, null, 2)}`;
        })
        .catch((error) => {
            manejarError(error); // Invoca el callback
        });
}
//uso de async/await con manejo de errores
async function ejecutarAsyncAwait() {
    try {
        const doctores = await obtenerDatosDeDoctores();
        console.log("Datos obtenidos con async/await:", doctores);
        outputEventosPromises.textContent = `Datos obtenidos con async/await:\n${JSON.stringify(doctores, null, 2)}`;
    } catch (error) {
        manejarError(error); // Invoca el callback
    }
}
