class Stack {
    constructor(){
        this.stack = [];
    }

    add(value){
        this.stack.push(value)
        return this.stack.length
    }

    pop(){
        return this.stack.pop()
    }

    lookup(value){
        for (let num of this.stack){
            if(value === num){
                return true
            }
        }
        return false
    }
}

const myStack = new Stack()
console.log(myStack.stack)
console.log(myStack.add(3))
console.log(myStack.stack)
console.log(myStack.pop())
console.log(myStack.stack)
console.log(myStack.lookup(3))
console.log(myStack.add(3))
console.log(myStack.lookup(3))