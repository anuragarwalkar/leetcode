function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// const treeNode = new TreeNode(7, new TreeNode(3, new TreeNode(8), new TreeNode(10)), new TreeNode(15, new TreeNode(9), new TreeNode(20)));
// const treeNode = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)));
const treeNode = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
// const treeNode = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)));


/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) {
        return [];
    }

    const result = [];
    const nodes = [root];

    let rightToLeft = true;
    
    while(nodes.length) {
        const currentLevel = [];
        const length = nodes.length;

        for(let i = 0; i < length; i++) {
            const node = nodes.shift();
            if(!node) continue;
            nodes.push(node.left);
            nodes.push(node.right);
            currentLevel.push(node.val);
        }
        
        currentLevel.length && result.push(rightToLeft ? currentLevel : currentLevel.reverse() );
        rightToLeft = !rightToLeft;
    }

    return result
};

console.log(zigzagLevelOrder(treeNode));