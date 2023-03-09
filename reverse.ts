function reverse<T>(arr: T[]): T[] {
    return arr.reverse();
}

const nums = [1, 2, 3, 4, 5];
const reversedNums = reverse(nums); // [5, 4, 3, 2, 1]

const letters = ['a', 'b', 'c', 'd', 'e'];
const reversedLetters = reverse(letters); // ['e', 'd', 'c', 'b', 'a']

/*En este ejemplo, la función reverse utiliza el tipo genérico T para aceptar un arreglo de cualquier tipo. El tipo T se define dentro de los ángulos < > al lado del nombre de la función. La función reverse retorna un arreglo del mismo tipo T que recibió como argumento, que en este caso puede ser un arreglo de números, letras o cualquier otro tipo de dato.*/