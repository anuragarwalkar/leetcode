function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const treeNode = new TreeNode(1, new TreeNode(4, new TreeNode(6, new TreeNode(8), new TreeNode(9)), new TreeNode(7, new TreeNode(10), new TreeNode(11))), new TreeNode(2, new TreeNode(3), new TreeNode(5)))

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function (root, nodes = []) {
//     if(!root) {
//         return [];
//     }

//     inorderTraversal(root.left, nodes);
//     nodes.push(root.val);
//     inorderTraversal(root.right, nodes);


//     return nodes;
// };

var inorderTraversal = function (root) {
    let current = root;
    const result = [];
    const stack = [];

    while(current || stack.length) {
        while(current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }

    return result;
};

console.log(inorderTraversal(treeNode))