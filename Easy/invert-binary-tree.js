function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const treeNode = new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(4, null, new TreeNode(3)));


/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) {
        return null;
    }

    [root.right, root.left] = [root.left, root.right]

    invertTree(root.left)
    invertTree(root.right);

    return root;
};

console.log(invertTree(treeNode))