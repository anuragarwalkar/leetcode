class TrieNode {
    constructor(){
        this.children = {};
        this.word = null;
    }
}

function buildTree(words) {
    let root = new TrieNode();

    function insertWord(word) {
        let node = root;
        for(let char of word) {
            if(!node.children[char]) {
                node.children[char] = new TrieNode();   
            }

            node = node.children[char];
        }
        node.word = word;
    }

    for(let word of words) {
        insertWord(word);
    }

    return root;
}

function searchWord(board, r, c, trieRoot, result) {
    const char = board[r][c]

    if(!trieRoot.children[char]) {
        return;
    }

    let node = trieRoot.children[char];

    if(node.word) {
        result.push(node.word);
        node.word = null;
    }

    board[r][c] = '#';

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for(let [dx, dy] of directions) {
        const x = r + dx;
        const y = c + dy;

        if(x >=0 && x < board.length && y < board[0].length && y >= 0&& board[x][y] !== '#') {
            searchWord(board, x, y, node, result);
        }

    }

    board[r][c] = char;
    
}

const findWords = (board, words) => {
   const trieRoot = buildTree(words);
    const result = [];
    for(let r = 0; r < board.length; r++) {
        for(let c = 0; c < board[0].length; c++) {
            searchWord(board, r, c, trieRoot, result)
        }
    }

    return result;
};

// Example usage:
const board = [
    ['o','a','a','n'],
    ['e','t','a','e'],
    ['i','h','k','r'],
    ['i','f','l','v']
];
const words = ["oath","pea","eat","rain"];
console.log(findWords(board, words)); // Output: ["eat","oath"]
