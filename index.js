//Crear la función
const loquemedelagana = (nombre) => {
	console.log('Holaaaaa' + nombre);
};

//Ejecutar la función
loquemedelagana('Andres');
loquemedelagana(15);

const miObjecto = {
	nombre: 'Pablo',
	edad: 20,
};

console.log(miObjecto.edad); // 20

const miArreglo = [5, 20, 15];

console.log(miArreglo[0]); // 5

// ----------------------------------------------------------------------------------------------------------------
// Primer ejercicio

const personas = [
	{
		nombre: 'Juan',
		edad: 10,
	},
	{
		nombre: 'Andrés',
		edad: 20,
	},
	{
		nombre: 'Maria',
		edad: 15,
	},
];

// personas.edad //Esto solo con objetos

const sumarEdades = (arreglo) => {
	let sumaEdades = 0;

	for (let i = 0; i < arreglo.length; i++) {
		//Cada que se ejecuta da una vuelta en el arreglo y obtiene la posición
		sumaEdades = sumaEdades + arreglo[i].edad;
	}

	//La misma forma pero con forEach
	// arreglo.forEach(producto => {
	//   sumaEdades = sumaEdades + producto.edad;
	// });

	return sumaEdades;
};

const sumaTotalEdad = sumarEdades(personas);
console.log(sumaTotalEdad);

// ----------------------------------------------------------------------------------------------------------------
// Segundo ejercicio

const productos = [
	{
		nombre: 'Zapatos',
		precio: 40,
	},
	{
		nombre: 'Camisas',
		precio: 80,
	},
	{
		nombre: 'Correas',
		precio: 105,
	},
];

const filtrarProductosPorPrecio = (arreglo) => {
	const listaDeProductos = [];

	arreglo.forEach((producto) => {
		if (producto.precio > 50) {
			listaDeProductos.push(producto);
		}
	});

	return listaDeProductos;
};

const productosFiltrados = filtrarProductosPorPrecio(productos);
console.log(productosFiltrados);

// ----------------------------------------------------------------------------------------------------------------
// Tercer ejercicio

const estudiantes = [
	{ nombre: 'EstudianteA', calificacion: 85 },
	{ nombre: 'EstudianteB', calificacion: 92 },
	{ nombre: 'EstudianteC', calificacion: 78 },
];

const buscarEstudiantePorNombre = (arreglo, nombreBuscado) => {
	for (let i = 0; i < arreglo.length; i++) {
		const estudiante = arreglo[i];

		if (estudiante.nombre === nombreBuscado) {
			return estudiante;
		}
	}

	// Devuelve null si no se encuentra el estudiante
	return null;
};

const estudianteBuscado = buscarEstudiantePorNombre(estudiantes, 'EstudianteB');
console.log(estudianteBuscado);

// ----------------------------------------------------------------------------------------------------------------
// Cuarto ejercicio

const productos3 = [
	{ nombre: 'ProductoA', precio: 30 },
	{ nombre: 'ProductoB', precio: 20 },
	{ nombre: 'ProductoC', precio: 50 },
];

const ordenarProductosPorPrecio = (arreglo) => {
	const productosOrdenados = arreglo.sort((a, b) => a.precio - b.precio);

	return productosOrdenados;
};
const productosOrdenados = ordenarProductosPorPrecio(productos3);
console.log(productosOrdenados);

// ----------------------------------------------------------------------------------------------------------------
// Quinto ejercicio

const mixArreglos = (arreglo1, arreglo2) => {
	const arreglos = arreglo1.concat(arreglo2);
	return arreglos;
};

const sumaArreglos = mixArreglos(personas, productos);
console.log(sumaArreglos);
