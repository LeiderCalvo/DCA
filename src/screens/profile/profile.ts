import { addObserver, appState, dispatch } from '../../store';
import { getPostsProfileAction } from '../../store/actions';

class Profile extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	async connectedCallback() {
		if (appState.postsProfile.length === 0) {
			const action = await getPostsProfileAction(appState.user);
			dispatch(action);
		} else {
			this.render();
		}
	}

	render() {
		const title = this.ownerDocument.createElement('h1');
		title.innerText = 'Profile';
		this.shadowRoot?.appendChild(title);

		appState.postsProfile.forEach((post: any) => {
			const artistName = this.ownerDocument.createElement('p');
			artistName.innerText = post.artistName;
			this.shadowRoot?.appendChild(artistName);

			const price = this.ownerDocument.createElement('p');
			price.innerText = post.price;
			this.shadowRoot?.appendChild(price);
		});
	}
}

customElements.define('app-profile', Profile);
export default Profile;
