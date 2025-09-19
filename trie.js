class TrieNode{
    constructor(){
        this.children = {}
        this.isEndofWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]) {
                node.children[char] = new TrieNode()
            }

            node = node.children[char] 
        }

        node.isEndofWord = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false 
            }
            node = node.children[char]
        }

        return node.isEndofWord
    }
}

let trie = new Trie()
trie.insert('amar')
console.log(trie.search('amar'))
console.log(trie.search('ama'))