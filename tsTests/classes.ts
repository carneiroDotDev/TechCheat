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

// const init = new abstractClass //error

class videoGame extends abstractClass {}

const meuVideoGame = new videoGame
console.log(meuVideoGame.game)

var a = 'a'
console.log(a)



class A {
    private x: number;
    protected y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    setY(): void{
        this.y = 12
    }
}

class B extends A {
    // multiply(): number {
    //     return this.x * this.y;
    // }
}

const anything = new A(2,4)

// anything.y // error - y is protected