// El método fetch
// Este método nos permite hacer una petición a un API y es justamente un callback. Por lo que tenemos que recibirlo usando then y catch de la siguiente forma.

const pokemons = fetch('https://pokeapi.co/api/v2/pokemon/1');

pokemons
	.then((res) => {
		return res.json();
	})
	.then((data) => {
		console.log(data.name);
	})
	.catch((error) => console.log(error));

// Este codigo podemos verlo de una manera más desglosada
let pokemones = fetch('https://pokeapi.co/api/v2/pokemon/12');

// segunda promesa
let respuesta = pokemones.then((res) => {
	return res.json();
});

respuesta.then((data) => {
	console.log(data.name);
});

//  Async Await
// Usamos el async para definir una función donde se encontrará el await que nos permitirá esperar una promesa de tal forma que podamos volver nuestro código asincrono.

function obtener_pokemon(id) {
	let url = 'https://pokeapi.co/api/v2/pokemon/' + id;
	return fetch(url).then((res) => {
		return res.json();
	});
}

async function nombrar_pokemones() {
	for (let i = 1; i < 6; i++) {
		let pokemon = await obtener_pokemon(i);
		console.log(pokemon.name);
	}
}
nombrar_pokemones();
//Usando el async await podemos lograr esto, que la variable espere por su resultado antes de ejecutar el console.log()

async function nombrar_pokemones() {
	try {
		for (let i = 1; i < 6; i++) {
			const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + i).then((res) => {
				return res.json();
			});
			console.log(pokemon.name);
		}
	} catch (error) {
		console.log(error);
	}
}
nombrar_pokemones();

async function nombrar_pokemons(i) {
	try {
		const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + i).then((res) => {
			return res.json();
		});
		return pokemon.name;
	} catch (error) {
		console.log(error);
	}
}
const miArray = [];

for (let index = 1; index < 6; index++) {
	nombrar_pokemons(index).then((value) => {
		miArray.push(value);
		console.log(miArray);
	});
}