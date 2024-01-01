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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function(root, p, q) {
//     let pAncestors = [];
//     let qAncestors = [];

//     function iterate(node, find, result) {
//         if(!node) {
//             return false;
//         } 
        
//         if(iterate(node.right, find, result) || iterate(node.left, find, result) || node.val === find) {
//             result.push(node);
//             return true;
//         } 
//     }

//     iterate(root, p.val, pAncestors);
//     iterate(root, q.val, qAncestors);

//     for(let i = pAncestors.length - 1, j = qAncestors.length - 1; i >= 0 || j >= 0; i--, j--) {
//         if(pAncestors[i]?.val !== qAncestors[j]?.val) {
//             return pAncestors[i + 1] || qAncestors[j + 1];
//         }
//     }

//     return root;
// };

var lowestCommonAncestor = function(root, p, q) {
    if(!root) {
        return null;
    }
    
    if(p.val === root.val || q.val === root.val) {
        return root;
    }

    const leftNode = lowestCommonAncestor(root.left, p, q);
    const rightNode = lowestCommonAncestor(root.right, p, q);

    if(leftNode && rightNode) {
        return root;
    }

    return leftNode || rightNode;
};



// console.log(lowestCommonAncestor(convertArrayToTreeNode([3,5,1,6,2,0,8,null,null,7,4]), new TreeNode(5), new TreeNode(1)));
console.log(lowestCommonAncestor(convertArrayToTreeNode([3,5,1,6,2,0,8,null,null,7,4]), new TreeNode(5), new TreeNode(4)));
// console.log(lowestCommonAncestor(convertArrayToTreeNode([1,2,3]), new TreeNode(2), new TreeNode(3))) ;