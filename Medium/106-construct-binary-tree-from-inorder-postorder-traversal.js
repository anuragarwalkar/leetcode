
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(!inorder.length) {
        return null;
    }

    let root = new TreeNode(postorder.pop());

    let index = inorder.indexOf(root.val);
    root.right = buildTree(inorder.slice(index+ 1), postorder )
    root.left = buildTree(inorder.slice(0, index), postorder )

    return root;
};

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const inorderMap = inorder.reduce((acc, cur, index) => ({...acc, [cur]: index}), {})

    function recursion(l, r) {
        if(l > r) {
            return null;
        }
    
        let root = new TreeNode(postorder.pop());
    
        let index = inorderMap[root.val];
        root.right = recursion(index + 1, r);
        root.left = recursion(l, index - 1);
    
        return root;
    }

    return recursion(0, inorder.length - 1);
};

console.log(JSON.stringify(buildTree([9,3,15,20,7], [9,15,7,20,3])))