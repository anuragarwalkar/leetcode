import { convertArrayToLinkList } from "../utils";

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
   if(!head) {
    return null;
   }


   // get length of linked list 
   let tail = head;
   let length = 1;

   while(tail.next) {
    length++;
    tail = tail.next;
   }

   k = k % length;

   if(k === 0) {
    return head;
   }

   let current = head;
   for(let i = 0; i < length - k - 1; i++) {
        current = current.next;
   }    

   const lastNode = current.next;

   current.next = null;

   tail.next = head;

   return lastNode;
};

console.log(JSON.stringify(rotateRight(convertArrayToLinkList([1,2,3,4,5]), 2)))
// console.log(JSON.stringify(rotateRight(convertArrayToLinkList([0,1,2]), 4)));
// console.log(JSON.stringify(rotateRight(convertArrayToLinkList([1]), 1)));