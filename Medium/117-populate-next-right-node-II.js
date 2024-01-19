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
   if(index > nodes.length || !nodes[index]) {
        return null;
   }

    const root = new TreeNode(nodes[index]);
    root.left = convertArrayToTreeNode(nodes, Math.floor(2 * index + 1));
    root.right = convertArrayToTreeNode(nodes, Math.floor(2 * index + 2));
    
    return root;
};

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) {
        return null;
    }

   let queue = [root];

   while(queue.length) {
       const length = queue.length;

       for(let i = 0; i < length; i++) {
         const node = queue.shift();

         node.left && queue.push(node.left);
         node.right && queue.push(node.right);

         if(i < length - 1) {
            node.next = queue[0];
         }
     }
   }

   return root;
};

console.log(JSON.stringify(connect(convertArrayToTreeNode([1,2,3,4,5,null,6,7,null,null,null,null,8])), null, 2));
// console.log(JSON.stringify(connect(convertArrayToTreeNode([3,9,20,null,null,15,7])), null, 2));
// console.log(JSON.stringify(connect(convertArrayToTreeNode([1,2,3,4,5,null,7])), null, 2));
// console.log(JSON.stringify(connect(convertArrayToTreeNode([1,2,3,4,null,null,5])), null, 2));

