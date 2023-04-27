import "./components/export";
import { navigate } from "./store/actions";
import { addObserver, appState, dispatch } from "./store/index";
import { Screens } from "./types/store";

class AppContainer extends HTMLElement {
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

    switch (appState.screen) {
      case Screens.LOGIN:
        const login = this.ownerDocument.createElement("h3");
        login.innerText = "esta es la pantalla de login";
        const btn = this.ownerDocument.createElement("button");
        btn.innerText = "¡No tienes cuenta? Registrate";
        btn.addEventListener("click", () => {
          dispatch(navigate(Screens.DASHBOARD));
        });
        this.shadowRoot?.appendChild(login);
        this.shadowRoot?.appendChild(btn);
        break;

      case Screens.SIGNUP:
        const signup = this.ownerDocument.createElement("h3");
        signup.innerText = "esta es la pantalla de signup";
        this.shadowRoot?.appendChild(signup);
        break;

      case Screens.DASHBOARD:
        const dashboard = this.ownerDocument.createElement("h3");
        dashboard.innerText = "este es la pantalla de dashboard";
        this.shadowRoot?.appendChild(dashboard);
        break;

      default:
        break;
    }
  }
}

customElements.define("app-container", AppContainer);
