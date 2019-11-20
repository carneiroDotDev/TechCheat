// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    insertFirst(value) {
        // this.head = new Node(value, this.head)
        this.insertAt(value, 0)
    }
    size() {
        let counter = 0
        let node = this.head
        while (node) {
            counter++
            node = node.next
        }

        return counter
    }

    getFirst() {
        // return this.head
        return this.getAt(0)
    }

    getLast() {
        // if (!this.head) {
        //     return null
        // }
        // let node = this.head
        // while (node.next) {
        //     node = node.next
        // }
        // return node
        return this.getAt(this.size() - 1)
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        // if (this.head) {
        //     this.head = this.head.next
        // }
        this.removeAt(0)
    }

    removeLast() {
        this.removeAt(this.size() - 1)
        // if (!this.head) {
        //     return
        // }
        // if (!this.head.next) {
        //     this.head = null
        //     return
        // }
        // let node = this.head
        // let previousNode = node
        // let nextNode = node.next
        // while (nextNode.next) {
        //     previousNode = nextNode
        //     nextNode = nextNode.next
        // }
        // previousNode.next = null
    }

    insertLast(value) {
        const lastNode = this.getLast()
        if (lastNode) {
            lastNode.next = new Node(value)
        } else {
            this.head = new Node(value)
        }
    }

    getAt(index) {
        if (!this.head) {
            return null
        }
        // I would let this if statement because 
        // we dont need then to do the folowwing variables 
        // declarations. Even though, this check is repeated 
        // in the next code block, since node could be = null. 
        let counter = 0
        let node = this.head
        while (node) {
            if (counter === index) {
                return node
            }
            node = node.next
            counter++
        }
        return null
    }

    removeAt(index) {
        if (!this.head) {
            return null
        }

        if (index === 0) {
            this.head = this.head.next
            return
        }

        if (!this.getAt(index)) {
            return
        }

        const previousNode = this.getAt(index - 1)
        if (!previousNode.next) {
            previousNode.next = null
            return
        }
        previousNode.next = previousNode.next.next
    }

    insertAt(value, index) {
        if (!this.head) {
            this.head = new Node(value)
            return
        }

        if (index === 0) {
            this.head = new Node(value, this.head)
            // The this.head still is the previous one which becomes the 
            // next of the new node
            return
        }

        const previousNode = this.getAt(index - 1) || this.getLast()
        const node = this.getAt(index)
        previousNode.next = new Node(value, node)
        return
    }
}

const list = new LinkedList()
list.head = new Node(12)
list.insertLast(34)
list.insertLast(56)

module.exports = { Node, LinkedList };
