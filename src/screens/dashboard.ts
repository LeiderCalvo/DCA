import styles from './styles.css';

import { DescriptionProps } from '../components/description/description';
import { FigureProps } from '../components/figure/figure';
import { CardProps } from '../components/card/card';
import { setAttributes } from '../utils/attributes'
import TripsService from '../services/trips'
import { Trip } from '../types/trips';
import { loadCss } from '../utils/styles';

class Dashboard extends HTMLElement {
    trips: Trip[] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        this.trips = await TripsService.get();
        this.render()
    }

    render() {
        loadCss(this, styles)

        const mainContent = this.ownerDocument.createElement('section');
        this.shadowRoot?.appendChild(mainContent);

        const aside = this.ownerDocument.createElement('aside');
        this.shadowRoot?.appendChild(aside);


        this.trips.forEach((trip, i) => {
            const card = this.ownerDocument.createElement('app-card');
            setAttributes<CardProps>({
                ...trip,
                side: i % 2 === 0 ? "left" : "right" 
            }, card);
            mainContent.appendChild(card);
        })
        
        const figure = this.ownerDocument.createElement('app-figure');
        const fProps : FigureProps = {
            caption: "esta es una imagen muy interesante",
            url: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        }
        setAttributes<FigureProps>(fProps, figure);
        aside.appendChild(figure);
        
        const description = this.ownerDocument.createElement('app-description');
        const descProps: DescriptionProps = {
            text: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
            btn_text: "like"
        };
        setAttributes<DescriptionProps>(descProps, description);
        aside.appendChild(description);
    }
}

customElements.define('app-dashboard', Dashboard)