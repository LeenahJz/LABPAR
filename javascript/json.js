//elemento salida JSON
const outputJSON = document.getElementById("json-output");

//ejemplo lista JSON
const doctoresJSON = {
    doctores: [
        {
            nombre: "Dra. Pamela Chávez",
            especialidad: "Cardiología",
            horarios: [
                { dia: "Lunes", horario: "9:00 - 13:00" },
                { dia: "Miércoles", horario: "15:00 - 18:00" },
            ],
            contacto: {
                email: "p.chavez@hospital.com",
                telefono: "987654320",
            },
        },
        {
            nombre: "Dra. Maria Salisbury",
            especialidad: "Neurología",
            horarios: [
                { dia: "Martes", horario: "10:00 - 14:00" },
                { dia: "Jueves", horario: "16:00 - 19:00" },
            ],
            contacto: {
                email: "m.salisbury@hospital.com",
                telefono: "956473829",
            },
        },
        {
            nombre: "Dra. Philipp Anwandter",
            especialidad: "Pediatría",
            horarios: [
                { dia: "Viernes", horario: "8:00 - 12:00" },
                { dia: "Sábado", horario: "9:00 - 13:00" },
            ],
            contacto: {
                email: "p.anwandter@hospital.com",
                telefono: "956837264",
            },
        },
        {
            nombre: "Dr. Javiera Peréz",
            especialidad: "Ginecología",
            horarios: [
                { dia: "Domingo", horario: "14:00 - 18:00" },
                { dia: "Sábado", horario: "15:00 - 19:00" },
            ],
            contacto: {
                email: "j.perez@hospital.com",
                telefono: "998877655",
            },
        },
        {
            nombre: "Dr. Marcelo Enríquez",
            especialidad: "Oncología",
            horarios: [
                { dia: "Lunes", horario: "8:00 - 12:00" },
                { dia: "Jueves", horario: "14:00 - 18:00" },
            ],
            contacto: {
                email: "m.enriquez@hospital.com",
                telefono: "976543210",
            },
        },
        {
            nombre: "Dr. Carmen Barrientos",
            especialidad: "Psiquiatría",
            horarios: [
                { dia: "Martes", horario: "10:00 - 14:00" },
                { dia: "Sábado", horario: "11:00 - 15:00" },
            ],
            contacto: {
                email: "c.barrientos@hospital.com",
                telefono: "965432910",
            },
        }
    ],
};

//mostrar los datos en el elemento outputJSON
function mostrarListaJSON() {
    console.log("Lista datos JSON:", doctoresJSON);
    outputJSON.textContent = JSON.stringify(doctoresJSON, null, 2);
}

//destructurar JSON
function destructurarJSON() {
    const {
        doctores: [ {
            nombre,
            especialidad,
            horarios: [{ dia, horario }],
            contacto: { email, telefono },
        },], } = doctoresJSON;
    const resultado = `Destructuración - Nombre: ${nombre}, especialidad: ${especialidad}, email: ${email}, telefono: ${telefono}, Día: ${dia}, Horario: ${horario}`;
    console.log(resultado);
    outputJSON.textContent = resultado;
}
destructurarJSON();


//clonar JSON

function clonarJSON() {
    const clone = JSON.parse(JSON.stringify(doctoresJSON));
    console.log("Clonación JSON:", clone);
    outputJSON.textContent =
        "Clonación de JSON:\n" + JSON.stringify(clone, null, 2);
}

//merge de JSONs

function mergeJSON() {
    const datosAñadidos = {
        informacion_extra: [
            {
                nombre: "Dra. Pamela Chávez",
                experiencia: 10,
                disponibilidad: [
                    { disponible: "Martes" },
                    { noDisponible: "Jueves" },
                ],
            },
            {
                nombre: "Dr. Maria Salisbury",
                experiencia: 8,
                disponibilidad: [
                    { disponible: "Lunes" },
                    { noDisponible: "Viernes" },
                ],
            },
            {
                nombre: "Dra. Philipp Anwandter",
                experiencia: 12,
                disponibilidad: [
                    { disponible: "Martes" },
                    { noDisponible: "Sabado" },
                ],
            },
            {
                nombre: "Dr. Javiera Peréz",
                experiencia: 14,
                disponibilidad: [
                    { disponible: "Miercoles" },
                    { noDisponible: "Viernes" },
                ],
            },
            {
                nombre: "Dr. Marcelo Enríquez",
                experiencia: 16,
                disponibilidad: [
                    { disponible: "Domingo" },
                    { noDisponible: "Sábado" },
                ],
            },
            {
                nombre: "Dr. Carmen Barrientos",
                experiencia: 18,
                disponibilidad: [
                    { disponible: "Miércoles" },
                    { noDisponible: "Sábado" },
                ],
            }
        ],
    };
    /* 
        const datosAñadidos = {
    
            especialistas: 5,
            disponibilidad: "disponible",
        }; */
    const merged = { ...doctoresJSON, ...datosAñadidos };
    console.log("Merge JSONs:", merged);
    outputJSON.textContent =
        "Merge de JSONs:\n" + JSON.stringify(merged, null, 2);
}

//Stringify JSON

function stringifyJSON() {
    const jsonString = JSON.stringify(doctoresJSON);
    console.log("Stringify JSON:", jsonString);
    outputJSON.textContent =
        "Stringify JSON:\n" + jsonString;
}

//recorrer JSON

function recorrerJSON(obj) {
    let resultados = "Recorrer JSON:\n ";
    obj.doctores.forEach((doctor, index) => {
        resultados += `\nDoctor ${index + 1}:\n`;
        resultados += `Nombre: ${doctor.nombre}\n`;
        resultados += `Especialidad: ${doctor.especialidad}\n`;
        if (doctor.horarios) {
            resultados += `Horarios:\n`;
            doctor.horarios.forEach(horario => {
                resultados += `Día: ${horario.dia}, Horario: ${horario.horario}\n`;
            });
        }
        if (doctor.contacto) {
            resultados += `Contacto:\n`;
            resultados += `Email: ${doctor.contacto.email}, Teléfono: ${doctor.contacto.telefono}\n`;
        }
        if (doctor.informacion_extra) {
            resultados += `Información extra:\n`;
            doctor.informacion_extra.forEach(info => {
                resultados += `Nombre: ${info.nombre}, Experiencia: ${info.experiencia}, Disponibilidad: ${info.disponibilidad.map(disponibilidad => disponibilidad.disponible ? disponibilidad.disponible : disponibilidad.noDisponible).join(', ')}`;
            });
        }
    });
    console.log(resultados);
    outputJSON.textContent = resultados;
}
recorrerJSON(doctoresJSON);


window.destructurarJSON = destructurarJSON;
window.mostrarListaJSON = mostrarListaJSON;
