import * as components from './components/indexPadre.js';
import { dataCards } from './data/charactersData.js';

class AppContainer extends HTMLElement {
	//Creo un arreglo de cards vacio
	cards = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		dataCards.forEach((element) => {
			//Creo un elemento en este documento de tipo character-card(mi componente)
			//ownerDocument significa que se cree en ESTE documento en el que estamos trabajando
			const card = this.ownerDocument.createElement('character-card');

			//Le indicamos que valores va a guardar sobre atributos especificos
			if (element.name) {
				card.setAttribute('name', element.name);
			}
			card.setAttribute('gender', element.gender);
			card.setAttribute('image', element.image);

			//Una vez creamos el componente y seteamos los atributos, lo guardamos en el arreglo de cards
			this.cards.push(card);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = ``;

		this.cards.forEach((characterCard) => {
			this.shadowRoot.appendChild(characterCard);
		});
	}
}

customElements.define('app-container', AppContainer);
