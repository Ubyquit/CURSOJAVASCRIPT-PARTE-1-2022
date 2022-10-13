// Variables
let nombre = "Luis";
let edad = 32;
let altura = 1.75;

document.write(`V El nombre es <b>${nombre}</b><br>
La edad es  <b>${edad}</b> años <br>
La estatura es  <b>${altura}</b> m <br><br>`);

// Arreglos y tambien objetos
let arrayPersona = ["Luis", 32, 1.75];

document.write(`A El nombre es <b>${arrayPersona[0]}</b><br>
La edad es  <b>${arrayPersona[1]}</b> años <br>
La estatura es  <b>${arrayPersona[2]}</b> m <br><br>`);

// Arreglos asociativos o JSON --> Estructura de CLAVE Y VALOR
let aAsociativoPersona = {
    nombre: "Luis",
    edad: 32,
    altura: 1.75,
};

let aaNombre = aAsociativoPersona["nombre"];
let aaEdad = aAsociativoPersona["edad"];
let aaAltura = aAsociativoPersona["altura"];

document.write(`AA El nombre es <b>${aaNombre}</b><br>
La edad es  <b>${aaEdad}</b> años <br>
La estatura es  <b>${aaAltura}</b> m <br><br>`);

