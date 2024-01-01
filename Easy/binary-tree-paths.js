function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var convertArrayToTreeNode = function (nodes, index = 0) {
   if(index > nodes.length || !nodes[index]) {
        return null;
   }

    const root = new TreeNode(nodes[index]);
    root.left = convertArrayToTreeNode(nodes, Math.floor(2 * index + 1));
    root.right = convertArrayToTreeNode(nodes, Math.floor(2 * index + 2));
    
    return root;
};

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