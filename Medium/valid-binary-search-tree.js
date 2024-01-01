function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var convertArrayToTreeNode = function (nodes, index = 0) {
   if(index > nodes.length || !nodes[index]) {
        return null;
   }

    const root = new TreeNode(nodes[index]);
    root.left = convertArrayToTreeNode(nodes, Math.floor(2 * index + 1));
    root.right = convertArrayToTreeNode(nodes, Math.floor(2 * index + 2));
    
    return root;
};

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