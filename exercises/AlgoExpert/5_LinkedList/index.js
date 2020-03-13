// This is an input class. Do not edit.
class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  // Feel free to add new properties and methods to the class.
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    setHead(node) {
      // Write your code here.
          if(!this.head){
              this.head = node
              this.tail = node
              return
          } 
          this.insertBefore(this.head, node)
    }
  
    setTail(node) {
      // Write your code here.
          if(!this.tail){
              this.head = node
              this.tail = node
              return
          }
          this.insertAfter(this.tail, node)
    }
  
    insertBefore(node, nodeToInsert) {
          if(nodeToInsert === this.head && nodeToInsert === this.tail){
              return
          }
      // Write your code here.
          this.remove(nodeToInsert)
          nodeToInsert.prev = node.prev
          nodeToInsert.next = node
          if(!node.prev){
              this.head = nodeToInsert
          } else {
              node.prev.next = nodeToInsert
          }
          node.prev = nodeToInsert
    }
  
    insertAfter(node, nodeToInsert) {
          if(nodeToInsert === this.head && nodeToInsert === this.tail){
              return
          }
      // Write your code here.
          this.remove(nodeToInsert)
          nodeToInsert.prev = node
          nodeToInsert.next = node.next
          if(!node.next){
              this.tail = nodeToInsert
          } else {
              node.next.prev = nodeToInsert
          }
          node.next = nodeToInsert
    }
  
      // O(n) time and O(1) complexity
    insertAtPosition(position, nodeToInsert) {
          if(position === 1){
              this.setHead(nodeToInsert)
              return
          }
          let trackNode = this.head
          let currentPosition = 1
          while(trackNode && currentPosition !== position){
              trackNode = trackNode.next
              currentPosition+=1
          }
          if(trackNode){
              this.insertBefore(trackNode, nodeToInsert)
          } else {
              this.setTail(nodeToInsert)
          }
          
    }
      
  // O(n) time and O(1) complexity
    removeNodesWithValue(value) {
      // Write your code here.
          let trackNode = this.head
          let nextNode = null
          while (trackNode){
              nextNode = trackNode.next
              if(trackNode.value === value) this.remove(trackNode)
              trackNode = nextNode
          }
    }
  
      // O(1) time and O(1) complexity
    remove(node) {
      // Write your code here.
          if(node === this.head) this.head = this.head.next
          if(node === this.tail) this.tail = this.tail.prev
          this.removeNodeBindings(node)
    }
  
      // O(n) time and O(1) complexity
    containsNodeWithValue(value) {
      // Write your code here.
          let trackNode = this.head
          while (trackNode && trackNode.value !== value) {
              trackNode = trackNode.next
          }
          return Boolean(trackNode)
    }
      
      removeNodeBindings(node) {
          if(node.prev) node.prev.next = node.next
          if(node.next) node.next.prev = node.prev
          node.prev = null
          node.next = null
      }
  }
  
  // Do not edit the line below.
  exports.Node = Node;
  exports.DoublyLinkedList = DoublyLinkedList;
  