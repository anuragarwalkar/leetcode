export function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

/**
 * @param {number[]} nodes
 * @return {ListNode}
 */
export const convertArrayToLinkList = function (nodes) {
    let result = new ListNode(nodes[0]);
    let tail = result;
    for(let i = 1; i < nodes.length; i++) {
     tail.next = new ListNode(nodes[i]);
     tail = tail.next;
    }
 
    return result;
};

export function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
export const convertArrayToTreeNode = function (nodes, index = 0) {
   if(index > nodes.length || nodes[index] == null) {
        return null;
   }

    const root = new TreeNode(nodes[index]);
    root.left = convertArrayToTreeNode(nodes, Math.floor(2 * index + 1));
    root.right = convertArrayToTreeNode(nodes, Math.floor(2 * index + 2));
    
    return root;
};