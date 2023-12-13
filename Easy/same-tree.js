function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const treeNode1 = new TreeNode(1, new TreeNode(-2));
const treeNode2 = new TreeNode(1, new TreeNode(2));
// const treeNode1 = new TreeNode(1, new TreeNode(2));
// const treeNode2 = new TreeNode(1, null, new TreeNode(2));

// const treeNode1 = new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(2, null, new TreeNode(3)));
// const treeNode2 = new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(2, null, new TreeNode(3)));

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q) {
        return true;
    }

    if((!p || !q ) || p?.val !== q?.val) {
        return false;
    }
   
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(isSameTree(treeNode1, treeNode2))