export enum Attribute {
    "name" = "name",
    "specie" = "specie" ,
    "gender" = "gender",
    "house" = "house" ,
    "yearofbirth" = "yearofbirth",
    "alternatename" = "alternatename"
}

class Card extends HTMLElement {
    
    name?: string;
    specie?: string;
    gender?: string;
    house?: string;
    yearofbirth?: number;
    alternatename?: string;
    nameSelected?: string;
    
    static get observedAttributes(){
        const attrs: Record<Attribute, null> = {
            name: null,
            specie: null,
            gender: null,
            house: null,
            yearofbirth: null,
            alternatename: null,
        }
        return Object.keys(attrs);
        //return ["name","specie","gender","house","yearofbirth"]
    }
    
    attributeChangedCallback(
        propName: Attribute, 
        oldValue: string | undefined, 
        newValue: string | undefined){
            switch (propName) {
                case Attribute.yearofbirth:
                this.yearofbirth = newValue ? Number(newValue) : undefined;
                break;
                
                default:
                this[propName] = newValue;
                break;
            }
        }
        
        constructor(){
            super();
            this.attachShadow({mode: "open"})
        }
        
        //Sucede cuando el componente ingresa al DOM
        connectedCallback(){
            this.nameSelected = this.name;
            this.mount();
        }

        mount(){
            this.render();

            //Seleccionar mi boton
            const btn = this.shadowRoot?.querySelector('button');
            
            //Quiero hacer algo con mi boton al dar click
            btn?.addEventListener("click",()=>{
                //Lo que quiero hacer con mi boton
                // 1er caso this.name = "Harry Potter"
                if(this.nameSelected === this.name){
                    this.nameSelected = this.alternatename;
                }else{
                    this.nameSelected = this.name;
                }
                this.mount();
            })
        }
        
        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = `
                    <section>
                    <h1>${this.nameSelected}</h1>
                    <h1>${this.gender}</h1>
                    <h1>${this.house}</h1>
                    <h1>${this.yearofbirth}</h1>
                    <h1>${this.specie}</h1>
                    <button>Me gusta</button>
                    </section>
                `
            }
        }
    }
customElements.define("my-card",Card);
export default Card;