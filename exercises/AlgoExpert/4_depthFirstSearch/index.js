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

  depthFirstSearch(array) {
    // Write your code here.
    let arr = new Array(this)
    while (arr.length) {
      array.push(arr[0].name)
      if (arr[0].children) {
        arr = [...arr[0].children, ...arr.slice(1)]
      } else {
        arr.shift()
      }
    }
    return array
  }
}

exports.Node = Node;
