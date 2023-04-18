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
        const header = this.ownerDocument.createElement('app-header');
        const suggesiton = this.ownerDocument.createElement('app-suggestion');
        
        this.shadowRoot?.appendChild(header);
        this.shadowRoot?.appendChild(suggesiton);
    }
}

customElements.define('app-container', AppContainer)