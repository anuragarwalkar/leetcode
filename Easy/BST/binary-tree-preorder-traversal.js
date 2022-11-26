function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  result.push(root.val);

  preorderTraversal(root.left, result);
  preorderTraversal(root.right, result);

  return result;
};

// const nodes = new TreeNode(
//   1,
//   null,
//   new TreeNode(2, new TreeNode(3, null, null), null)
// );
