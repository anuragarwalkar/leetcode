function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
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
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) {
        return null;
    }
    
    const queue = [root];

    let nodes = [];

    while(queue.length) {
        const length = queue.length;
        for(let i = 0; i < length; i++) {
            const node = queue.pop();
            nodes.push(node);
            node.left && queue.unshift(node.left);
            node.right && queue.unshift(node.right);
        }
        nodes.push(null);
    }

    
    for(let i = 0; i < nodes.length; i++) {
        if(!nodes[i]) {
            continue;
        }
        nodes[i].next = nodes[i+1];
    }

    return root;
};

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) {
        return null;
    }
    
    let current = root;
    let next = current?.left;

    while(current && next) {
        current.left.next = current.right;

        if(current.next) {
            current.right.next = current.next.left;
        }

        current = current.next;

        if(!current) {
            current = next;
            next = current.left;
        }
    }

    return root;
};

// console.log(connect(convertArrayToTreeNode([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])))

console.log(connect(convertArrayToTreeNode([1,2,3,4,5,6,7])))