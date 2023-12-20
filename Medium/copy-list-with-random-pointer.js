
// Definition for a Node.
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
 };
 
 const node1 = new Node(2);
 const node2 = new Node(5);
 const node3 = new Node(8);
 
 const mainNode = new Node(1);
 
 mainNode.next = node1;
 mainNode.random = node3.next;
 
 node1.next = node2;
 node1.random = node3;
 
 node2.next = node3;
 node2.random = mainNode;
 
 node3.next = null;
 node3.random = node2;
 
 
 /**
  * @param {Node} head
  * @return {Node}
  */
 var copyRandomList = function(head) {
     let currentNode = head;
     const cache = new Map();
 
     while(currentNode) {
         cache.set(currentNode, new Node(currentNode.val));
         currentNode = currentNode.next;
     }
 
     currentNode = head;
 
     while(currentNode) {
         const copy = cache.get(currentNode);
         copy.next = cache.get(currentNode.next) || null;
         copy.random = cache.get(currentNode.random) || null;
         currentNode = currentNode.next
     }
 
     return cache.get(head);
 };
 
 console.log(copyRandomList(mainNode))
 // console.log(mainNode);