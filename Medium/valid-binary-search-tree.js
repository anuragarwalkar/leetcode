function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function convertArrayToTreeNode(inputArray) {
    let nodes = {};
    
    for(let i = 0; i < inputArray.length; i++) {
        const item = inputArray[i];
        nodes[i] = item != null ? new TreeNode(item) : null;
    }

    for(let i = 0; i < inputArray.length; i++) {
      const leftChildIndex = 2 * i + 1;
      const rightChildIndex = 2 * i + 2;

      if(nodes[i] != null) {
          nodes[i].left = nodes[leftChildIndex]
          nodes[i].right = nodes[rightChildIndex]
      }
    }

    return nodes[0]
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    function isValid(node, left, right) {
        if(!node) {
            return true;
        }

        if(!(node.val < right && node.val > left)) {
            return false; 
        }

        return isValid(node.left, left, node.val) && isValid(node.right, node.val, right)
    }

    return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
};


console.log(isValidBST(convertArrayToTreeNode([5,4,6,null,null,3,7])))