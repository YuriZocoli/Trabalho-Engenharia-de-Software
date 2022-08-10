export class State{
    validade: any
}

export class Presente extends State{
    constructor(){
        super();
        this.validade = true;
    }
}

export class Ausente extends State{
    lastTime: any;
    constructor(lastTime: any){
        super();
        this.lastTime = lastTime
        this.validade = false;
    }
}