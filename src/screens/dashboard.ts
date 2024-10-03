import { addObserver, appState, dispatch } from '../store/store';
import { changeBackground } from '../store/actions';
import { navigate } from '../store/actions';
import { Screens } from '../types/store';

class Dashboard extends HTMLElement {
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
		console.log(appState.backgroundColor);

		const btn = this.ownerDocument.createElement('button');
		btn.innerText = 'Cambiar background';
		btn.addEventListener('click', () => {
			dispatch(changeBackground('red'));
		});
		this.shadowRoot?.appendChild(btn);

		const btn2 = this.ownerDocument.createElement('button');
		btn2.innerText = 'Regresar al login';
		btn2.addEventListener('click', () => {
			dispatch(navigate(Screens.LOGIN));
		});
		this.shadowRoot?.appendChild(btn2);
	}
}

customElements.define('app-dashboard', Dashboard);
