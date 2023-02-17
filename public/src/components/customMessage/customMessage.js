class CustomMessage extends HTMLElement {

    static get observedAttributes() {
        return ["message"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" }); // encapsulation, mode open means this is reachable for js on your web
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/customMessage/customMessage.css">
        <p>${this.message || 'Hello, world'}</p>
        `;
    }
}

customElements.define('custom-message', CustomMessage);
export default CustomMessage;
