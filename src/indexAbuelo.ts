import { data } from './data/data';
import './components/indexPadre';
import MyProfile, { Attribute } from './components/Profile/Profile';

class AppContainer extends HTMLElement {
	profiles: MyProfile[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		data.forEach((user) => {
			const profileCard = this.ownerDocument.createElement('my-profile') as MyProfile;
			profileCard.setAttribute(Attribute.name, user.name);
			profileCard.setAttribute(Attribute.uid, String(user.id));
			profileCard.setAttribute(Attribute.city, user.address.city);
			this.profiles.push(profileCard);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.profiles.forEach((profile) => {
				this.shadowRoot?.appendChild(profile);
			});
		}
	}
}

customElements.define('app-container', AppContainer);
