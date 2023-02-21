/**
 * Optional Params
 * 
const getSize = ({ a = 2, b = 6 } = {}) => {
    return a * b
}

console.log(getSize())
console.log(getSize({
    a: 9
}))
 */




/**
 * RORO

const createFolder = ({ name, archivos, extensions }) => {
    console.log(`la carpeta es: ${name}, y los archivos son: ${archivos} con la extension ${extensions}`)
}

createFolder({
    archivos: "1, riri",
    extensions: ".js",
    name: "dcaFolder"
})
const f = () => {
    return {
        name: "francisco",
        desayunos: 3,
        almuerzos: 2
    }
}

const { almuerzos, name, desayunos} = f()
console.log({ almuerzos, name, desayunos})
*/




/**
 * Recursive functions
 * 
const func = (n) => {
    console.log(n);
    if(n > 0) func(n - 1)
}

func(9)
*/