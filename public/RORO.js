//RORO Recibir un objeto y retornar un objeto
const myObject = {
	name: 'Andrés',
};

const createFolder = ({ name, archivos = 'Por defecto', extensions }) => {
	console.log(`La carpeta es: ${name}, y tiene los ${archivos} con la extensión ${extensions}`);
};

createFolder({ archivos: 'Holi, raro', extensions: '.js', name: 'DCAFOLDER' });

const myFunction = () => {
	return {
		name: 'Andres',
		breakfast: 2,
		lunch: 3,
	};
};

const { breakfast } = myFunction();
console.log(breakfast);
