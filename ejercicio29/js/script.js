/*
 * * FUNCIONES FLECHA
 */

const operacion = (numero1, numero2) => {
  let operacion = numero1 * numero2;
  document.write(operacion);
};

operacion(2, 4);
document.write("<br>");

const saludo = (nombre) => {
  document.write(`Hola ${nombre} <br>`);
};

const saludo2 = nombre => document.write(`Hola ${nombre} <br>`);

saludo("Luis");
saludo2("Eduardo");
