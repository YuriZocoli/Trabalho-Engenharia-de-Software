export class Jogo{
    nome: any
    plataforma: any
    lancamento: any
    desenvolvedora: any
    id_jogo: any
    background_image: any
    generos: any[]
    constructor(nome: any, plataforma: any, lancamento: any, desenvolvedora: any, background_image:any, id: any){
        this.nome = nome
        this.plataforma = plataforma
        this.lancamento = lancamento
        this.desenvolvedora = desenvolvedora
        this.id_jogo = id
        this.background_image = background_image
        this.generos = []
    }
}

export class Jogos{
    list: Array<Jogo>
    constructor(){
        this.list = JSON.parse(String(localStorage.getItem('jogos')))
        if(this.list == null){
            this.list = []
        }
    }

    add(jogo: any){
        this.list.push(jogo)
    }

    getJogo(gameId: any){
        return this.list.filter((jogo)=>jogo.id_jogo == gameId)[0];
    }

    getList(){
        return this.list
    }

    save(){
        localStorage.setItem('jogos', JSON.stringify(this.list))
    }
}