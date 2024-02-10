import { convertArrayToTreeNode } from "../utils";

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