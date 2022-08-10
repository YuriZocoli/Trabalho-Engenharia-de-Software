import { Presente } from "./state"

export class Usuario{
    nome: any
    apelido: any
    email: any
    id: any
    state: any
    constructor(nome: any, apelido: any, email: any, id: any){
        this.nome = nome
        this.apelido = apelido
        this.email = email
        this.id = id
        this.state = new Presente()
    }

    estado(estado: any){
        this.state = estado
    }
}

export class Usuarios{
    list: Array<Usuario>
    constructor(){
        this.list = JSON.parse(String(localStorage.getItem('usuarios')))
        if(this.list == null){
            this.list = []
        }
    }

    add(usuario: Usuario){
        this.list.push(usuario)
    }

    getUser(id: any){
        return this.list.filter((user) => user.id == id)[0]
    }

    getList(){
        return this.list
    }

    save(){
        localStorage.setItem('usuarios', JSON.stringify(this.list))
    }
}