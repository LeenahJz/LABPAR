// dark mode

document.addEventListener("DOMContentLoaded", () => {
  const htmlElement = document.documentElement;
    const switchElement = document.getElementById('darkModeSwitch');
  try {
    // Set the default theme to dark if no setting is found in local storage
    const currentTheme = localStorage.getItem('bsTheme') || 'dark';
    htmlElement.setAttribute('data-bs-theme', currentTheme);
    switchElement.checked = currentTheme === 'dark';

    switchElement.addEventListener('change', function () {
        if (this.checked) {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('bsTheme', 'dark');
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('bsTheme', 'light');
        }
    });  


    //verificar que nombre tenga solo letras

    let nameValidator = prompt("Ingrese su nombre: ");
    if (typeof nameValidator === "string" && /^[a-zA-Z\s]+$/.test(nameValidator)) {
      alert("El nombre es valido");
    }
    else {
      alert("El nombre debe contener solo letras")
    }

    //validador de arroba en correo
    let emailValidator = prompt("Ingrese su email: ");
    let arroba = "@";
    if (emailValidator.includes(arroba)) {
      alert("El email ingresado es válido.");
    }
    else if (!emailValidator.includes(arroba)) {
      alert("El email ingresado no es válido, debe inglesar un '@'");
    }

    //validador de numero de celular
    let phoneNumber = (prompt("Ingrese su numero de celular: "));
    if (/^\d+$/.test(phoneNumber)) {
      alert("El numero de celular es un número");
    } else {
      alert("El numero de celular debe contener solo números")
    }

    //función para cargar datos de doctores desde JSON
    fetch('../json/doctores.json')
      .then(response => response.json()) //Convierte la respuesta en un objeto JSON
      .then(data => { // Ahora `data` es el objeto JSON (array)
        console.log('Datos cargados correctamente:', data);

        let divDoctores = document.getElementById('doctor-list');

        //recorriendo el arreglo de doctores
        data.forEach(function (elemento, indice) {
          //condicional para mostrar solo doctores con experiencia sobre 10 años
          if (elemento.experiencia >= 10) {
            console.log(`Doctor ${indice}: ${elemento.nombres} ${elemento.apellidos},
        Experiencia: ${elemento.experiencia} años,
        Universidad: ${elemento.universidad},
        Especialidad: ${elemento.especialidad}`);
            let doctorElement = document.createElement('div');
            doctorElement.classList.add('doctor-card');
            divDoctores.innerHTML += `
            <h2>Dr. ${elemento.nombres} ${elemento.apellidos}</h2>
            <p>Experiencia: ${elemento.experiencia} años</p>
            <p>Universidad: ${elemento.universidad}</p>
            <p>Especialidad: ${elemento.especialidad}</p>
          `;
            divDoctores.appendChild(doctorElement);
          }
        });
      })
      .catch(error => {
        console.error('Error al cargar datos: ', error);
      });

    
  } //uso debbuger para examinar cualquier error
    catch (error) {
    debugger; 
    console.error('Error al cargar datos: ', error);
  }
});

