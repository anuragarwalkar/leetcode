function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function convertArrayToTreeNode(inputArray) {
    let nodes = {};
    
    for(let i = 0; i < inputArray.length; i++) {
        const item = inputArray[i];
        nodes[i] = item != null ? new TreeNode(item) : null;
    }

    for(let i = 0; i < inputArray.length; i++) {
      const leftChildIndex = 2 * i + 1;
      const rightChildIndex = 2 * i + 2;

      if(nodes[i] != null) {
          nodes[i].left = nodes[leftChildIndex]
          nodes[i].right = nodes[rightChildIndex]
      }
    }

    return nodes[0]
}

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