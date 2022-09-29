/* Realizar un programa que me solicite 2 calificaciones.
 * Generar el promedio final
 * Si el promedio es mayor e igual a 8 - Es aprobado
 * Si el promedio es menor a 8 - Es reprobado
 */

let cal1 = prompt("Ingrese la primera calificación: ");
let cal2 = prompt("Ingrese la segunda calificación: ");

let promedio = (parseInt(cal1) + parseInt(cal2))/2;

if(promedio >= 8){
  document.write("El alumno aprobo con " + promedio);
}else{
  document.write("El alumno reprobo con " + promedio);
}

