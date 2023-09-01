export enum Attribute {
    "name" = "name",
    "uid" = "uid",
    "city" = "city"
}

class Profile extends HTMLElement{
    
    name?: string;
    uid?: number;
    city?: string;
    
    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            city: null,
            uid: null,
            name: null
        }
        return Object.keys(attrs); //  return ["name","uid","city"]
    }
    
    attributeChangedCallback(propName:Attribute,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            case Attribute.uid:
                // if(newValue) {
                //     this.uid = Number(newValue)
                // }else{
                //     this.uid = undefined
                // }
                this.uid = newValue ? Number(newValue) : undefined;
            break;

            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <section>
            <h1>${this.name}</h1>
            <p>ID for one our users: ${this.uid}</p>
            <p>From: ${this.city}</p>
            </section>
            `
        }
    }
}

customElements.define("my-profile",Profile);
export default Profile;