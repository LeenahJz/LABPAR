//elemento salida

const outputFuncional = document.getElementById("funcional-output");

//funcion currying para calcular costo total de servicios de un paconsulta ciente según número de consultas y precio de cada

function calcularPrecioConsultas(cantidadConsultas) {
    return function (precioConsulta) {
        return cantidadConsultas * precioConsulta;
    };
}

function calcularCosto() {
    const precioFinal1 = calcularPrecioConsultas(5)(5000);
    const precioFinal2 = calcularPrecioConsultas(10)(10000);
    const precioFinal3 = calcularPrecioConsultas(15)(15000);
    console.log("Costo total de su consultas:", precioFinal1);
    console.log("Costo total de su consultas:", precioFinal2);
    console.log("Costo total de su consultas:", precioFinal3);
    outputFuncional.textContent = `Costo total de su consulta 1: $${precioFinal1}\nCosto total de su consulta 2: $${precioFinal2}\nCosto total de su consulta 3: $${precioFinal3}`;
}

//funcion flecha para hacer un funcion que calcule tiempo promedio de espera 

const calcularTiempoEspera = (consultas) => {
    return consultas.reduce((suma, consulta) => suma + consulta.tiempoEspera, 0) / consultas.length;
};

function calcularTiempoEsperaConsultas() {
    const consultas = [
        { paciente: "Juan", tiempoEspera: 20 },
        { paciente: "Maria", tiempoEspera: 35 },
        { paciente: "Pedro", tiempoEspera: 40 },
        { paciente: "Luis", tiempoEspera: 15 },
    ];
    console.log("Tiempo promedio de espera:", calcularTiempoEspera(consultas));
    outputFuncional.textContent += `\nTiempo promedio de espera: ${calcularTiempoEspera(consultas)} minutos`;
}

//funcion recursiva para calcular total de horas de consulta de un doctor
const doctores = [
    {
        nombre: "Pamela Chavez",
        dias: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
        horas: [3, 4, 6, 7, 5],
    },
    {
        nombre: "Maria Salisbury",
        dias: ["Lunes", "Miercoles", "Viernes"],
        horas: [5, 6, 4],
    },
    {
        nombre: "Philipp Anwandter",
        dias: ["Martes", "Jueves"],
        horas: [7, 8],
    },
];
//función recursiva para calcular las horas totales
function calcularHorasConsultas(horas, total = 0) {
    if (horas.length === 0) {
        return total;
    }
    return calcularHorasConsultas(horas.slice(1), total + horas[0]);
}

//función para obtener las horas totales de un doctor
function calcularHorasConsultasDoctor() {
    const doctorSeleccionado = doctores[0]; //doctor indice 0
    const totalHoras = calcularHorasConsultas(doctorSeleccionado.horas);
    console.log(`Total de horas de consulta del doctor ${doctorSeleccionado.nombre}: ${totalHoras} horas`);
    outputFuncional.textContent += `\nTotal de horas de consulta del doctor ${doctorSeleccionado.nombre}: ${totalHoras} horas`;
}


//Composición de funciones
//funciones para calcular los descuentos
function descCincoConsultas(precioConsulta) {
    return precioConsulta * 0.1; //10%
}

function descDiezConsultas(precioConsulta) {
    return precioConsulta * 0.2; //20%
}

function descQuinceConsultas(precioConsulta) {
    return precioConsulta * 0.3; //30%
}

//función para calcular el costo total después de aplicar el descuento
function calcularCostoTotal(cantidadConsultas, precioConsulta, descuentoFunc) {
    const costoSinDescuento = cantidadConsultas * precioConsulta; 
    const descuento = descuentoFunc(costoSinDescuento); //descuento calculado
    return costoSinDescuento - descuento; //costo final con descuento
}

//función principal para calcular y mostrar los costos totales
function calcularCostosConDescuentos() {
    const precioConsulta = 5000; //valor de cada consulta

    //dfinición de las consultas y sus respectivos descuentos
    const consulta1 = { cantidad: 5, descuentoFunc: descCincoConsultas };
    const consulta2 = { cantidad: 10, descuentoFunc: descDiezConsultas };
    const consulta3 = { cantidad: 15, descuentoFunc: descQuinceConsultas };

    //cálculo de los costos finales
    const costoFinal1 = calcularCostoTotal(consulta1.cantidad, precioConsulta, consulta1.descuentoFunc);
    const costoFinal2 = calcularCostoTotal(consulta2.cantidad, precioConsulta, consulta2.descuentoFunc);
    const costoFinal3 = calcularCostoTotal(consulta3.cantidad, precioConsulta, consulta3.descuentoFunc);

    //mostrar resultados en la página
    outputFuncional.textContent = `
    Costo total para 5 consultas (10% descuento): ${costoFinal1} CLP
    Costo total para 10 consultas (20% descuento): ${costoFinal2} CLP
    Costo total para 15 consultas (30% descuento): ${costoFinal3} CLP
    `;
}

//