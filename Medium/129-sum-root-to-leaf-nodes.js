import { convertArrayToTreeNode } from "../utils";

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
  var sumNumbers = function (root) {
    let totalSum = 0;
  
    function dfs(node, numbers = "") {
      if (node == null) {
        return null;
      }
      const currentValue = numbers + node.val;
      !node.left && !node.right && (totalSum += Number(currentValue));
      dfs(node.left, currentValue);
      dfs(node.right, currentValue);
  
      return totalSum;
    }
  
    return dfs(root);
  };
  
  console.log(sumNumbers(convertArrayToTreeNode([4, 9, 0, 5, 1])));
  