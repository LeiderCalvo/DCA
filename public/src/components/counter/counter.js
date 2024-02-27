class Counter extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.onButtonClicked = this.onButtonClicked.bind(this);
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.mount();
	}

	static get observedAttributes() {
		return ['count'];
	}

	addEventListeners() {
		this.shadowRoot.querySelector('button').addEventListener('click', this.onButtonClicked);
	}

	connectedCallback() {
		this.mount();
	}

	onButtonClicked() {
		const currentValue = Number(this.getAttribute('count')) || 0;
		this.setAttribute('count', currentValue + 1);
	}

	mount() {
		this.render();
		this.addEventListeners();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <section>
     <h1>Counter</h1>
      ${this.count || 0}
     <button>Increment</button>
    </section>
    `;
	}
}

customElements.define('my-counter', Counter);
export default Counter;
