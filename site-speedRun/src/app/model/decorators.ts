export class Aventura {
    constructor(instance: any){
        instance.generos.push('aventura')
        return instance
    }
}

export class Estrategia {
    constructor(instance: any){
        instance.generos.push('estrategia')
        return instance
    }
}

export class FPS {
    constructor(instance: any){
        instance.generos.push('fps')
        return instance
    }
}

export class Luta {
    constructor(instance: any){
        instance.generos.push('luta')
        return instance
    }
}

export class Terror {
    constructor(instance: any){
        instance.generos.push('terror')
        return instance
    }
}
