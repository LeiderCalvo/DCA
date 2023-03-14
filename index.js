// Callbacks
// Un callback es simplemente una función que se pasa como parametro a otra funcion que se llama de forma asíncrona después de que se haya completado una operación.

const saludar = (nombre) => {
    console.log(`Hola ${nombre}!`);
};

setTimeout(() => {
    saludar('Juan')
, 2000});

setTimeout(function(){
    console.log('Hola')
}, 4000);

//Veamos como funciona el asincronismo en Javascript
console.log('A');
setTimeout(function () {
    console.log('B');
}, 2000);
console.log('C');

//Event loop
console.log('Start');

setTimeout(() => console.log('Callback'), 0);

console.log('End');


// Promises
// A promise is the object that represents a value that will be available now, in the future, or perhaps never. So we don't know when they will be available. For this reason we leave prepared within the promise the code that will be executed when the result arrives or even when the result is an error.

let  x = Math.floor(Math.random() * 10);
const promise = new Promise((resolve, reject) =>{
    if(x >= 5){
        resolve('La variable es mayor o igual a 5');
    }else{
        reject('La variable es menor que 5');
    }
});

promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
});

// Resolve is a function that receives as a parameter the object that we want it to return when the code has the result that we expect.

// Reject is a function that takes as a parameter the object that will be returned if we get an error, in our asynchronous code.

let mensaje = new Promise((resolve, reject)=>{
    setTimeout(function () {
        resolve('Este es el mensaje');
    }, 2000);
});

mensaje.then(m =>{
    console.log(m)  
}).catch(function () {
    console.log('error');
});