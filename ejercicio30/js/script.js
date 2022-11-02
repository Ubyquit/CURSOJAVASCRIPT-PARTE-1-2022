/*
 * * CLASS == OBJETOS
 */

class animal {
  constructor(especie, edad, color, patas) {
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.patas = patas;

    this.info = `Soy un ${this.especie}, tengo ${this.edad} años,
    soy de color ${this.color}, tengo ${this.patas} patas`;
  }
  maullar() {
    document.write(this.info + " miaw miaw <br>");
  }
}

class Perro extends animal {
  constructor(especie, edad, color, raza) {
    super(especie, edad, color);
    this.raza = raza;

    this.info = `Soy un ${this.especie}, tengo ${this.edad} años,
    soy de color ${this.color}, mi raza es ${this.raza}`;
  }
  ladrar() {
    document.write(this.info + " waw waw <br>");
  }
}

let perro = new Perro("perro", 30, "rojo", "Pitbull");
let gato = new animal("gato", 1, "cafe con blanco", 4);
let loro = new animal("loro", 12, "verde", 2);
let loro2 = new animal("loro", 12, "verde", 5);

perro.ladrar();
