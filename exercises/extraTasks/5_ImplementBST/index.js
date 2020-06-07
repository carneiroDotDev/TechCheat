class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    //Code here
    const node = new Node(value)
    if (!this.root) {
      this.root = node
      return this
    }
    let trackNode = this.root
    while (trackNode) {
      if (trackNode.value === value) return this

      if (value > trackNode.value) {
        if (!trackNode.right) {
          trackNode.right = node
          return this
        }
        trackNode = trackNode.right
      } else {
        if (!trackNode.left) {
          trackNode.left = node
          return this
        }
        trackNode = trackNode.left
      }
    }
    console.log('i think this like can never be reached')
    return this
  }

  lookup(value) {
    //Code here
    if (!this.root) return

    let trackNode = this.root
    while (trackNode) {
      if (trackNode.value === value) return trackNode
      if (value > trackNode.value) {
        trackNode = trackNode.right
      } else if (value < trackNode.value) {
        trackNode = trackNode.left
      }
    }
    return 'Not found'
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}





