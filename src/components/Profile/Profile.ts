export enum Attribute {
	'name' = 'name',
	'uid' = 'uid',
	'city' = 'city',
}

class Profile extends HTMLElement {
	name?: string;
	uid?: number;
	city?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	//Old version with JS

	// static get observedAttributes() {
	// 	return ['name', 'id', 'city'];
	// }

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			city: null,
			uid: null,
			name: null,
		};
		return Object.keys(attrs); // return ['name', 'uid', 'city'];
	}
	//Old version in JS

	// attributeChangedCallback(propName, oldValue, newValue) {
	// 	this[propName] = newValue;
	// 	this.render();
	// }

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case Attribute.uid:
				this.uid = newValue ? Number(newValue) : undefined;
				break;

			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
      <section>
      <h1>${this.name}</h1>
      <p>${this.uid}</p>
      <p>${this.city}</p>
      </section>
      `;
		}
	}
}

export default Profile;
customElements.define('my-profile', Profile);
