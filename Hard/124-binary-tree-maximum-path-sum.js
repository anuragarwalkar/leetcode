/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

import { convertArrayToTreeNode } from "./utils.js";

/**
 * @param {TreeNode} root
 * @return {number}
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let result = root.val;
    
    function dfs(node) {
        if(!node) {
            return 0;
        }
        
        const leftMax = Math.max(0, dfs(node.left));
        const rightMax = Math.max(0, dfs(node.right));
        
        result = Math.max(result, leftMax + node.val + rightMax);
        
        return node.val + Math.max(leftMax, rightMax);
    }
    
    dfs(root);
    return result;
};

console.log(maxPathSum(convertArrayToTreeNode([1,-2,3])))