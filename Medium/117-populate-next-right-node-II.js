import { convertArrayToTreeNode } from "../utils";

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

