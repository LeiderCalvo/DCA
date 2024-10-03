import { dispatch } from '../store/store';
import { navigate } from '../store/actions';
import { Screens } from '../types/store';

class Login extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = '<h1>Sign In</h1>';

		const btn = this.ownerDocument.createElement('button');
		btn.innerText = 'Navegar al register';

		btn.addEventListener('click', () => {
			dispatch(navigate(Screens.REGISTER));
		});
		this.shadowRoot?.appendChild(btn);
	}
}

customElements.define('app-login', Login);
