export enum AttributeButton {
    "btn_text" = "btn_text"
}

export default class Button extends HTMLElement {
    btn_text?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeButton, null> = {
            btn_text: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeButton,
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
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';

        const button = this.ownerDocument.createElement('button');
        button.innerText = `${this.btn_text}`
        button.addEventListener('click',() =>{
            button.innerText = "No like";
        })
        this.shadowRoot?.appendChild(button);
    }
}

customElements.define('app-button',Button);