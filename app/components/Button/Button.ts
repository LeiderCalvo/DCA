interface MyButtonProps<T> {
    label: string;
    onClick?: (event: MouseEvent, data?: T) => void;
    data?: T;
}

export enum Attribute {
    "label" = "label",
    "data" = "data",
}

class MyButton<T> extends HTMLElement {
    props: MyButtonProps<T> = {
        onClick: () => {},
        label: '',
        data: undefined,
    };
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        
        const button = document.createElement('button');
        button.addEventListener('click', (event) => {
            this.props.onClick?.(event, this.props.data);
        });
        
        this.shadowRoot!.appendChild(button);
    }
    
    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            label: null,
            data: null,
        };
        return Object.keys(attrs);
    }
    
    attributeChangedCallback(propName: Attribute, oldValue: string, newValue: string) {
        switch (propName) {
            case 'label':
            this.props.label = newValue;
            break;
            case 'data':
            this.props.data = JSON.parse(newValue);
            break;
        }
        this.render();
    }
    
    connectedCallback() {
        this.render();
    }
    
    render(): void {
        const button = this.shadowRoot!.querySelector('button');
        button!.textContent = this.props.label;
    }
}

customElements.define("my-button", MyButton);
export default MyButton;
