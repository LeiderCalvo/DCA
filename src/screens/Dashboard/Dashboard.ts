
export default class Dashboard extends HTMLElement{
    
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        const title = this.ownerDocument.createElement("h1");
        title.innerText = "Dashboard";
        this.shadowRoot?.appendChild(title);
    }
}

customElements.define('app-dashboard',Dashboard);