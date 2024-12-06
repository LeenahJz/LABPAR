
//elemento salida
const outputEstructuras = document.getElementById("estructuras-output");
const outputCitas = document.getElementById("citas-output");

const arregloDoctores = ["Pamela Chavez", "Maria Salisbury", "Philipp Anwandter", "Javiera Pérez", "Marcelo Enriquez", "Carmen Barrientos"
];

//funcion mostrar arreglo
function mostrarDoctores() {
    console.log("Mostrar doctores:", arregloDoctores);
    outputEstructuras.textContent = `Lista doctores:\n${arregloDoctores.join(", ")}`;
}

//funcion agregar nuevo doctor 

function agregarDoctor(newDoctor) {
    arregloDoctores.push(newDoctor);
    console.log("Doctor agregado:", newDoctor);
    outputEstructuras.textContent = `Doctor agregado: ${newDoctor}\nLista actualizada:\n${arregloDoctores.join(", ")}`;
}

//funcion eliminar un doctor por el nombre

function eliminarDoctorPorNombre() {
    const eliminar = arregloDoctores.pop();
    console.log("Doctor eliminado:", eliminar);
    outputEstructuras.textContent = `Doctor eliminado: ${eliminar}\nLista actualizada:\n${arregloDoctores.join(", ")}`;
}

//funcion agregar cita de paciente
const pilaCitas = [];

function agregarCita() {
    pilaCitas.push("Ana, hora: 15:00, medíco general");
    pilaCitas.push("José, hora: 12:00, nutricionista");
    pilaCitas.push("María, hora: 13:00, psiquiatra");
    pilaCitas.push("Abril, hora: 11:00, kinesiologa"); 
    console.log("Citas agendadas: ", pilaCitas);
    outputCitas.textContent = `Citas agendadas para hoy:\n${pilaCitas.join("\n")}`;

    //mostrar proxima cita
    const proximaCita = pilaCitas.pop();
    console.log("Proxima cita: ", proximaCita);
    outputCitas.textContent += `\nProxima cita: ${proximaCita}\nCitas restantes:\n${pilaCitas.join("\n")}`;
}

//funcion cola para orden de llegada de pacientes

const colaPacientes = [];

function llegadaPaciente() {
    colaPacientes.push("Sergio, hora: 15:00, medíco general");
    colaPacientes.push("Camila, hora: 12:00, nutricionista");
    colaPacientes.push("Roberto, hora: 13:00, psiquiatra");
    colaPacientes.push("Lucia, hora: 11:00, kinesiologa"); 
    console.log("Pacientes en espera de atención:", colaPacientes);
    outputCitas.textContent += `\nPacientes en espera de atención:\n${colaPacientes.join("\n")}`;

    //mostrar proximo paciente
    const proximoPaciente = colaPacientes.shift();
    console.log("Proximo paciente: ", proximoPaciente);
    outputCitas.textContent += `\nProximo paciente: ${proximoPaciente}\nPacientes restantes:\n${colaPacientes.join("\n")}`;

}


//inicalizar arreglo doctores


mostrarDoctores(doctoresJSON);