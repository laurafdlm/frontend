import { producto } from "./producto.model";

export class lista{
    id:string;
    name:string;
    productos:producto[];

    constructor(){
        this.id="";
        this.name="";
        this.productos=[];
    }

}
