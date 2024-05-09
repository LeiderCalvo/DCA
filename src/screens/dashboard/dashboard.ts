import { addObserver, appState, dispatch } from '../../store';
import { getPostsAction } from '../../store/actions';
import { addPost } from '../../utils/firebase';
import { navigate } from '../../store/actions';
import { Screens } from '../../types/navigation';

const formData = {
	artistName: '',
	price: 0,
	idUser: '',
};

class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	async connectedCallback() {
		if (appState.posts.length === 0) {
			const action = await getPostsAction();
			dispatch(action);
		} else {
			this.render();
		}
	}

	submitForm() {
		formData.idUser = appState.user;
		addPost(formData);
		dispatch(navigate(Screens.PROFILE));
	}

	changeName(e: any) {
		formData.artistName = e?.target?.value;
	}

	changePrice(e: any) {
		formData.price = Number(e?.target?.value);
	}

	render() {
		const title = this.ownerDocument.createElement('h1');
		title.innerText = 'Dashboard';
		this.shadowRoot?.appendChild(title);

		const pName = this.ownerDocument.createElement('input');
		pName.placeholder = 'Artist Name';
		pName.addEventListener('change', this.changeName);
		this.shadowRoot?.appendChild(pName);

		const pPrice = this.ownerDocument.createElement('input');
		pPrice.placeholder = 'Price';
		pPrice.addEventListener('change', this.changePrice);
		this.shadowRoot?.appendChild(pPrice);

		const save = this.ownerDocument.createElement('button');
		save.innerText = 'Save';
		save.addEventListener('click', this.submitForm);
		this.shadowRoot?.appendChild(save);

		appState.posts.forEach((post: any) => {
			const artistName = this.ownerDocument.createElement('p');
			artistName.innerText = post.artistName;
			this.shadowRoot?.appendChild(artistName);

			const price = this.ownerDocument.createElement('p');
			price.innerText = post.price;
			this.shadowRoot?.appendChild(price);
		});
	}
}

customElements.define('app-dashboard', Dashboard);
export default Dashboard;
