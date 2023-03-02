export var Attribute;
(function (Attribute) {
    Attribute["name"] = "name";
    Attribute["uid"] = "uid";
    Attribute["city"] = "city";
})(Attribute || (Attribute = {}));
class MyProfile extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            city: null,
            uid: null,
            name: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
            case Attribute.uid:
                this.uid = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/profile/profile.css">
                <section>
                <h1>${this.name}</h1>
                <p>ID for one of our users: ${this.uid}</p>
                <span><strong>From:${this.city}</strong><span>
                </section>
                `;
        }
    }
}
customElements.define("my-profile", MyProfile);
export default MyProfile;
