import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import firebase from "../../utils/firebase";

const formPost = {
    email: "",
    password: "",
};

export default class Login extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }
    
    submitForm(){
        firebase.logIn(formPost.email,formPost.password);
    }

    changeTitle(e: any){
        formPost.email = e.target.value;
    }

    changeDescription(e:any){
        formPost.password = e.target.value;
    }

    render(){
        const title = this.ownerDocument.createElement("h1");
        title.innerText = "Iniciar sesión";
        this.shadowRoot?.appendChild(title);

        const pTitle = this.ownerDocument.createElement("input");
        pTitle.placeholder = "Correo electronico";
        pTitle.addEventListener("change", this.changeTitle);
        this.shadowRoot?.appendChild(pTitle);

        const pDescription = this.ownerDocument.createElement("input");
        pDescription.placeholder = "Contraseña";
        pDescription.addEventListener("change", this.changeDescription);
        this.shadowRoot?.appendChild(pDescription);

        const save = this.ownerDocument.createElement("button");
        save.innerText = "Login";
        save.addEventListener("click",this.submitForm);
        this.shadowRoot?.appendChild(save);
    }
}

customElements.define('app-login',Login);