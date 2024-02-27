import * as components from './components/indexPadre.js';
import { dataCards } from './data/dataCards.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/index.css">`;

		dataCards.forEach((element) => {
			this.shadowRoot.innerHTML += `<custom-message
      name=${element.name}
      gender=${element.gender}
      house=${element.house}
      image=${element.image}></custom-message>`;
		});
	}
}

customElements.define('app-container', AppContainer);
