import './screens/dashboard';
import './screens/login';
import './screens/register';
import { addObserver } from './store/store';
import { appState } from './store/store';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = '';
		console.log(appState);
		switch (appState.screen) {
			case 'LOGIN':
				const login = this.ownerDocument.createElement('app-login');
				this.shadowRoot?.appendChild(login);
				break;

			case 'REGISTER':
				const register = this.ownerDocument.createElement('app-register');
				this.shadowRoot?.appendChild(register);
				break;

			case 'DASHBOARD':
				const dashboard = this.ownerDocument.createElement('app-dashboard');
				this.shadowRoot?.appendChild(dashboard);
				break;

			default:
				break;
		}
	}
}

customElements.define('app-container', AppContainer);
