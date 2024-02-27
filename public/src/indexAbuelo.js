import * as components from './components/indexPadre.js';
import { dataCards } from './data/dataCards.js';

class AppContainer extends HTMLElement {
	cards = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		dataCards.forEach((element) => {
			//Creo el componente
			const card = this.ownerDocument.createElement('custom-message');
			//Para dar estilos
			card.className = 'myCard';
			//Le asigno valores a los atributos
			card.setAttribute('name', element.name);
			card.setAttribute('gender', element.gender);
			card.setAttribute('house', element.house);
			card.setAttribute('image', element.image);
			//Guardo el componente con info en mi arreglo
			this.cards.push(card);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/index.css">`;

		this.cards.forEach((myCard) => {
			this.shadowRoot.appendChild(myCard);
		});
	}
}

customElements.define('app-container', AppContainer);
