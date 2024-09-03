class MessageButton extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.isSelected = false;
	}

	//Se conecta en el DOM
	connectedCallback() {
		this.render();
	}

	changeMessage() {
		this.isSelected = !this.isSelected;
		this.render();
	}

	render() {
		// if (this.isSelected === true) {
		// 	message = 'Agregado';
		// } else {
		// 	message = 'Agregar a favoritos';
		// }

		this.shadowRoot.innerHTML = `
      <button>${this.isSelected ? 'Agregado' : 'Agregar a favoritos'}</button>
    `;

		this.shadowRoot.querySelector('button').addEventListener('click', () => this.changeMessage());
	}
}

customElements.define('message-button', MessageButton);
export default MessageButton;
