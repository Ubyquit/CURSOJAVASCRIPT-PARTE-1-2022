// <br> es un salto de linea
// <h#> h1,h2,h3,h4,h5,h6 son titulos y va de mayor a menor
// https://developer.mozilla.org/es/docs/Web/HTML/Element/Heading_Elements

// Cuando las variables estan compuestas de 2 o mas palabras
// camel case  camelCase se inicia con minuscula y las demas inician con mayuscula
// snake case  snake_case todas se inician con minusculas pero estan unidad con _
// pascal case PascalCase Todas las palabras inician con mayusculas

let ine = {
  nombre: "LUIS",
  apellidoPaterno: "VILLAFAÑA",
  apellidoMaterno: "REJON",
  domicio: "Cancún, Quintana Roo",
  claveElector: "VIRLJL90092531H000",
};

let nombre = ine["nombre"];
let apellidoPaterno = ine["apellidoPaterno"];
let apellidoMaterno = ine["apellidoMaterno"];

document.write("<p><h1>INSTITUTO NACIONAL ELECTORAL</h1></p>");
document.write("<p><h3>CREDENCIAL PARA VOTAR</h3></p>");

document.write('<img src="https://media-exp2.licdn.com/dms/image/C4E03AQEfQcAaOIAZRw/profile-displayphoto-shrink_200_200/0/1517043051432?e=2147483647&v=beta&t=bT1j80XNtKTEvqCEEhVLxkP3jPJ4fZadQ0-Dtp8kWCg">');
document.write(`<p>NOMBRE</p> ${apellidoPaterno}`);
document.write(`<p>${apellidoMaterno}</p> `);
document.write(`<p>${nombre}</p>`);
