import { loadCss } from '../../utils/styles';
import styles from './styles.css';

export interface DescriptionProps {
    btn_text: string;
    text: string;
}

export default class Description extends HTMLElement {
    btn_text: string = "";
    text: string = ""

    static get observedAttributes() {
        return ["btn_text", "text"]
    }

    attributeChangedCallback(prop: keyof DescriptionProps, _: unknown, value: string) {
        this[prop] = value;
        this.render()
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = ''
        loadCss(this, styles)

        const text = this.ownerDocument.createElement('p');
        text.textContent = this.text;
        this.shadowRoot?.appendChild(text);
        
        const button = this.ownerDocument.createElement('button');
        button.innerText = this.btn_text;
        this.shadowRoot?.appendChild(button);
    }
}

customElements.define('app-description', Description)