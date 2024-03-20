/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

import { Node, convertArrayToUndirectedGraph } from "./utils.js";

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (originalNode) {
  let allNodes = {}

  function recursion (node) {
    if(!node || allNodes[node.val]) {
      return
    }
  
    allNodes[node.val] = new Node(node.val);
  
    if(node.neighbors) {
      for(let neighbor of node.neighbors) {
        recursion(neighbor);
      }
    }
  }

  function recursionLink (node, visited = {}) {
    if(!node || visited[node.val]) {
      return
    }
    
    allNodes[node.val].neighbors = node.neighbors.map(i => allNodes[i.val]);

    visited[node.val] = true;

  
    if(node.neighbors) {
      for(let neighbor of node.neighbors) {
        recursionLink(neighbor, visited);
      }
    }
  }

  recursion(originalNode);
  recursionLink(originalNode);

 return allNodes[1]
};


const graph = convertArrayToUndirectedGraph([
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3],
]);

console.log(cloneGraph(graph));
