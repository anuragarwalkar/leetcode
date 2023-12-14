function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}



// const treeNode1 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6));
const treeNode1 = new TreeNode(236, new TreeNode(104, new TreeNode(null), new TreeNode(227)), new TreeNode(701, null, new TreeNode(911)));

// var getMinimumDifference = function (node) {
//     function recursion(root, result = []) {
//         if(!root) {
//             return result;
//         }
//         result.push(root.val);
//        recursion(root.left, result)
//        recursion(root.right, result);

//        return result;
//     }
//     const result = recursion(node);
//     result.sort()

//     return Math.abs(result[0] - result[1]);
// };


/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    const result = [];

    let min = Number.MAX_SAFE_INTEGER;

    function inOrder(node) {
        if(!node) {
            return 
        }
        inOrder(node.left);
        result.push(node.val);

        if(result.length > 1) {
            min = Math.min(result[result.length - 1] - result[result.length - 2], min);
        }

        inOrder(node.right);
    }

    inOrder(root);

    return min;
};

console.log(getMinimumDifference(treeNode1));
