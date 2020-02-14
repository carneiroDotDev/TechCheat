interface id {
    name: string
    address: string
}

class myClass implements id{
    public name: string
    public address: string
    constructor(anything: string){
        this.name = anything
        this.address = name
    }
} 

const me = new myClass('Luiz')

// console.log(me.name)