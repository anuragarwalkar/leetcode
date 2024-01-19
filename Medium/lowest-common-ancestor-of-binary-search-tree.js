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
   if(index > nodes.length || nodes[index] == null) {
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
var lowestCommonAncestor = function(root, p, q) {
    let current = root;

    while(current) {
        if(p.val > current.val && q.val > current.val) {
            current = current.right;
        }else if(q.val < current.val && p.val < current.val) {
            current = current.left;
        }else{
            return current
        }
    }

};

// lowestCommonAncestor(convertArrayToTreeNode([3,5,1,6,2,0,8,null,null,7,4]), new TreeNode(5), new TreeNode(1));
console.log(lowestCommonAncestor(convertArrayToTreeNode([3,5,1,6,2,0,8,null,null,7,4]), new TreeNode(5), new TreeNode(4)));