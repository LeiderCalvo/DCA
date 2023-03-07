import data from "./data.js";
import "./components/index.js";
import { Attribute } from "./components/Profile/Profile.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.counters = [];
        this.attachShadow({ mode: "open" });
        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-profile");
            profileCard.setAttribute(Attribute.name, user.name);
            profileCard.setAttribute(Attribute.city, user.address.city);
            profileCard.setAttribute(Attribute.uid, String(user.id));
            const counter = this.ownerDocument.createElement("my-counter");
            this.counters.push(counter);
            this.profiles.push(profileCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a, _b;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            for (let i = 0; i < this.profiles.length; i++) {
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(this.profiles[i]);
                (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(this.counters[i]);
            }
        }
    }
}
customElements.define("app-container", AppContainer);
