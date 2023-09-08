import * as components from "./components/index"
import { dataCards } from "./data/dataCards"
import Card, {Attribute} from "./components/Card/Card";

class AppContainer extends HTMLElement{
    cards: Card[] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});

        dataCards.forEach((cards) =>{
            const card = this.ownerDocument.createElement("my-card") as Card;
            card.setAttribute(Attribute.name,cards.name);
            card.setAttribute(Attribute.gender,cards.gender);
            card.setAttribute(Attribute.house,cards.house);
            card.setAttribute(Attribute.specie,cards.species);
            card.setAttribute(Attribute.yearofbirth,String(cards.yearOfBirth));
            card.setAttribute('alternatename', 'Otro nombre');
            this.cards.push(card);
        })
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.cards.forEach((mycard)=>{
                this.shadowRoot?.appendChild(mycard);
            })
        }
    }
}

customElements.define("app-container", AppContainer);