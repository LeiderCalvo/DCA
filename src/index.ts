import "./screens/dashboard"
import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const dashboard = this.ownerDocument.createElement('app-dashboard');
        this.shadowRoot?.appendChild(dashboard);
    }
}

customElements.define('app-container', AppContainer)