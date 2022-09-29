/* Realizar un programa que me solicite un usuario y una contraseña
  Compararla con unas constantes con valor asignado.

  Si el usuario coloca los datos correctos, darle acceso al programa,
  de lo contrario, denegarle el acceso con su respectivo alert.
*/

const USER = "Luis";
const PASSWORD = "JavaScript";

let usr = prompt("Ingresa tu usuario: ");
let pwd = prompt("Ingresa tu contraseña");

// Modo normal
if (USER === usr && PASSWORD === pwd) {
  document.write("<h1>Bienvenido al sistema</h1>");
} else if (USER !== usr && PASSWORD !== pwd) {
  alert("El usuario y la contraseña son incorrecta");
} else if (USER !== usr) {
  alert("El usuario es incorrecto");
} else if (PASSWORD !== pwd) {
  alert("La contraseña es incorrecta");
}

/* Modo Google
if (USER == usr) {
  let pwd = prompt("Ingresa tu contraseña");
  if (PASSWORD == pwd) {
    document.write("<h1>Bienvenido al sistema</h1>");
  } else {
    alert("La contraseña es incorrecta");
  }
} else {
  alert("El usuario es incorrecto");
} */
