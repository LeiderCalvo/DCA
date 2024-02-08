import { suma, resta, multiplicacion } from './utilsMath.js'; //Cuando usamos el export const de forma individual
// import suma from './utilsMath.js'; //Importanción del por defecto

//Esto es cuando utilizamos module.exports en el archivo que estamos exportando los modulos

// const math = require('./utilsMath.js');
// const sumaTotal = math.suma(1, 2);
// console.log(sumaTotal);

const sumaTot = suma(1, 2);
console.log(sumaTot);
