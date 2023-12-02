
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const tree = new TreeNode()


var isBalanced = function(root) {
    let left = 0;
    let right = 0;

    if(!root) {
        return left === right;
    }

    if(root.left) {
        left = recurssion(root.left, 'left');
    }

    if(root.right) {
        right = recurssion(root.right, 'right');
    }

    function recurssion (node, side) {
        let val = 0;

        if(node.val) {
            val++;
        }

        if(node.left && side === 'left') {
            val += recurssion(node.left, 'left');
        }

        if(node.right && side === 'right') {
            val += recurssion(node.right, 'right');
        }

        return val;
    }

    return left === right || (left + right + 1) % 2 === 0;
};


const res = isBalanced(tree);


console.log('res:', res);