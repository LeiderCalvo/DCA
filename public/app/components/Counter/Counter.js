class MyCounter extends HTMLElement {
    constructor() {
        super();
        this.count = 0;
        this.handleClick = () => {
            this.count++;
            this.render();
        };
        this.attachShadow({ mode: "open" });
        this.button = this.ownerDocument.createElement("button");
        this.button.textContent = "click me";
        this.button.addEventListener("click", this.handleClick);
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <section>
            <h1>Hola</h1>
            <p>${this.count}</p>
            </section>
            `;
            this.shadowRoot.appendChild(this.button);
        }
    }
}
customElements.define("my-counter", MyCounter);
export default MyCounter;
