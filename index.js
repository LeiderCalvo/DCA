//General topics with objects
const person = {
  name: "Daniel",
  age: 40,
  occupation: "Engineer",
  level: 4,
};

//Getting an object’s keys
//The Object.keys() method returns an array of strings containing all of the object’s keys, sorted by order of appearance:
console.log(Object.keys(person));
// Expected output: ["name", "age", "occupation", "level"]

//Getting an object’s values
//The Object.values() method returns an array of strings containing all of the object’s field values, sorted by order of appearance:
console.log(Object.values(person));
// Expected output: ["Daniel", 40, "Engineer", 4]

//Getting an object’s entries
//The Object.entries() method returns an array of arrays. Each array consists of a pair of values. The first string is the name of a key in the object, the second is its corresponding value

console.log(Object.entries(person));
// Expected output: [["name", "Daniel"], ["age", 40], ["occupation", "Engineer"], ["level", 4]]

//Brackets notation
let dog = {
  name: "Lady",
  friends: ["Moo", "Bowie"],
};

console.log(dog["friends"]); //[ 'Moo', 'Bowie' ]
console.log(dog["friends"][0]); //Moo

//In operator
// Objetos personalizados
var micoche = {
  marca: "Honda",
  modelo: "Accord",
  año: 1998,
};
"marca" in micoche; // devuelve true
"modelo" in micoche; // devuelve true
/*------------------------------------------------------------------------------------------------------------------*/

//Reference and copying
let user = { name: "John" };

let admin = user;

admin.name = "Pete"; // changed by the "admin" reference

console.log(user.name); // 'Pete', changes are seen from the "user" reference

let array1 = {};
let array2 = array1; // copy the reference

console.log(array1 == array2); // true, both variables reference the same object
console.log(array1 === array2); // true

let a = {};
let b = {}; // two independent objects

console.log(a == b); // false

/*------------------------------------------------------------------------------------------------------------------*/

class Person {
  // el "this" hace referencia a la persona que se está creando en esa clase
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  greet() {
    return "reproduciendo " + this.name;
  }

  // esto es un método
  getFullName() {
    return this.name + " " + this.lastName;
  }
}

const juanito = new Person("juanito", "gomez", 20);
const ramoncito = new Person("ramoncito", "lopez", 39);
const julianita = new Person("julianita", "perez", 19);
console.log(juanito);

const juanito3 = { ...juanito }; // shallow copy
juanito3.name = "Andrea"; //The changes made in the copied object also reflect the original object.
console.log(juanito3);
const juanito4 = JSON.parse(JSON.stringify(juanito)); // deep copy - be aware of functions not being copied
juanito4.name = "Andrew";
console.log(juanito4);
const juanito5 = Object.assign({}, juanito);

/*------------------------------------------------------------------------------------------------------------------*/

// Repaso de POO
class Tornillo {
  constructor(tamano) {
    this.tamano = tamano;
  }
}

class Motor {
  constructor(fuerza) {
    this.caballaje = fuerza;
    this.tornillos = [];
    this.tornillos.push(new Tornillo("pequeño"));
    this.tornillos.push(new Tornillo("mediano"));
    this.tornillos.push(new Tornillo("grande"));
  }
}

class Carro {
  constructor(marca) {
    this.marca = marca;
    this.motor = new Motor(200);

    this.tornillos = [];
    this.tornillos.push(new Tornillo("grande"));
    this.tornillos.push(new Tornillo("grande"));
    this.tornillos.push(new Tornillo("grande"));
  }

  acelerar(kmh = 10) {
    if (kmh > 200) {
      console.log("acelero demasiado, entonces rompio el motor");
    } else {
      console.log(`acelerando un carro de la marca ${this.marca} a ${kmh}km/h`);
    }
  }
}

const carroDeLucas = new Carro("chevrolet");
console.log(carroDeLucas);
carroDeLucas.acelerar();
carroDeLucas.acelerar(20);
carroDeLucas.acelerar(500);

//Inheritance

class Camioneta extends Carro {
  constructor(marca) {
    super(marca);
    this.tieneVolco = true;
  }

  acelerar() {
    console.log("acelerando pero más rápido");
  }
  acelerar2() {
    console.log("acelerando pero más rápido");
  }
}

const carroDeLuna = new Camioneta("chevrolet");
console.log(carroDeLuna);
carroDeLuna.acelerar();

/*------------------------------------------------------------------------------------------------------------------*/

//ECS6
const calcularArea = (alto = 1, ancho = 1, largo = 1) => alto * ancho * largo;
const response = calcularArea(25);
console.log(response);

//template literals
const persona = {
  name: "jairo",
  apellido: "lopez",
};

const mensaje = "nombre: " + persona.name + " apellido: " + persona.apellido;
const mensaje2 = `nombre: ${persona.name} apellido: ${persona.apellido}`;
