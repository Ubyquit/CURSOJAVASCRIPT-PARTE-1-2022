/* 
UN JÓVEN VA A UNA HELADERÍA, ÉL QUIERE COMPRAR EL HELADO MÁS CARO QUE PUEDA COMPRAR.
 
JOVEN TIENE $N CANTIDAD DE DINERO.
 
LOS PRECIOS DEL HELADO SON LOS SIGUIENTES:
 
PALETA DE UVA $15 MXN
PALETA DE FRESA $15 MXN
PALETA DE CREMA $25 MXN
BOTE 1L DE HELADO DE YOGUR $45 MXN
BOTE 1L DE HELADO DE FRESA $45 MXN
BOTE 1L DE HELADO DE NAPOLITANO $50 MXN
 
CREAR SOLUCIONES
 
•	SOLICITAR EL NOMBRE DEL JOVEN
•	PEDIR QUE INGRESEN EL MONTO QUE TIENEN Y MOSTRAR PARA QUE HELADO LES ALCANZA.
•	SI HAY 2 O MÁS CON EL MISMO PRECIO, MOSTRAR AMBOS.
•	AL FINAL DEBERÁ MOSTRAR EL CAMBIO SI ES QUE SE COMPRA EL PRODUCTO.
 */

let pUva = 15;
let pFresa = 15;
let pCrema = 25;
let bYogur = 45;
let bFresa = 45;
let bNapolitano = 50;
let opcion;

let nombre = prompt("Ingresa tu nombre:");
let monto = prompt("Ingresa el monto que puedes gastar:");

document.write(`Bienvenido ${nombre} a la heladería`);

if (monto >= pUva && monto < pCrema) {
  opcion = prompt(`[1] PALETA DE UVA $${pUva} MXN 
  \n[2] PALETA DE FRESA $${pFresa} MXN  
  \n[0] SALIR`);

  if (opcion == 1) {
    document.write("<br>");
    document.write(`HAZ COMPRADO LA PALETA DE UVA $${pUva} MXN`);
    document.write(`<br>TU CAMBIO ES: $${monto - pUva}`);
  } else if (opcion == 2) {
    document.write("<br>");
    document.write(`HAZ COMPRADO LA PALETA DE FRESA $${pFresa} MXN`);
    document.write(`<br>TU CAMBIO ES: $${monto - pFresa}`);
  } else {
    document.write(`VUELVE PRONTO | GRACIAS`);
  }
} else if (monto >= pCrema && monto < bYogur) {
  opcion = prompt(`[1] PALETA DE CREMA $${pCrema} MXN \n[0] SALIR`);

  if (opcion == 1) {
    document.write("<br>");
    document.write(`HAZ COMPRADO LA PALETA DE CREMA $${pCrema} MXN`);
    document.write(`<br>TU CAMBIO ES: $${monto - pCrema}`);
  } else {
    document.write(`VUELVE PRONTO | GRACIAS`);
  }
} else if (monto >= bYogur && monto < bNapolitano) {
  opcion = prompt(`[1] BOTE 1L DE HELADO DE YOGUR $${bYogur} MXN 
  \n[2] BOTE 1L DE HELADO DE FRESA $${bFresa} MXN  
  \n[0] SALIR`);

  if (opcion == 1) {
    document.write("<br>");
    document.write(`HAZ COMPRADO EL BOTE 1L DE HELADO DE YOGUR $${bYogur} MXN`);
    document.write(`<br>TU CAMBIO ES: $${monto - bYogur}`);
  } else if (opcion == 2) {
    document.write("<br>");
    document.write(`HAZ COMPRADO El BOTE 1L DE HELADO DE FRESA $${bFresa} MXN`);
    document.write(`<br>TU CAMBIO ES: $${monto - bFresa}`);
  } else {
    document.write(`VUELVE PRONTO | GRACIAS`);
  }
} else if (monto >= bNapolitano) {
  opcion = prompt(
    `[1] BOTE 1L DE HELADO DE NAPOLITANO $${bNapolitano} MXN \n[0] SALIR`
  );

  if (opcion == 1) {
    document.write("<br>");
    document.write(
      `HAZ COMPRADO EL BOTE 1L DE HELADO DE NAPOLITANO $${bNapolitano} MXN`
    );
    document.write(`<br>TU CAMBIO ES: $${monto - bNapolitano}`);
  } else {
    document.write(`VUELVE PRONTO | GRACIAS`);
  }
} else {
  document.write(`\n${nombre} ESTÁS POBRE`);
  document.write(`\nVUELVE PRONTO | GRACIAS`);
}
