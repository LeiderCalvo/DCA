import './screens/export';
import Login from './screens/login/login';
import Register from './screens/register/register';
import Dashboard from './screens/dashboard/dashboard';
import { addObserver } from './store';
import { appState } from './store';
import { Screens } from './types/navigation';

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
		switch (appState.screen) {
			case Screens.DASHBOARD:
				const dashboard = this.ownerDocument.createElement('app-dashboard');
				this.shadowRoot?.appendChild(dashboard);
				break;

			case Screens.LOGIN:
				const login = this.ownerDocument.createElement('app-login');
				this.shadowRoot?.appendChild(login);
				break;

			case Screens.REGISTER:
				const register = this.ownerDocument.createElement('app-register');
				this.shadowRoot?.appendChild(register);
				break;

			default:
				break;
		}
	}
}

customElements.define('app-container', AppContainer);
