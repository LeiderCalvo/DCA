import styles from './styles.css';
import { DescriptionProps } from '../description/description';
import { FigureProps } from '../figure/figure';
import { setAttributes } from '../../utils/attributes'
import { loadCss } from '../../utils/styles';

export interface CardProps extends DescriptionProps, FigureProps {
    side: "left" | "right";
};

export default class Card extends HTMLElement {
    caption: string = "";
    url: string = "";
    btn_text: string = "";
    text: string = "";
    side = "left";

    static get observedAttributes() {
        return ["url", "text", "btn_text", "caption", "side"]
    }

    attributeChangedCallback(prop: keyof CardProps, _: unknown, value: string) {
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

        const figure = this.ownerDocument.createElement('app-figure');
        const fProps : FigureProps = {
            caption: this.caption,
            url: this.url
        }
        setAttributes<FigureProps>(fProps, figure);
        
        const description = this.ownerDocument.createElement('app-description');
        const descProps: DescriptionProps = {
            text: this.text,
            btn_text: this.btn_text,
        };
        setAttributes<DescriptionProps>(descProps, description);

        if(this.side === 'left') {
            this.shadowRoot?.appendChild(figure);
            this.shadowRoot?.appendChild(description);
        } else {
            this.shadowRoot?.appendChild(description);
            this.shadowRoot?.appendChild(figure);
        }
    }
}

customElements.define('app-card', Card)