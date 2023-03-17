export default class AppCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <p>a card</p>
        `
    }
}

customElements.define('app-card', AppCard)