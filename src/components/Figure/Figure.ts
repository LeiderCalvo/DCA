export enum AttributeFigure {
    "anime_name" = "anime_name",
    "url" = "url"
}

export default class Figure extends HTMLElement {
    anime_name?: string;
    url?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeFigure, null> = {
            anime_name: null,
            url: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeFigure,
        _: unknown,
        newValue: string
        ){
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <section>
                <h1>${this.anime_name}</h1>
                <img src="${this.url}">
                </section>
            `
        }
    }
}

customElements.define('app-figure',Figure);