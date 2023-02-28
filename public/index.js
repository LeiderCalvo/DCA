"use strict";
let nombre = "Juan";
let edad = 30;
let esMayor = true;
let arreglo = ['Apple'];
function saludar(nombre) {
    return "Hola, " + nombre;
}
console.log(saludar(nombre));
const user = {
    name: "Hayes",
    id: 0,
};
//If you provide an object that doesn’t match the interface you have provided, TypeScript will warn you
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user2 = new UserAccount("Murphy", 1);
function getLength(obj) {
    return obj.length;
}
let StringArray1 = ['Apple'];
let StringArray2 = ['Apple'];
