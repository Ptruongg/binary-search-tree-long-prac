const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees
//          4
    //     / \
    //    2   6
    //   / \  / \
    //  1  3  5  7
function findMinBST (rootNode) {
  let current = rootNode

  while(current.left) {
    current = current.left;

  }
  return current.val
}

function findMaxBST (rootNode) {
    let current = rootNode;

    while (current.right) {
        current = current.right
    };

    return current.val;
}

function findMinBT (rootNode) {
// start at the root (rootNode)
// create a min variable
// look thru all the nodes
// create some type of queue (to save nums and compare to min)
// for both left/right, once l/r = null return whatever value we have to the queue
// return min

let min = Infinity;
let queue = [rootNode]

while (queue.length) {
    let current = queue.pop();

    if (current.val < min) min = current.val;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right)
}

  return min;
};

// while (queue.length > 0) {
//   let current = queue.shift();

//   if (current.val < min) min = current.val;

//   if (current.left) queue.push(current.left);
//   if (current.right) queue.push(current.right);
// }

function findMaxBT (rootNode) {
    let max = -Infinity;
    let queue = [rootNode];

    while (queue.length) {
        let current = queue.shift();

        if (current.val > max) max = current.val;

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return max;
  }

// function getHeight (rootNode) {
//     let height = -1
//     let queue = [rootNode];

//     while (queue.length) {
//         height++

//         for (let i = 0; i < queue.length; i++) {
//             let shifted = queue.shift();

//             if (shifted.left) {
//                 queue.push(shifted.left);
//             }

//             if (shifted.right) {
//                 queue.push(shifted.right);
//             };
//         }

//     };

//     return height;
// }

function getHeight (rootNode) {
  if (!rootNode) return -1;
  return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right))
}

function countNodes (rootNode) {
    if (!rootNode) return;
    let count = 0
    let queue = [rootNode];

      while(queue.length > 0) {
        count++
        let node = queue.shift();

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)

      }

    return count
}
//      1
//    /   \
//   2     3
//  / \   / \
// 4   5 6   7

function balancedTree (rootNode) {
  let leftHeight = -1
  let rightHeight = -1


}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
