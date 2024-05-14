import { getDetailDoc, logIn } from '../../utils/firebase';

const formData = {
	email: '',
	password: '',
};

class Login extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	changeEmail(e: any) {
		formData.email = e?.target?.value;
	}

	changePassword(e: any) {
		formData.password = e?.target?.value;
	}

	submitForm() {
		logIn(formData);
	}

	render() {
		const title = this.ownerDocument.createElement('h1');
		title.innerText = 'Iniciar sesión';
		this.shadowRoot?.appendChild(title);

		const pName = this.ownerDocument.createElement('input');
		pName.placeholder = 'Correo electronico';
		pName.addEventListener('change', this.changeEmail);
		this.shadowRoot?.appendChild(pName);

		const pPrice = this.ownerDocument.createElement('input');
		pPrice.placeholder = 'Contraseña';
		pPrice.addEventListener('change', this.changePassword);
		this.shadowRoot?.appendChild(pPrice);

		const save = this.ownerDocument.createElement('button');
		save.innerText = 'Iniciar sesión';
		save.addEventListener('click', this.submitForm);
		this.shadowRoot?.appendChild(save);
	}
}

customElements.define('app-login', Login);
export default Login;
