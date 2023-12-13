function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


const treeNode1 = new TreeNode(1,
    new TreeNode(2, null, new TreeNode(4)),
    new TreeNode(5, null, new TreeNode(3)));

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root, result = []) {
    if (!root) {
        return;
    }

    const queue = [];

    queue.push(root);

    let sum = 0;
    while(queue.length) {
        const item = queue.shift();
        item.val
    }
};


console.log(averageOfLevels(treeNode1));