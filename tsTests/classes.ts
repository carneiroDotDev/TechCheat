interface id {
    name: string
    address: string
}

class myClass implements id{
    public name: string
    readonly address: string = 'Rio'
    constructor(anything: string){
        this.name = anything
    }
} 

const me = new myClass('Luiz')

// console.log(me.name)

abstract class abstractClass {
    public game: string
    constructor(){
        this.game = 'RE'
    }
}

// const init = new abstractClass

class videoGame extends abstractClass {}

const meuVideoGame = new videoGame
console.log(meuVideoGame.game)

var a = 'a'
console.log(a)