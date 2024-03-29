// /**
//  * @param {TreeNode} root
//  * @return {void} Do not return anything, modify root in-place instead.
//  */
// var flatten = function(root) {
//     if(!root) {
//         return null;
//     }
    
//     let nodes = [root];
//     let prev = null;

//     while(nodes.length) {
//         const node = nodes.pop();
//         if(prev) {
//             prev.right = node;
//             prev.left = null;
//         }
//         node.right && nodes.push(node.right);
//         node.left && nodes.push(node.left);
//         prev = node;
//     }

//     return root;
// };

 /**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    function dfs(node) {
        if(!node) {
            return null;
        }
    
        const leftTail = dfs(node.left);
        const rightTail = dfs(node.right);
    
        if(leftTail) {
            leftTail.right = node.right;
            node.right = node.left;
            node.left = null;
        }
    
       return rightTail || leftTail || node;
    }

    dfs(root);

    return root;
};

console.log(JSON.stringify(flatten(convertArrayToTreeNode([1,2,5,3,4,null,6])), null, 2));