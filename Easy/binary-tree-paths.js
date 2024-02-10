import { convertArrayToTreeNode } from "../utils";

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = [];

    function backtrack(node, path = "") {
        if(!node) {
            return;
        }

        const isLeafNode = !node.left && !node.right;
        path += isLeafNode ? node.val : node.val + '->';
        isLeafNode && result.push(path);

        backtrack(node.left, path);
        backtrack(node.right, path);
    }

    backtrack(root);
    return result;
};

binaryTreePaths(convertArrayToTreeNode([3,5,1,6,2,0,8,null,null,7,4]))