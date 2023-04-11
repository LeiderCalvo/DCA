import {getData} from '../services/getData'
import { AttributeCard } from '../components/Card/Card';
import { ApiType } from '../types/apiType';
import "../components/export"

class Dashboard extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback(){
        const data = await getData();
        this.render(data)
    }

    render(data:any){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';

        data.forEach((e: ApiType) => {
            const card = this.ownerDocument.createElement('app-card');
            card.setAttribute(AttributeCard.anime_name, e.anime_name);
            card.setAttribute(AttributeCard.url,e.url);
            card.setAttribute(AttributeCard.btn_text, "Dar like");
            this.shadowRoot?.appendChild(card);
        });
    }
}

customElements.define('app-dashboard',Dashboard);