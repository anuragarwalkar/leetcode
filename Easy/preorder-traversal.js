function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const treeNode1 = new TreeNode(1, new TreeNode(10, new TreeNode(5), new TreeNode(6)), new TreeNode(20, new TreeNode(7), new TreeNode(8)));
// const treeNode1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

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
var preorderTraversal = function(root, result = []) {
    if(!root) {
        return [];
    }

    result.push(root.val);
    preorderTraversal(root.left, result);
    preorderTraversal(root.right, result);
    
    return result;
};


console.log(preorderTraversal(treeNode1));