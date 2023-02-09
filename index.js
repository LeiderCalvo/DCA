/**
 * 1. Install Node
 * 2. create index.js file with a console.log('hi')
 * 3. run the file with node index.js
 * 4. create a Node module
 */

const math = require('./math.js'); // It is relative because otherwise it goes to the OS
console.log(math);
console.log(math.add(1, 2));
console.log('////////////////////////////');

/**
 * Can also import modules that Node already brings with it.
 */
const os = require('os');
console.log(os.platform());
console.log(os.release());
console.log(os.freemem());
console.log(os.totalmem());
/*
console.log("////////////////////////////");

const fs = require("fs");
fs.writeFile("new.txt", "hola, soy el contenido", (err) => {
  if (err) {
    console.log("hubo un error");
  } else {
    console.log("se creó con éxito");
  }
});

fs.readFile("./new.txt", (err, data) => {
  if (err) {
  } else {
    console.log(data);
    console.log(data.toString());
  }
});
*/
console.log('////////////////////////////');

const _ = require('lodash');
console.log(_);
console.log(_.capitalize('pedro'));
console.log(_.camelCase('pedro is a good person'));
console.log(_.snakeCase('pedro is a good person'));
console.log(_.kebabCase('pedro is a good person'));

console.log('////////////////////////////');