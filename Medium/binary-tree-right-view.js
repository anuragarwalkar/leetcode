
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const treeNode = new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(4, null, new TreeNode(3)));

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    const nodes = [root];
    const result = [];

    while (nodes.length) {
        const length = nodes.length;
        let rightNode = null;

        for (let i = 0; i < length; i++) {
            const current = nodes.shift();
            rightNode = current;
            if (current?.left) {
                nodes.push(current.left);
            }
            if (current?.right) {
                nodes.push(current.right);
            }
        }

        if (rightNode) {
            result.push(rightNode?.val);
        }
    }

    return result;
};

console.log(rightSideView(treeNode))