const outputOOP = document.getElementById('eventosOOP-output');

//definimos la clase Doctor

class Doctor {
    constructor(nombre, especialidad, aniosExperiencia, totalAtendidos) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this._aniosExperiencia = aniosExperiencia;
        this.totalAtendidos = totalAtendidos;
    }

    get aniosExperiencia() { 
        return this._aniosExperiencia; 
    } 
    set aniosExperiencia(value) {
        if (value < 0) {
            throw new Error('No se puede establecer un número negativo de años de experiencia.');
        } 
        this._aniosExperiencia = value;
    }
    presentarDoctor() {
        return `Este es el doctor ${this.nombre}, su especialidad es ${this.especialidad} y tiene ${this.aniosExperiencia} de experiencia.`;
    }
    totalAtendidos() {
        return `Total de pacientes atendidos por el Dr(a). ${this.nombre} y lleva ${this.totalAtendidos} pacientes atendidos.`;
    }
}

//herencia para el cirujano
class Cirujano extends Doctor {
    constructor(nombre, especialidad, aniosExperiencia, totalAtendidos, totalCirugias) {
        super(nombre, especialidad, aniosExperiencia, totalAtendidos, totalCirugias);
        this.totalCirugias = totalCirugias;
    }
    //polimorfismo para el total de cirugias
    calcularTotalCirugias() {
        return `Total de cirugías realizadas por el Cirujano ${this.nombre}: ${this.totalCirugias}`;
    }
    //metodo para presentacion de cirujano
    presentarCirujano() {
        return `El cirujano Dr(a). ${this.nombre}, está especializado en ${this.especialidad}, con ${this.aniosExperiencia} años de experiencia, ${this.totalCirugias} cirugías realizadas y ${this.totalAtendidos} pacientes atendidos.`;
    }
}
//usando las clases

function mostrarDoctores() {
    const doctorGeneral = new Doctor("María Pérez", "Medicina General", 10, 300);

    let muestra1 = "DOCTOR:\n";
    muestra1 += doctorGeneral.presentarDoctor() + "\n";
    muestra1 += doctorGeneral.totalAtendidos() + "\n";

    muestra1 += "Encapsulación de años de experiencia:\n";
    muestra1 += `Años de experiencia inicial del doctor: ${doctorGeneral.aniosExperiencia}\n`;
    doctorGeneral.aniosExperiencia = 12; //usando el setter
    muestra1 += `Años de experiencia actualizados: ${doctorGeneral.aniosExperiencia}\n`;

    outputOOP.textContent = muestra1;
}

function mostrarPolimorfismo(){
    const doctorGeneral2 = new Doctor("Pamela Chavez", "Neurocirugia", 20, 150);
    const cirujano2 = new Cirujano("Carmen Barrientos", "Kinesiologia", 7, 34, 200);

    const mensajePresentacion1 = doctorGeneral2.presentarDoctor();
    const mensajePresentacion2 = cirujano2.presentarCirujano();
    console.log("desmostrar polimorfismo:", mensajePresentacion1);
    console.log("desmostrar polimorfismo:", mensajePresentacion2);
    outputOOP.textContent =  `Polimorfismo:\n${mensajePresentacion1}\n${mensajePresentacion2}`;
}

//mostrar cirujano
function mostrarCirujanos() {
    const cirujano = new Cirujano("Juan Pérez", "Cirujano Cardiovascular", 8, 200, 50);
    let muestra2 = "CIRUJANO:\n";
    muestra2 += cirujano.presentarCirujano() + "\n";
    muestra2 += cirujano.calcularTotalCirugias() + "\n\n";

    //Encapsulamiento: Cambiar años de experiencia y mostrar
    muestra2 += "Encapsulación de años de experiencia:\n";
    muestra2 += `Años de experiencia inicial del cirujano: ${cirujano.aniosExperiencia}\n`;
    cirujano.aniosExperiencia = 20; 
    muestra2 += `Años de experiencia actualizados: ${cirujano.aniosExperiencia}\n`;

    // Mostrar en el elemento HTML
    outputOOP.textContent = muestra2;
}

/* document
  .getElementById("btnMostrarDoctor")
  .addEventListener("click", mostrarDoctores);
 */

