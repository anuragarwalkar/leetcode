function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// const treeNode = new TreeNode(7, new TreeNode(3, new TreeNode(8), new TreeNode(10)), new TreeNode(15, new TreeNode(9), new TreeNode(20)));
const treeNode = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)));

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const nodes = [root];
    const result = [];

    while(nodes.length) {
        const len = nodes.length;
        let currentLevel = [];
        
        for(let i = 0; i < len; i++) {
            let node = nodes.shift();
            node.left && nodes.push(node.left);
            node.right && nodes.push(node.right);
            currentLevel.push(node?.val);
        }

        result.push(currentLevel);

    }

    return result;
};



console.log(levelOrder(treeNode));