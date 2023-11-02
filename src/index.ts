import firebase from "./utils/firebase";
import { Post } from "./types/post";

const formPost: Omit<Post, "id"> = {
    email: "",
    password: "",
    name: "",
    age: 0,
};

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    submitForm(){
        // firebase.addPosts(formPost);
        firebase.createUser(formPost.email,formPost.password, formPost.name, formPost.age);
        // firebase.logIn(formPost.email,formPost.password);
    }

    changeTitle(e: any){
        formPost.email = e.target.value;
    }

    changeDescription(e:any){
        formPost.password = e.target.value;
    }

    changeName(e:any){
        formPost.name = e.target.value;
    }

    changeAge(e:any){
        formPost.age = e.target.value;
    }

    async render(){
        const title = this.ownerDocument.createElement("h1");
        title.innerText = "Registro";
        this.shadowRoot?.appendChild(title);

        const pTitle = this.ownerDocument.createElement("input");
        pTitle.placeholder = "Correo electronico";
        pTitle.addEventListener("change", this.changeTitle);
        this.shadowRoot?.appendChild(pTitle);

        const pDescription = this.ownerDocument.createElement("input");
        pDescription.placeholder = "Contraseña";
        pDescription.addEventListener("change", this.changeDescription);
        this.shadowRoot?.appendChild(pDescription);

        const pName = this.ownerDocument.createElement("input");
        pName.placeholder = "Nombre";
        pName.addEventListener("change", this.changeName);
        this.shadowRoot?.appendChild(pName);

        const pAge = this.ownerDocument.createElement("input");
        pAge.placeholder = "Edad";
        pAge.addEventListener("change", this.changeAge);
        this.shadowRoot?.appendChild(pAge);

        const save = this.ownerDocument.createElement("button");
        save.innerText = "Registrarme";
        save.addEventListener("click",this.submitForm);
        this.shadowRoot?.appendChild(save);

        // const posts = await firebase.getPosts();
        // posts.forEach((post: Post) => {
        //     const container = this.ownerDocument.createElement("section");

        //     const title = this.ownerDocument.createElement("h3");
        //     title.innerText = post.email;
        //     container.appendChild(title);

        //     const description = this.ownerDocument.createElement("h3");
        //     description.innerText = post.password;
        //     container.appendChild(description);

        //     this.shadowRoot?.appendChild(container);
        // });
    }
}

customElements.define('app-container',AppContainer);