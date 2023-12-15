function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const treeNode = new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(4, null, new TreeNode(3)));

var countNodes = function(root) {
    if(!root) {
        return 0;
    }
   
    return countNodes(root.left) + countNodes(root.right) + 1;
};

console.log(countNodes(treeNode));