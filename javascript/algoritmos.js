//elemento salida

const outputAlgoritmos = document.getElementById("algoritmos-output");

//arreglo doctor 
const arregloDoctores = ["Pamela Chavez", "Maria Salisbury", "Philipp Anwandter", "Javiera Pérez", "Marcelo Enriquez", "Carmen Barrientos"
];
// arreglo experiencias

const arregloExperiencias = [10, 8, 12, 15, 5, 7];

//algoritmos para buscar un doctor especifico

function buscarDoctorPorNombre(arregloDoctores, name) {
    let find = -1;
    //mostrar la lista completa de doctores 
    outputAlgoritmos.textContent = `Lista de doctores:\n${arregloDoctores.join("\n")}\n\nBuscando doctor por nombre: ${name}\n`;
    for (let i = 0; i < arregloDoctores.length; i++) {
        if (arregloDoctores[i].toLowerCase() === name.toLowerCase()) {
            find = i;
            break;
        }
    }
    const mensaje = find !== -1 
        ? `✅ Doctor "${name}" encontrado en la posición ${find}.`
        : `❌ Doctor "${name}" no encontrado en el arreglo.`;
    outputAlgoritmos.textContent += mensaje;
}

//realizando la busqueda de doctor por nombre
function buscandoDoctor(){
    const name = (prompt("Ingrese el nombre del doctor: "));
    if (name) {
        console.log("Buscando doctor por nombre...");
        buscarDoctorPorNombre(arregloDoctores, name.trim());
    } else {
        const errorMensaje = "Por favor, ingrese un nombre válido.";
        outputAlgoritmos.textContent = errorMensaje;
    }

}
//implementación del algoritmo de ordenamiento burbuja

function ordenamientoBurbuja(arregloExperiencias) {
    let arregloOrdenado = [...arregloExperiencias]; //clonando arreglo
    for (let i = 0; i < arregloOrdenado.length; i++) {
        for (let j = 0; j < arregloOrdenado.length - i - 1; j++) {
            if (arregloOrdenado[j] > arregloOrdenado[j + 1]) {
                //intercambiar valores
                [arregloOrdenado[j], arregloOrdenado[j + 1]] = [
                    arregloOrdenado[j + 1],
                    arregloOrdenado[j],
                ]
            }
        }
    }
    console.log("Lista ordenada por años de experiencia:", arregloOrdenado);
    outputAlgoritmos.textContent = `Lista ordenada por ordenamiento burbuja:\n${arregloOrdenado.join("\n")}`;
}

//realizando el ordenamiento burbuja
function ordenarLista(){
    console.log("Lista original: ", arregloExperiencias);
    outputAlgoritmos.textContent = `Lista original:\n${arregloExperiencias.join("\n")}`;
    ordenamientoBurbuja(arregloExperiencias);
}