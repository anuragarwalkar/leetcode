function TreeNode(val, next) {
    this.val = val;
    this.left = this.right = null;
    this.next = next === undefined ? null : next;
  }
  
  /**
   * @param {number[]} preorder
   * @param {number[]} inorder
   * @return {TreeNode}
   */
  var convertArrayToTreeNode = function (nodes, index = 0) {
    if (index > nodes.length || nodes[index] == null) {
      return null;
    }
  
    const root = new TreeNode(nodes[index]);
    root.left = convertArrayToTreeNode(nodes, Math.floor(2 * index + 1));
    root.right = convertArrayToTreeNode(nodes, Math.floor(2 * index + 2));
  
    return root;
  };
  
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
  