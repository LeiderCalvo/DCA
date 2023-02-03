//DATA TYPES IN JS

const var1 = "New World"; //returns String
const var2 = 5; //returns Number
const var3 = true; //returns Boolean
const var4 = [1, 2, 3]; //returns Object
const var5 = null; //returns Object (Value is null, but type is still an object)
let var6; //returns Undefined

const foo = 42; // foo is a number
const result = foo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand

/*Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures*/

/*------------------------------------------------------------------------------------------------------------------*/

//CHARACTERISTICS OF HANDLING TYPES IN JS

typeof "foo";
("string");
typeof true;
("boolean");
typeof 42;
("number");

if (typeof bar === "number") {
  //whatever
}

typeof new Boolean(false);
("object");
typeof new String("foo");
("object");
typeof new Number(42);
("object");

Object.prototype.toString.call([1, 2, 3]);
("[object Array]");
Object.prototype.toString.call("foo bar");
("[object String]");
Object.prototype.toString.call(45);
("[object Number]");
Object.prototype.toString.call(false);
("[object Boolean]");
Object.prototype.toString.call(new String("foo bar"));
("[object String]");
Object.prototype.toString.call(null);
("[object Null]");
Object.prototype.toString.call(undefined);
("[object Undefined]");

/*Reference: https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures*/

/*------------------------------------------------------------------------------------------------------------------*/

//FLOW CONTROL STRUCTURES

if (condición) {
  // true
} else {
  // false
}

if (condición) {
  // true
} else if (condición2) {
  // true
} else {
  // false
}

switch (data) {
  case data1:
    //code
    break;
  case data2:
    //code
    break;
  case data3:
    //code
    break;
  default:
  //code
}

for (let counter = 0; counter <= 5; counter++) {
  alert("Value of counter = " + counter);
}

let i = 0;

while (i < 10) {
  alert("i = " + i);
  i++;
}

//It differs from the while loop, which is always executed 1 time, then it can be executed more than once, if the conditions are met
do {
  alert("i = " + i);
  i++;
} while (i < 10);

/*------------------------------------------------------------------------------------------------------------------*/

//ARRAYS

//Arrays in js?
const myArray = [];
const myElement = {
  id: 12,
  value: 44,
};

myArray[0] = myElement;

const letters = new Array("a", "b", "c"); // array with 3 elements
const letters2 = new Array(3); //empty array

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

const firstPart = [1, 2, 3];
const secondPart = [4, 5, 6];

firstPart.concat(firstPart); // Return [1, 2, 3, 1, 2, 3]
firstPart.concat(secondPart);

/*Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array*/

/*------------------------------------------------------------------------------------------------------------------*/

//FUNCTIONS AND OBJECTS

const f = function (n) {
  console.log(n);
};
f(3); // logs 3

function abc(n) {
  console.log(n);
}

abc(3); // logs 3
xyz(5); // logs 5

function xyz(n) {
  console.log(n);
}

const myFunc = (a, b) => a + b;
const bob = (a) => a + 100;

const student = {
  id: 12,
  name: "Isaac",
  marks: 81,
};

console.log(student.name); // Prints Isaac
console.log(student.id); // Prints 12
console.log(student.marks); // Prints 81

let x;
if (cond) {
  x = { greeting: "hi there" };
}

const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const myCar = new Car("Eagle", "Talon TSi", 1993);
const kenscar = new Car("Nissan", "300ZX", 1992);

const car = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};

// Dot notation
car.make = "Ford";
car.model = "Mustang";
car.year = 1969;

// Bracket notation
car["make"] = "Ford";
car["model"] = "Mustang";
car["year"] = 1969;
