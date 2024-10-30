import { dispatch } from '../store';
import { navigate } from '../store/actions';
import { Screens } from '../types/store';
import { registerUser } from '../utils/firebase';

const credentials = {
	email: '',
	password: '',
	name: '',
	age: '',
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

	changeName(e: any) {
		credentials.name = e.target.value;
	}

	changeAge(e: any) {
		credentials.age = e.target.value;
	}

	async submitForm() {
		const resp = await registerUser(credentials);
		resp ? dispatch(navigate(Screens.LOGIN)) : alert('No se pudo crear el usuario');
	}

	async render() {
		if (this.shadowRoot) {
			const title = this.ownerDocument.createElement('h1');
			title.innerText = 'Registro';
			this.shadowRoot.appendChild(title);

			const pEmail = this.ownerDocument.createElement('input');
			pEmail.placeholder = 'Correo electronico';
			pEmail.addEventListener('change', this.changeEmail);
			this.shadowRoot.appendChild(pEmail);

			const pPrice = this.ownerDocument.createElement('input');
			pPrice.placeholder = 'Contraseña';
			pPrice.addEventListener('change', this.changePassword);
			this.shadowRoot.appendChild(pPrice);

			const pName = this.ownerDocument.createElement('input');
			pName.placeholder = 'Nombre completo';
			pName.addEventListener('change', this.changeName);
			this.shadowRoot.appendChild(pName);

			const pAge = this.ownerDocument.createElement('input');
			pAge.placeholder = 'Edad';
			pAge.addEventListener('change', this.changeAge);
			this.shadowRoot.appendChild(pAge);

			const save = this.ownerDocument.createElement('button');
			save.innerText = 'Registrarme';
			save.addEventListener('click', this.submitForm);
			this.shadowRoot.appendChild(save);
		}
	}
}

customElements.define('app-register', Register);
export default Register;
