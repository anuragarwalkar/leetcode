function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const treeNode = new TreeNode(4, new TreeNode(2, null, new TreeNode(3)), new TreeNode(5));

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k, result = []) {
    let stack = [];
    let current = root;
    let count = 0;
    while(stack || current) {
        while(current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        count++;
        if(count === k) {
            return current.val;
        }

        current = current.right;
    }

    return 0;
};

console.log(kthSmallest(treeNode, 1))

