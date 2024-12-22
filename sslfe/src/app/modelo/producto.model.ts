export class producto{
    name:string
    udsPedidas:number
    udsCompradas:number

    constructor(){
        this.name="";
        this.udsPedidas=0;
        this.udsCompradas=0;
    }

    crearProducto(name:string, udsPedidas:number, udsCompradas:number){
        this.name=name;
        this.udsPedidas=udsPedidas;
        this.udsCompradas=udsCompradas;
    }
}
