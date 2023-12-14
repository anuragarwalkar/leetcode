
const ref = new TreeNode(3);
const other = new TreeNode(2, null, new TreeNode(4));

const treeNode1 = new TreeNode(1, other, new TreeNode(2, null, ref));

const treeNode2 = new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(2, null, new TreeNode(3)));


function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left
    this.right = right;
}

/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
    if (!original || !cloned) {
        return null;
    }

    if (original === target) {
        return cloned;
    }

    return getTargetCopy(original.left, cloned.left, target) || getTargetCopy(original.right, cloned.right, target);
};

console.log(getTargetCopy(treeNode1, treeNode2, ref))