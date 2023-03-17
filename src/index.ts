import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <h1>title</h1>
        <app-card></app-card>
        <app-card></app-card>
        <app-card></app-card>
        <app-card></app-card>
        <app-card></app-card>
        <app-card></app-card>
        <app-card></app-card>
        <app-card></app-card>
        <app-card></app-card>
        <app-card></app-card>
        <app-card></app-card>
        <app-card></app-card>
        `
    }
}

customElements.define('app-container', AppContainer)