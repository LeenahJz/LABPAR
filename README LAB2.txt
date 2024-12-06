Esta estructura HTML detalla la página web para un hospital, donde se aplican los tres paradigmas de programación en JavaScript: funcional, orientada a eventos y orientada a objetos.

[Laboratorio2, Módulo3] En el sitio web del hospital se fueron añadiendo eventos, asincronía, y estructuras basadas en clases para modelar la información del sitio.

------CÓMO ABRIR EL ARCHIVO------

-->descargar el LAB2.raw-->descomprimirlo 
-->VSC-->File-->Open Folder-->LAB 2

------Carpeta y subcarpetas-------
LAB 2
--images
--JavaScript
  -estructuras.js
  -algoritmos.js
  -json.js
  -eventosAsync.js
  -funcional.js
  -OOP.js
  -script.js
--json
--node_modules
--scss
--index.html
--package
--package-lock
--README

------Explicación de implementaciones en WEB-------

Currying, función flecha, recursión y composición de funciones:
-se implementa una función que use currying para calcular el costo total de los servicios de un paciente en función del número de consultas realizadas y el precio de cada consulta.
-se usa la función flecha que calcule el tiempo promedio de espera de los pacientes.
-se usa la recursión para calcular de forma recursiva el total de horas de consulta
de un doctor a lo largo de la semana.
-aplicación de composición de funciones para aplicar descuentos a los costos de consultas
en base a la cantidad de consultas realizadas.

Programación orientada a eventos
-se habilita una alerta para avisar que se envió el formulario de contacto y aparece un mensaje de bienvenida.
-se simula una función async/await para que obtenga los datos de los doctores. Y uso de Promise para manejar los casos de éxito o fallo.
-implementación de try/catch en las funciones asíncronas y un callback que se invoque al fallar una petición simulada.

Programación Orientada a Objetos en JavaScript:
-se crea una clase Doctor  y cirujano con herencia de doctor con las propiedades nombre, especialidad, y años de experiencia.
-implementación de un método para mostrar la información de cada cirujano y otro para calcular el total de pacientes atendidos por el doctor.
-implementación del encapsulamiento en la clase, protegiendo la propiedad de años de
experiencia mediante un getter y un setter.
-se utiliza el polimorfismo para sobrescribir un método en la subclase Cirujano que calcule
el número de operaciones realizadas, y una presentación de ambas funciones, doctor y cirujano.



------CRÉDITOS------
images
https://www.pexels.com/es-es/
https://blog.getbootstrap.com/2022/11/11/bootstrap-icons-1-10-0/
https://github.com/404GamerNotFound/bootstrap-5.3-dark-mode-light-mode-switch