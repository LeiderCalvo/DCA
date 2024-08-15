import data from './data/dataCharacters.js';
import { renderCharacter } from './utils/renderCharacter.js';

//Contenedor app del html
const container = document.querySelector('.app');

data.forEach((character) => {
	//Crear el personaje
	const characterFigure = renderCharacter(character);

	//Agregar el personaje al contenedor app
	container.appendChild(characterFigure);
});
