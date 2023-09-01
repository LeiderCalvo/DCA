// let myName: string | number = 'Juan';
// const isName: number = 2;
// let list: number[] = [2, 2, 3];
// let x: [string, number];

// console.log(myName);


// enum Color {
//     Red,
//     Green,
//     Blue,
// }
// let colorsito: Color = Color.Green;

// let notSure: unknown = 4;
// notSure = "maybe a string instead";

// function warnUser(): void {
//     console.log("This is my warning message");
// }

// const add = (a: number, b:number):number => {
//     return a+b;
// }

import * as components from "./components/index"
import Profile, { Attribute } from "./components/Profile/Profile";
import { data } from "./data";

class AppContainer extends HTMLElement {
    profiles: Profile[] = [];

    constructor(){
        super();
        this.attachShadow({mode:"open"});

        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-profile") as Profile;
            profileCard.setAttribute(Attribute.name,user.name);
            profileCard.setAttribute(Attribute.uid,user.uid);
            profileCard.setAttribute(Attribute.city,user.city);
            this.profiles.push(profileCard);
        })
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <h1>Holisss</h1>`;

            this.profiles.forEach((profile) => {
                this.shadowRoot?.appendChild(profile);
            })
        }
    }
}

customElements.define("app-container",AppContainer);