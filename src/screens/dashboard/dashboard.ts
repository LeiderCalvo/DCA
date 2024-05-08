import { addObserver, appState, dispatch } from '../../store';
import { getPostsAction } from '../../store/actions';

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

	render() {
		const title = this.ownerDocument.createElement('h1');
		title.innerText = 'Dashboard';
		this.shadowRoot?.appendChild(title);

		appState.posts.forEach((post: any) => {
			const artistName = this.ownerDocument.createElement('p');
			artistName.innerText = post.artistName;
			this.shadowRoot?.appendChild(artistName);

			const price = this.ownerDocument.createElement('p');
			price.innerText = post.price;
			this.shadowRoot?.appendChild(price);
		});

		console.log(appState.user);
	}
}

customElements.define('app-dashboard', Dashboard);
export default Dashboard;
