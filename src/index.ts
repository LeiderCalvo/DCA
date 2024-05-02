import './screens/export';
import Login from './screens/login/login';
import Register from './screens/register/register';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const screen = this.ownerDocument.createElement('app-login');
		this.shadowRoot?.appendChild(screen);
	}
}

customElements.define('app-container', AppContainer);
