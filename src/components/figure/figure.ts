import styles from './styles.css'
import { loadCss } from "../../utils/styles";

export interface FigureProps {
    url: string;
    caption: string;
}

export default class Figure extends HTMLElement {
    url: string = "";
    caption: string = ""

    static get observedAttributes() {
        return ["url", "caption"]
    }

    attributeChangedCallback(prop: keyof FigureProps, _: unknown, value: string) {
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
        loadCss(this, styles);

        const img = this.ownerDocument.createElement('img');
        img.setAttribute('src', this.url)
        this.shadowRoot?.appendChild(img);

        const description = this.ownerDocument.createElement('p');
        description.textContent = this.caption;
        this.shadowRoot?.appendChild(description);
    }
}

customElements.define('app-figure', Figure)