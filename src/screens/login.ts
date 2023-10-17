import { dispatch } from "../store/index";
import { navigate } from "../store/actions";
import { Screens } from "../types/navigation";

class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    handleLoginButton() {
        dispatch(navigate(Screens.DASHBOARD));
    }

    render() {
        const title = this.ownerDocument.createElement("h1");
        title.innerText = "Welcome! please sign in";
        this.shadowRoot?.appendChild(title);

        const email = this.ownerDocument.createElement("input");
        email.placeholder = "email";
        email.type = "email";
        email.addEventListener(
        "change",
        (e: any) => (console.log(e))
        );
        this.shadowRoot?.appendChild(email);

        const password = this.ownerDocument.createElement("input");
        password.placeholder = "*********";
        password.type = "password";
        password.addEventListener(
        "change",
        (e: any) => (console.log(e))
        );
        this.shadowRoot?.appendChild(password);

        const loginBtn = this.ownerDocument.createElement("button");
        loginBtn.innerText = "login";
        loginBtn.addEventListener("click", this.handleLoginButton);
        this.shadowRoot?.appendChild(loginBtn);
    }
}

customElements.define("app-login", Login);