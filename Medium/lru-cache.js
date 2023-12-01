/**
 * @param {*} key
 * @param {*} value
 */
function Node(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.left = new Node(0);
    this.right = new Node(0);

    this.left.next = this.right;
    this.right.prev = this.left;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
   if(!this.cache.has(key)) {
    return -1
   }

   const node = this.cache.get(key);
   this.remove(node);
   this.insert(node);

   return this.cache.get(key).value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)) {
        this.remove(this.cache.get(key));
    }

    const newNode = new Node(key, value);
    this.insert(newNode);
    this.cache.set(key, newNode);

    if(this.cache.size > this.capacity) {
        const lru = this.left.next;
        this.remove(lru);
        this.cache.delete(lru.key)
    }
    
};

LRUCache.prototype.insert = function(node) {
    const prev = this.right.prev;
    const next = this.right;
    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
};

LRUCache.prototype.remove = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
}
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const obj = new LRUCache(2)

console.log(obj.put(1, 1));
console.log(obj.put(2, 2));
console.log(obj.get(1));
console.log(obj.put(3, 3));
console.log(obj.get(2));
// obj.put(3, 3);