class CharacterCard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['name', 'gender', 'image'];
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		if (oldValue !== newValue) {
			this[propName] = newValue;
			this.render();
		}
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <h1>${this.name || 'No tiene nombre'}</h1>
    <p>${this.gender || 'No tiene genero'}</p>
    <img src="${this.image}"></img>
    `;
	}
}

customElements.define('character-card', CharacterCard);
export default CharacterCard;
