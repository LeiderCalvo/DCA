import { Product } from "./types/products";
import Firebase from "./utils/firebase";

const formData: Omit<Product, "id"> = {
  name: "",
  price: 0,
};

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  submitForm() {
    console.log(formData);
    Firebase.addProduct(formData);
  }

  changeName(e: any) {
    formData.name = e?.target?.value;
  }

  changePrice(e: any) {
    formData.price = Number(e?.target?.value);
  }

  async render() {
    const title = this.ownerDocument.createElement("h1");
    title.innerText = "Añade producto";
    this.shadowRoot?.appendChild(title);

    const pName = this.ownerDocument.createElement("input");
    pName.placeholder = "nombre del producto";
    pName.addEventListener("change", this.changeName);
    this.shadowRoot?.appendChild(pName);

    const pPrice = this.ownerDocument.createElement("input");
    pPrice.placeholder = "price";
    // pPrice.type = "number";
    pPrice.addEventListener("change", this.changePrice);
    this.shadowRoot?.appendChild(pPrice);

    const save = this.ownerDocument.createElement("button");
    save.innerText = "Guardar";
    save.addEventListener("click", this.submitForm);
    this.shadowRoot?.appendChild(save);

    const products = await Firebase.getProducts();
    products.forEach((p: Product) => {
      const container = this.ownerDocument.createElement("section");
      const name = this.ownerDocument.createElement("h3");
      name.innerText = p.name;
      container.appendChild(name);

      const price = this.ownerDocument.createElement("h3");
      price.innerText = String(p.price);
      container.appendChild(price);

      this.shadowRoot?.appendChild(container);
    });
  }
}

customElements.define("app-container", AppContainer);
