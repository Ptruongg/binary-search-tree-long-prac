// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {
      this.root = null;
    }

    insert(val, currentNode=this.root) {
      const newNode = new TreeNode(val)
      if(!this.root) {
        this.root = newNode
        return this;
      }
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode
        } else {
          return this.insert(val, currentNode.left)
        }
      }
      if (val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = newNode
        } else {
          return this.insert(val, currentNode.right)
        }
      }
    }


    // insert(val, currentNode=this.root) {
    //   const node = new TreeNode(val)
    //   if (this.root === null) {
    //     this.root = node
    //     return;
    //   }
    //   // if val is less than the currentNode's val
    //   if (val < currentNode.val) {
    //     // if there's no left we've found it
    //     if (!currentNode.left) {
    //       //sert currentNode.left to be the node
    //       currentNode.left = node;
    //     } else {
    //       return this.insert(val, currentNode.left);
    //     }
    //   }
    //   //if val is greater than the currentNode's val
    //   if (val > currentNode.val) {
    //     // if there's no right we have found where the node goes
    //     if (!currentNode.right) {
    //       currentNode.right = node;
    //     } else {
    //       return this.insert(val, currentNode.right)
    //     }
    //   }
    // }

    search(val) {
      let currentNode = this.root;

      if (!this.root) return false;

      while (currentNode) {
        if (val < currentNode.val) {
          currentNode = currentNode.left
        } else if (val > currentNode.val) {
          currentNode = currentNode.right
        } else return true
      }
      // if (currentNode.val === val) return true;

      // while (currentNode.left === val) {
      //   return true;
      // }
      // while (currentNode.right === val) {
      //   return true;
      // }
      // if (val < currentNode.val) {
      //   currentNode = currentNode.left

      // }
      return false
    }
    //      4
    //     / \
    //    2   6
    //   / \  / \
    //  1  3  5  7
    preOrderTraversal(currentNode = this.root) {
      // Your code here self, left, right 4,2,1,3,6,5,7
      if (!currentNode) return;
      console.log(currentNode.val)
      this.preOrderTraversal(currentNode.left)
      this.preOrderTraversal(currentNode.right)

    }


    inOrderTraversal(currentNode = this.root) {
      // Your code here left, self, right 1,2,3,4,5,git6,7
      if (!currentNode) return;
      this.inOrderTraversal(currentNode.left)
      console.log(currentNode.val)
      this.inOrderTraversal(currentNode.right)

    }


    postOrderTraversal(currentNode = this.root) {
      // Your code here left, right, self 1,3,2,5,7,6,4
      if (!currentNode) return;

      this.postOrderTraversal(currentNode.left)
      this.postOrderTraversal(currentNode.right)
      console.log(currentNode.val)
    }

      // Breadth First Traversal - Iterative
      // queue = [4] -> curr = 4 -> [2,6] (in queue) -> shift off first val -> 2 -> look at 2
      // 4,2,6,1,3,5,7
      //    4
    //     / \
    //    2   6
    //   / \  / \
    //  1  3  5  7
    breadthFirstTraversal() {
      const queue = [this.root];

      while(queue.length > 0) {
        let node = queue.shift();
        console.log(node.val)

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)

      }

    }

    // Depth First Traversal - Iterative
    //4,6,7,5,2,3,1
    depthFirstTraversal() {
      // your code here
      if (!this.root) return;

      const stack = [this.root];

      while (stack.length) {
        let node = stack.pop()
        console.log(node.val)

        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
      }
    }
  }

  module.exports = { BinarySearchTree, TreeNode };
