function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


// const treeNode1 = new TreeNode(1,
//     new TreeNode(2, null, new TreeNode(4)),
//     new TreeNode(5, null, new TreeNode(3)));
// const treeNode1 = new TreeNode(0);
// [3,1,5,0,2,4,6]

const treeNode1 = new TreeNode(3, new TreeNode(1, new TreeNode(0), new TreeNode(2)), new TreeNode(5, new TreeNode(4), new TreeNode(6)));

function averageOfLevels(root) {
    const result = [];

    const queue = [root];

    while(queue.length > 0) {
        const queueLength = queue.length;

        let sum = 0;
        for(let i = 0; i < queueLength; i++) {
            const node = queue.shift();

            sum += node.val;
            
            if(node.left) {
                queue.push(node.left);
            }

            if(node.right) {
                queue.push(node.right);
            }
        }
        result.push(sum/queueLength);
    }

    return result;
}


console.log(averageOfLevels(treeNode1));