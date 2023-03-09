export var Attribute;
(function (Attribute) {
    Attribute["label"] = "label";
    Attribute["data"] = "data";
})(Attribute || (Attribute = {}));
class MyButton extends HTMLElement {
    constructor() {
        super();
        this.props = {
            onClick: () => { },
            label: '',
            data: undefined,
        };
        this.attachShadow({ mode: "open" });
        const button = document.createElement('button');
        button.addEventListener('click', (event) => {
            var _a, _b;
            (_b = (_a = this.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, event, this.props.data);
        });
        this.shadowRoot.appendChild(button);
    }
    static get observedAttributes() {
        const attrs = {
            label: null,
            data: null,
        };
        return Object.keys(attrs);
    }
    attributeChangedCallback(propName, oldValue, newValue) {
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
    render() {
        const button = this.shadowRoot.querySelector('button');
        button.textContent = this.props.label;
    }
}
customElements.define("my-button", MyButton);
export default MyButton;
