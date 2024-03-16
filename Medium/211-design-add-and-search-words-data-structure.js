class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word, node = this.root) {
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            
            if(char === '.') {
                for(let child in node.children) {
                    if(this.search(word.slice(i + 1), node.children[child])) {
                        return true;
                    }
                }
            }else if(!node.children[char]) {
                return false
            }else if(node.children[char]) {
                node = node.children[char];
            }
           
        }

        return node.isEndOfWord;
    }

}

// Example usage:
let trie = new WordDictionary();
trie.addWord("at");
trie.addWord("and");
trie.addWord("an");
trie.addWord("add");
trie.addWord("a");
// console.log(trie.search(".ad"));   // Output: true
// console.log(trie.search("pad"));     // Output: false
console.log(trie.search("a.d"));  