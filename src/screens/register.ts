import { navigate } from '../store/actions';
import { dispatch } from '../store/store';
import { Screens } from '../types/store';

class Register extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = '<h1>Sign Up</h1>';

		const btn = this.ownerDocument.createElement('button');
		btn.innerText = 'Navegar al dashboard';

		btn.addEventListener('click', () => {
			dispatch(navigate(Screens.DASHBOARD));
		});
		this.shadowRoot?.appendChild(btn);
	}
}

customElements.define('app-register', Register);
