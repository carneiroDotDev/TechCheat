// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array = []) {
    // Write your code here.
    // Speed - O(n) and Space - O(n)
    array.push(this.name)
    for (let node of this.children){
      node.depthFirstSearch(array)
    }
    return array
  }
}

exports.Node = Node;
