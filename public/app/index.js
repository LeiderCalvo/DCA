import "./components/index.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const button = document.createElement('my-button');
        button.setAttribute('label', 'Haz clic');
        button.setAttribute('data', JSON.stringify({ name: 'Juan', age: 30 }));
        button.props.onClick = (event, data) => {
            console.log(`Haz clic en el botón! Data: ${JSON.stringify(data)}`);
        };
        shadow.appendChild(button);
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.innerHTML = `
            `;
        }
    }
}
customElements.define("app-container", AppContainer);
