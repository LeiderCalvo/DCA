import { login, updateName } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import { UserProfileProps } from "../profile/Profile";

export default class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = "";

    if(appState.profile.loading) {
        const loadingMessage = this.ownerDocument.createElement("h2");
        loadingMessage.textContent = "Loading....";
        this.shadowRoot?.appendChild(loadingMessage);
    } else if(appState.profile.error) {
        const errorMessage = this.ownerDocument.createElement("h2");
        errorMessage.textContent = appState.profile.error.message;
        this.shadowRoot?.appendChild(errorMessage);
    } else {
        const btn = this.ownerDocument.createElement("button");
        btn.textContent = "hacer login";
        btn.addEventListener("click", async () => {
          dispatch(await login({ userId: "temp@gmail.com", password: "123ert" }));
        });
    
        const profile = this.ownerDocument.createElement("user-profile");
        const profileProps: UserProfileProps = {
          avatar: appState.profile.data?.avatar || "",
          role: appState.profile.data?.role || "",
          name: appState.profile.data?.userName || "",
        };
        Object.entries(profileProps).forEach(([key, value]) => {
          profile.setAttribute(key, value);
        });
        this.shadowRoot?.appendChild(profile);
        this.shadowRoot?.appendChild(btn);
    }

  }
}

customElements.define("app-header", AppHeader);
