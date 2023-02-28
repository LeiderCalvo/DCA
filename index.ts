let nombre: string = "Juan";
let edad: number = 30;
let esMayor: boolean = true;
let arreglo: string[] = ['Apple'];

function saludar(nombre: string): string {
    return "Hola, " + nombre;
}

console.log(saludar(nombre));

// Interface 

interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
};

//If you provide an object that doesn’t match the interface you have provided, TypeScript will warn you

class UserAccount {
    name: string;
    id: number;
    
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user2: User = new UserAccount("Murphy", 1);

//Unions
//With a union, you can declare that a type could be one of many types. For example, you can describe a boolean type as being either true or false:

type MyBool = true | false;

function getLength(obj: string | string[]) {
    return obj.length;
}

//Generics
type StringArray = Array<string>;
let StringArray1:  Array<string> = ['Apple'];
let StringArray2: StringArray = ['Apple'];
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;