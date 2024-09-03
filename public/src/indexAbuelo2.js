import * as components from './components/indexPadre.js';
import { dataCards } from './data/charactersData.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		dataCards.forEach((element) => {
			this.shadowRoot.innerHTML += `
		  <character-card
		    name="${element.name}"
		    gender="${element.gender}"
		    image="${element.image}">
		  </character-card>
			<message-button></message-button>
			`;
		});
	}
}

customElements.define('app-container', AppContainer);
