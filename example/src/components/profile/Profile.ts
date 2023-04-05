export interface UserProfileProps {
    avatar: string;
    name: string;
    role: string;
}

export default class UserProfile extends HTMLElement {
    avatara = '';
    namea = "";
    rolea = "";

    static get observedAttributes () {
        return ["avatar", "name", "role"]
    }

    attributeChangedCallback(prop: keyof UserProfileProps, _: unknown, newValue: string) {
        this[prop+"a"] = newValue;
        this.render()
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';
        
        const picture = this.ownerDocument.createElement('img');
        picture.src = this.avatara;
        const name = this.ownerDocument.createElement('h3');
        name.textContent = this.namea;
        const role = this.ownerDocument.createElement('p');
        role.textContent = this.rolea;

        this.shadowRoot?.appendChild(picture)
        this.shadowRoot?.appendChild(name)
        this.shadowRoot?.appendChild(role)
    }
}

customElements.define('user-profile', UserProfile)