import data from "./data.js";

import "./components/index.js";
import MyCounter from "./components/Counter/Counter.js";
import MyProfile, { Attribute } from "./components/Profile/Profile.js";

class AppContainer extends HTMLElement {
    profiles: MyProfile[] = [];
    counters: MyCounter[] = [];
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        
        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement(
                "my-profile"
                ) as MyProfile;
                profileCard.setAttribute(Attribute.name, user.name);
                profileCard.setAttribute(Attribute.city, user.address.city);
                profileCard.setAttribute(Attribute.uid, String(user.id));
                const counter = this.ownerDocument.createElement("my-counter") as MyCounter;
                this.counters.push(counter);
                this.profiles.push(profileCard);
            });
        }
        
        connectedCallback() {
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;

                for (let i = 0; i < this.profiles.length; i++) {
                    this.shadowRoot?.appendChild(this.profiles[i]);
                    this.shadowRoot?.appendChild(this.counters[i]);
                }
            }
        }
    }
    
    customElements.define("app-container", AppContainer);
    