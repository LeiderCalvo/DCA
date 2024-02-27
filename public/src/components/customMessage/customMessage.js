class CustomMessage extends HTMLElement {
	//Este codigo de aquí se ejecuta cuando la clase se crea
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['name', 'gender', 'house', 'image'];
	}

	//Este codigo de aquí se ejecuta cuando el componente se incrusta en el DOM
	connectedCallback() {
		this.render();
	}

	// Este metodo se encarga de darle el nuevo valor a las
	// propiedades que queremos observar
	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <link rel="name" href="./src/components/customMessage/customMessage.css">
    <h1>${this.name || 'No tiene nombre'}</h1>
    <p>${this.gender || 'No tiene genero'}</p>
		<p>${this.house || 'No tiene casa'}</p>
		<img src=${this.image}></img>
    `;
	}
}

customElements.define('custom-message', CustomMessage);
export default CustomMessage;
