import { dispatch } from '../store';
import { navigate } from '../store/actions';
import { registerUser } from '../utils/firebase';

const credentials = {
	email: '',
	password: '',
};

class Register extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	changeEmail(e: any) {
		credentials.email = e.target.value;
	}

	changePassword(e: any) {
		credentials.password = e.target.value;
	}

	async submitForm() {
		const resp = await registerUser(credentials.email, credentials.password);
		resp ? dispatch(navigate('DASHBOARD')) : alert('No se pudo crear el usuario');
	}

	async render() {
		if (this.shadowRoot) {
			const title = this.ownerDocument.createElement('h1');
			title.innerText = 'Registro';
			this.shadowRoot.appendChild(title);

			const pName = this.ownerDocument.createElement('input');
			pName.placeholder = 'Correo electronico';
			pName.addEventListener('change', this.changeEmail);
			this.shadowRoot.appendChild(pName);

			const pPrice = this.ownerDocument.createElement('input');
			pPrice.placeholder = 'Contraseña';
			pPrice.addEventListener('change', this.changePassword);
			this.shadowRoot.appendChild(pPrice);

			const save = this.ownerDocument.createElement('button');
			save.innerText = 'Registrarme';
			save.addEventListener('click', this.submitForm);
			this.shadowRoot.appendChild(save);
		}
	}
}

customElements.define('app-register', Register);
export default Register;
