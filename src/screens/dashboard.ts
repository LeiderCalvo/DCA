import { Product } from '../types/product';
import { addProduct, getProducts } from '../utils/firebase';

const product: Product = {
	name: '',
	price: 0,
};

class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	changeName(e: any) {
		product.name = e.target.value;
	}

	changePrice(e: any) {
		product.price = e.target.value;
	}

	submitForm() {
		addProduct(product);
	}

	async render() {
		if (this.shadowRoot) {
			const title = this.ownerDocument.createElement('h1');
			title.innerText = 'Formulario para crear productos';
			this.shadowRoot.appendChild(title);

			const pName = this.ownerDocument.createElement('input');
			pName.placeholder = 'Nombre del producto';
			pName.addEventListener('change', this.changeName);
			this.shadowRoot.appendChild(pName);

			const pPrice = this.ownerDocument.createElement('input');
			pPrice.placeholder = 'Precio del producto';
			pPrice.addEventListener('change', this.changePrice);
			this.shadowRoot.appendChild(pPrice);

			const save = this.ownerDocument.createElement('button');
			save.innerText = 'Enviar producto';
			save.addEventListener('click', this.submitForm);
			this.shadowRoot.appendChild(save);

			const products = await getProducts();
			products?.forEach((product) => {
				const container = this.ownerDocument.createElement('section');

				const name = this.ownerDocument.createElement('h3');
				name.innerText = product.name;
				container.appendChild(name);

				const price = this.ownerDocument.createElement('h3');
				price.innerText = product.price;
				container.appendChild(price);

				this.shadowRoot?.appendChild(container);
			});
		}
	}
}

customElements.define('app-dashboard', Dashboard);
export default Dashboard;
