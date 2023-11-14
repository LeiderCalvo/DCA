import { addObserver, appState, dispatch } from "../store/index";
import { navigate } from "../store/actions";
import { Screens } from "../types/navigation";

class Dashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  async connectedCallback() {
    this.render();
    const button = this.shadowRoot?.querySelector('button');
    button?.addEventListener(('click'), () =>{
      dispatch(navigate(Screens.LOGIN))
    })
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = `
    <button>Click</button>
    `
  }
}

customElements.define("app-dashboard", Dashboard);
