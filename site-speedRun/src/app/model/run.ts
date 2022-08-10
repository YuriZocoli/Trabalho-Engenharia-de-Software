import { Jogo } from "./jogo"
import { Usuario } from "./usuario"

export class Run{
    jogo: any
    usuario: any
    tempo: any
    constructor(jogo: any, usuario: any, tempo: any){
        this.jogo = jogo
        this.usuario = usuario
        this.tempo = tempo
    }
}

export class Runs{
    list: Array<Run>
    constructor(){
        this.list = JSON.parse(String(localStorage.getItem('runs')))
        if(this.list == null){
            this.list = [];
        }
    }

    add(run: any){
        this.list.push(run)
    }

    getRunsByUserId(user: any){
        this.list.sort((a, b) => a.tempo - b.tempo)
        return this.list.filter((run: { usuario: Usuario }) => run.usuario.id == user)
    }

    getRunsByGameId(jogo: any){
        this.list.sort((a, b) => a.tempo - b.tempo)
        return this.list.filter((run: { jogo: Jogo }) => run.jogo.id_jogo == jogo)
    }

    getList(){
        this.list.sort((a, b) => a.tempo - b.tempo)
        return this.list
    }

    save(){
        localStorage.setItem('runs', JSON.stringify(this.list))
    }
}