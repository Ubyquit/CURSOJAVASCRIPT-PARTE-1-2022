/*
Cajero automatico

ingresar la tarjeta -> usuario
nip -> contraseña
visualizar: retiro, ingreso, consulta de saldo
*/

const TARJETABANCARIA = 1; // Inicializamos una constante del # de la tarjeta
const NIP = 1010; // Inicializamos  una constante del NIP
let contador = 1;
let saldo = 10000000;

let tarjetaBanco = prompt("Ingresa la tarjeta"); // solicitar la tarjeta

if (TARJETABANCARIA == tarjetaBanco) {
  // Comparar los datos de la tarjeta
  let nip = prompt("Ingresa tu NIP"); // Solicitar los datos del nip
  if (NIP == nip) {
    // Comparar los datos del nip
    document.write("Buenvenido al banco AHO"); // dar la bienvenida
  } else {
    do {
      // Vamos a solicitar los datos del nip hasta que sean correctos
      nip = prompt(`Ingresa nuevamente tu NIP \nintento numero ${contador}\n`);
      contador++;
    } while (NIP != nip && contador <= 2);
    document.write("NIP Invalido"); // dar la bienvenida
  }
} else {
  document.write("NIP y/o tarjeta invalida");
}
