// const appendListItem = (parent) => (element) => {
// 	const li = document.createElement('li');
// 	li.textContent = element;
// 	parent.appendChild(li);
// };

export const renderCharacter = ({ name, thumbnail, description, comics, series }) => {
	//Crear el contenedor
	const container = document.createElement('figure');
	container.classList.add('character-card');

	//Crear las etiquetas vacias
	const img = document.createElement('img');
	const h2 = document.createElement('h2');
	const p = document.createElement('p');
	const h3Comics = document.createElement('h3');
	const ulComics = document.createElement('ul');
	const h3Series = document.createElement('h3');
	const ulSeries = document.createElement('ul');

	//Llenar las etiquetas con contenido recibido de la data
	img.src = thumbnail;
	h2.textContent = name;
	p.textContent = description;
	h3Comics.textContent = 'Comics: ';
	h3Series.textContent = 'Series: ';

	// comics.forEach(appendListItem(ulComics));
	// series.forEach(appendListItem(ulSeries));

	comics.forEach((comic) => {
		const li = document.createElement('li');
		li.textContent = comic;
		ulComics.appendChild(li);
	});

	series.forEach((serie) => {
		const li = document.createElement('li');
		li.textContent = serie;
		ulSeries.appendChild(li);
	});

	//Vincular las etiqueta con contenido al contenedor
	container.appendChild(img);
	container.appendChild(h2);
	container.appendChild(p);
	container.appendChild(h3Comics);
	container.appendChild(ulComics);
	container.appendChild(h3Series);
	container.appendChild(ulSeries);

	//Retornar el contenedor con información
	return container;
};
