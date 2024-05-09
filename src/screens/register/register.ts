import { createUser } from '../../utils/firebase';

const formData = {
	email: '',
	password: '',
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
		formData.email = e?.target?.value;
	}

	changePassword(e: any) {
		formData.password = e?.target?.value;
	}

	changeAge(e: any) {
		formData.age = e?.target?.value;
	}

	submitForm() {
		createUser(formData);
	}

	async render() {
		const title = this.ownerDocument.createElement('h1');
		title.innerText = 'Registrarme';
		this.shadowRoot?.appendChild(title);

		const pName = this.ownerDocument.createElement('input');
		pName.placeholder = 'Correo electronico';
		pName.addEventListener('change', this.changeEmail);
		this.shadowRoot?.appendChild(pName);

		const pPrice = this.ownerDocument.createElement('input');
		pPrice.placeholder = 'Contraseña';
		pPrice.addEventListener('change', this.changePassword);
		this.shadowRoot?.appendChild(pPrice);

		const pAge = this.ownerDocument.createElement('input');
		pAge.placeholder = 'Edad';
		pAge.addEventListener('change', this.changeAge);
		this.shadowRoot?.appendChild(pAge);

		const save = this.ownerDocument.createElement('button');
		save.innerText = 'Registrarme';
		save.addEventListener('click', this.submitForm);
		this.shadowRoot?.appendChild(save);
	}
}

customElements.define('app-register', Register);
export default Register;
