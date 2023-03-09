import "./components/index.js";
import MyButton from "./components/Button/Button.js";


class AppContainer<T> extends HTMLElement {
    
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        const button = document.createElement('my-button') as MyButton<T>;
        button.setAttribute('label', 'Haz clic');
        button.setAttribute('data', JSON.stringify({ name: 'Juan', age: 30 }));
        button.props.onClick = (event, data) => {
            console.log(`Haz clic en el botón! Data: ${JSON.stringify(data)}`);
        };

        shadow.appendChild(button);

        
    }
    
    connectedCallback(): void {
        this.render();
    }
    
    render(): void {
        if (this.shadowRoot) {
            this.innerHTML = `
            `;        
        }
        
    }
}

customElements.define("app-container", AppContainer);
