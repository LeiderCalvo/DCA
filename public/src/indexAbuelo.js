import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' }); //Encapsular el codigo y
		// permitir que el DOM encuentre nuestra nueva clase
	}

	//Cuando el componente se carga en el DOM hace lo que le indiquemos
	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <h1>Este es la nueva página de microsoft</h1>
    <product-card
      img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Soft-CP-OneDriveCampaignRefresh-2?wid=380&hei=213&fit=crop"
      alt="Imagen de una chica viendo promociones en el compu"
      title="Microsoft OneDrive"
      description="Guarda tus archivos y fotos en OneDrive y accede a ellos desde cualquier dispositivo y en cualquier lugar"
      txtbutton="Más información"
    ></product-card>
    <product-card
      img="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-Lifestyle-Sandstone-Icon-Toss?wid=380&hei=213&fit=crop"
      alt="Otra cosa"
      title="Maximiza el día a día con Microsoft 365"
      description="Recibe protección en línea, almacenamiento seguro en la nube y aplicaciones innovadoras diseñadas para adaptarse a tus necesidades, todo en un mismo plan."
      txtbutton="Para 1 Persona"
    ></product-card>
    `;
	}
}

customElements.define('app-container', AppContainer);
