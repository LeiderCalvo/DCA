import { renderCharacter } from './character.js';
import data from './data.js';

const container = document.querySelector('.app');

data.forEach((element) => {
	//Primer paso crear el personaje con el objeto de data
	const newCharacter = renderCharacter(element);

	//Segundo paso, agregar el personaje al contenedor global app
	container.appendChild(newCharacter);
});
