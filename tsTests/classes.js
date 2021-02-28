class myClass {
    constructor(anything) {
        this.address = 'Rio';
        this.name = anything;
        console.log('inside constructor');
    }
}
const me = new myClass('Luiz');
class abstractClass {
    constructor() {
        this.game = 'RE';
    }
}
class videoGame extends abstractClass {
}
const meuVideoGame = new videoGame;
console.log(meuVideoGame.game);
var a = 'a';
console.log(a);
class A {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    setY() {
        this.y = 12;
    }
}
class B extends A {
}
const anything = new A(2, 4);
