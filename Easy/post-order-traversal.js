function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const treeNode1 = new TreeNode(1, new TreeNode(10, new TreeNode(5), new TreeNode(6)), new TreeNode(20, new TreeNode(7), new TreeNode(8)));

const result = [];


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
 * @return {number[]}
 */
var postorderTraversal = function(root, result = []) {
    if(!root) {
        return [];
    }

    postorderTraversal(root.left, result);
    postorderTraversal(root.right, result);
    
    result.push(root.val);
    return result;
};


console.log(postorderTraversal(treeNode1));