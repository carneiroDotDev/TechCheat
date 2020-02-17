class myClass {
    constructor(anything) {
        this.address = 'Rio';
        this.name = anything;
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
