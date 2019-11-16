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
        this.head = new Node(value, this.head)
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
        return this.head
    }

    getLast() {
        let node = this.head
        while (node.next) {
            node = node.next
        }
        return node
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        if (this.head) {
            this.head = this.head.next
        }
    }

    removeLast() {
        if (!this.head) {
            return
        }
        let node = this.head
        if (!node.next) {
            this.head = null
            return
        }
        let previousNode = node
        let nextNode = node.next
        while (nextNode.next) {
            previousNode = nextNode
            nextNode = nextNode.next
        }
        previousNode.next = null
    }
}

const list = new LinkedList()
list.head = new Node(12)
list.insertFirst(new Node(34))
list.insertFirst(new Node(56))
list.removeLast()

module.exports = { Node, LinkedList };
