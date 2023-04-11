import { AttributeButton } from "../Button/Button";
import { AttributeFigure } from "../Figure/Figure";

export enum AttributeCard {
    "anime_name" = "anime_name",
    "url" = "url",
    "btn_text" = "btn_text"
}

export default class Card extends HTMLElement{
    anime_name: string = "";
    url: string = "";
    btn_text: string = "";

    static get observedAttributes(){
        const attrs: Record <AttributeCard,null> = {
            anime_name: null,
            url: null,
            btn_text: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeCard,
        _: unknown,
        newValue: string
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }

        constructor(){
            super();
            this.attachShadow({mode: 'open'});
        }

        connectedCallback(){
            this.render();
        }

        render(){
            if(this.shadowRoot) this.shadowRoot.innerHTML = '';

            const container = this.ownerDocument.createElement('section');

            const figure = this.ownerDocument.createElement('app-figure');
            figure.setAttribute(AttributeFigure.anime_name, this.anime_name);
            figure.setAttribute(AttributeFigure.url, this.url);

            const button = this.ownerDocument.createElement('app-button');
            button.setAttribute(AttributeButton.btn_text, this.btn_text);

            container.appendChild(figure);
            container.appendChild(button);

            this.shadowRoot?.appendChild(container)
        }
}

customElements.define('app-card', Card)