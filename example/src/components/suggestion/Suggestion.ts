import { addObserver, appState } from "../../store/index";
import { UserProfileProps } from "../profile/Profile";

export default class AppSuggestion extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = ''; 

        const title = this.ownerDocument.createElement('h2');
        title.textContent = "Suggestions"

        const profile = this.ownerDocument.createElement('user-profile');
        const profileProps: UserProfileProps = {
            avatar: appState.profile.data?.avatar || "",
            role: appState.profile.data?.role || "",
            name: appState.profile.data?.userName || "",
          }
        Object.entries(profileProps).forEach(([key, value]) => {
            profile.setAttribute(key, value)
        })
        
        const otherS = this.ownerDocument.createElement('user-profile');
        const otherSProps: UserProfileProps = {
            avatar: "appState.avatar",
            role:"student",
            name: "stiven",
        }
        Object.entries(otherSProps).forEach(([key, value]) => {
            otherS.setAttribute(key, value)
        })

        this.shadowRoot?.appendChild(title);
        this.shadowRoot?.appendChild(otherS);
        this.shadowRoot?.appendChild(profile);
    }
}

customElements.define('app-suggestion', AppSuggestion)