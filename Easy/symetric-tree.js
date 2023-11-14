function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// const treeNode = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));
const treeNode = new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(2, null, new TreeNode(3)));


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isSymmetric = function(root) {
//    if(!root) {
//     return false;
//    }

//    const queue = [root.left, root.right];

//    while(queue.length) {
//     let leftNode = queue.shift();
//     let rightNode = queue.shift();

//     if(leftNode === null && rightNode === null) {
//         continue;
//     }
//     if(leftNode === null || rightNode === null || leftNode.val !== rightNode.val) {
//         return false;
//     }

//     queue.push(leftNode.left, rightNode.right);
//     queue.push(leftNode.right, rightNode.left);
//    }


//    return true;
// };

var isSymmetric = function (root) {
    if (!root) {
        return false;
    }

    function recurssion(leftNode, rightNode) {
        if(leftNode === null && rightNode === null) {
            return true;
        }

        if(leftNode === null || rightNode === null) {
            return false;
        }

        if(leftNode.val !== rightNode.val) {
            return false;
        }

        if (leftNode.val === rightNode.val) {
            return recurssion(leftNode.left, rightNode.right) &&  recurssion(leftNode.right, rightNode.left)
        }
    }   

    return recurssion(root.left, root.right);
};

console.log(isSymmetric(treeNode));