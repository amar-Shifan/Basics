// iife
// (function(){
//     console.log('HEllo world')
// })()
// (()=>{
//     console.log('hello world')
// })()
let arr = [1,2,4,45,1,2];
// let double = arr.map((val)=> val * 2);
// console.log(double);

// let str = ['amar' , 'is'];
// let upp = str.map((val) => val = val.toUpperCase());
// // console.log(upp)
// const users = [
//   { name: "Amar", age: 20 },
//   { name: "Rahul", age: 25 },
//   { name: "Anu", age: 18 }
// ];
// let names = users.map((val) => val.name);
// console.log(names)

// let arr = ["car", "bike", "train", "bus", "cycle"];
// let three = arr.filter((val) => val.length === 3);
// console.log(three)
// let older = users.filter((val) => val.age > 18);
// console.log(older);
// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// let count = fruits.reduce((acc , val) => {
//     if(!acc[val]){
//         acc[val] = 1
//     } else {
//         acc[val]++
//     }
//     return acc
// }, {});
// console.log(count)

// let max = arr.reduce((acc , val) => Math.max(acc , val) , 0);
// console.log(max)


// <----------------Linked List---------------------->
// class Node{
//     constructor(data){
//         this.data = data
//     }
// }

// class List{
//     constructor(){
//         this.head = null 
//     }
    
//     insertTolist(data){
//         let newNode = new Node(data);
//         if(!this.head){
//             this.head = newNode
//         } else {
//             let curr = this.head
//             while(curr.next){
//                 curr = curr.next
//             }
//             curr.next = newNode
//         }
//     }

//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.data)
//             curr = curr.next                                                                                                                                                 
//         }
//     }

//     delete(data){
//         if(!this.head) return 
//         if(this.head.data === data){
//             this.head = this.head.next
//         }
//         let current = this.head 
//         while(current.next && current.next.data !== data){
//             current = current.next
//         }
//         if(current.next){
//             current.next = current.next.next
//         }
//     }
// }

// let ll = new List();
// ll.insertTolist(1)
// ll.insertTolist(2)
// ll.insertTolist(3);
// ll.delete(2)
// ll.print()

// <--------------------Binary Search---------------------->
// let sortedArray = [1,2,3,4,5,6,7,8,9];
// function binarySearch(arr , target){
//     let left = 0
//     let right = arr.length - 1 

//     while(left <= right){
//         let mid = Math.floor((left + right)/2);
//         if(arr[mid] == target){
//             return mid
//         } else if(arr[mid] < target) {
//             left = mid + 1
//         }else {
//             right = mid - 1
//         }
//     }
//     return -1 
// }

// console.log(binarySearch(sortedArray , 5));

// function binarySearch(arr , target , left = 0 , right = arr.length - 1 ){
//     if(left > right) return -1
    
//     let mid = Math.floor((left + right) / 2);

//     if(arr[mid] === target) {
//         return mid
//     }

//     if(arr[mid] < target){
//         return binarySearch(arr , target , left = mid + 1 )
//     } else {
//         return binarySearch(arr, target , left , right = mid - 1)
//     }
// }

// console.log(binarySearch(sortedArray , 3 ))

// <---------------Linear Search----------------->
// function linearSearch(arr , target = 3){
//     for(let i = 0 ; i< arr.length ; i++){
//     if(arr[i] === target ){
//         return i
//     }
//     return - 1
// }
// }
// console.log(linearSearch(arr , 1))

// <-----------recursion-------------->
// function sumOfDigit(num){
//     if(num < 10 ) return num
//     return (num%10) + sumOfDigit(Math.floor(num / 10)) 
// }
// console.log(sumOfDigit(1234))
// function sum(n){
//     if(n <= 0) return 0
//     return n + sum(n - 1);
// }
// console.log(sum(5));

// <--------------Bubble sort-------------->
// function bubbleSort(arr){
//     for(let i = 0 ; i< arr.length ; i++){
//         for(let j = 0 ; j<arr.length - i - 1 ; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j] , arr[j+1]] = [arr[j+1 ] , arr[j]] 
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort(arr))

// <----------------Insertion Sort----------------->
// function insertion(arr){
//     let n = arr.length
//     for(let i = 1 ; i<n ;i++){
//         let key = arr[i];
//         let j = i - 1
//         while(arr[j] > key && j >= 0){
//             arr[j+1] = arr[j]
//             j-- 
//         }
//         arr[j+1] = key
//     }
//     return arr
// }
// console.log(insertion(arr))

// <--------------------selection sort--------------->
// function selection(arr){
//     let n = arr.length 
//     for(let i = 0 ; i<n -1 ; i++){
//         let minIndex = i
//         for(let j = i + 1 ; j<n ; j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j
//             }
//         }

//         [arr[i]  , arr[minIndex]] = [arr[minIndex]  , arr[i]]
//     }
//     return arr
// }
// console.log(selection(arr))

// <-------------quick Sort---------------->
// function quick(arr){
//     if(arr.length <= 1) return arr

//     let pivot = arr[arr.length - 1];
//     let left = []
//     let right = []
//     for(let i = 0 ; i<arr.length -1 ; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else {
//             right.push(arr[i])
//         }
//     }

//     return [...quick(left) , pivot , ...quick(right)]
// }
// console.log(quick(arr))

// <------------merge Sort------------>
// function mergeSort(arr){
//     if(arr.length <=1 )return arr

//     let mid = Math.floor((arr.length / 2));
//     let left = arr.slice(0 , mid)
//     let right = arr.slice(mid)

//     return merge(mergeSort(left) , mergeSort(right)) 
// }

// function merge(left , right){
//     let result = []
//     let i = 0 , j = 0

//     while(i < left.length && j < right.length){
//         if(left[i] < right[j]){
//             result.push(left[i])
//             i++
//         }else {
//             result.push(right[j])
//             j++
//         }
//     }

//     return result.concat(left.slice(i)).concat(right.slice(j))
// }

// console.log(mergeSort(arr))

// <------bst---------->
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(){
        this.root = null
    }

    insert(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode
        } else {
            this.insertNode(this.root  , newNode)
        }
    }

    insertNode(root , newNode){ 
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            } else {
                this.insertNode(root.left , newNode)
            } 
        } else {
            if(root.right === null){
                root.right = newNode
            } else {
                this.insertNode(root.right  , newNode)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root , value)
    }

    deleteNode(root , value){
        if(root === null) {
            return root 
        }

        if(value < root.value){
            root.left = this.deleteNode(root.left , value)
        } else if (value > root.value){
            root.right = this.deleteNode(root.right , value)
        } else {
            if(!root.left && !root.right) {
                return null
            } 
            if(!root.left) {
                return root.right
            } else if(!root.right){
                return root.left
            }
            

            let minValue = this.min(root.right);
            root.value = minValue
            root.right = this.deleteNode(root.right , minValue)
        }
        return root
    }

    // <-----------dfs---------->
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    findHeight (node = this.root){
        if(!node ) return -1
        return Math.max(this.findHeight(node.left) , this.findHeight(node.right)) + 1
    }

    levelOrder() {
        let que = []
        que.push(this.root);

        while(que.length){
            let curr = que.shift()
            console.log(curr.value);
            if(curr.left){
                que.push(curr.left)
            }
            if(curr.right){
                que.push(curr.right)
            }
        }
    }
}

let bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(20)
bst.insert(4)
bst.preOrder(bst.root)
bst.delete(10)
console.log('deleted')
bst.preOrder(bst.root)
console.log('Height' + bst.findHeight())
bst.levelOrder()

// <-----------graph----------->
class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        this.adjacencyList[vertex] = new Set()
    }

    addEdge(vertex1 , vertex2){
        if(!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1 , vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return null
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex , adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    dfs(start , visited = new Set()){
        if(!this.adjacencyList[start]) return null
        console.log(start);
        visited.add(start)

        for(let neigh of this.adjacencyList[start]){
            if(!visited.has(neigh)){
                this.dfs(neigh , visited)
            }
        }
    }

    bfs(start){
        let que = [start]
        let visited = new Set();
        visited.add(start)
        
        while(que.length){
            let vertex = que.shift()
            console.log(vertex);

            for(let neigh of this.adjacencyList[vertex]){
                if(!visited.has(neigh)) {
                    visited.add(neigh)
                    que.push(neigh)
                }
            }
        }
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + '--' + [...this.adjacencyList[vertex]])
        }
    }

}

let graph = new Graph()
graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')
graph.addVertex('d')
graph.addEdge('a' , 'b');
graph.addEdge('a' , 'c');
graph.addEdge('b' , 'd');
// graph.removeEdge('d' , 'c')
// graph.removeVertex('d')
graph.dfs('a')
graph.display()
graph.bfs('a')

// <---------------stack------------>
class stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.items.length == 0){
            return null
        }
        return this.items.pop()
    }

    display(){
        console.log(this.items.join('->'))
    }
}

let sta = new stack()
sta.push(1)
sta.push(12)
sta.push(13)
sta.display()
sta.pop()
sta.display()

class quetostack {
    constructor() {
        this.qu1 = [];
        this.qu2 = [];
    }

    push(element) {
        this.qu1.push(element);
    }

    pop() {
        if (this.qu1.length === 0) {
            return null;
        }

        while (this.qu1.length > 1) {
            this.qu2.push(this.qu1.shift());
        }

        let popelement = this.qu1.shift();

        [this.qu1, this.qu2] = [this.qu2, this.qu1];

        return popelement;
    }
}

let qs = new quetostack();
qs.push(1);
qs.push(2);
qs.push(3);

console.log(qs.pop()); 
console.log(qs.pop()); 

// <------------queue------------->
class queue {
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    deqeueue(){
        if(this.items.length === 0) {
            return null
        }
        return this.items.shift()
    }

    display(){
        console.log(this.items.join('<-'))
    }
}
let q = new queue()
q.enqueue(1)
q.enqueue(1)
q.enqueue(3)
q.enqueue(4)
q.display()
q.deqeueue()
q.display()

// <------------- que using a stack ---------------->
class queusingStack{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(element){
        this.stack1.push(element)
    }

    deqeueue(){
        if(this.stack2.length === 0){
            while(this.stack1.length){
                this.stack2.push(this.stack1.pop())
            }
        }
        if(this.stack2.length === 0){
            console.log('empty')
        }

        return this.stack2.pop()
    }
}

let qu = new queusingStack()
qu.enqueue(1)
qu.enqueue(2)
qu.enqueue(3)
console.log(qu.deqeueue())

// <-----------heap----------->
class MinHeap {
  constructor() {
    this.heap = []
  }

  getParent(index) {
    return Math.floor((index - 1) / 2)
  }

  getLeft(index) {
    return 2 * index + 1
  }

  getRight(index) {
    return 2 * index + 2
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  insert(val) {
    this.heap.push(val)
    this.heapifyUp()
  }

  heapifyUp() {
    let index = this.heap.length - 1
    while (index > 0) {
      let parentIndex = this.getParent(index)
      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex, index)
        index = parentIndex
      } else {
        break
      }
    }
  }

  remove() {
    if (this.heap.length == 0) return null
    if (this.heap.length == 1) return this.heap.pop()

    let min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifyDown() // ✅ fixed spelling
    return min
  }

  heapifyDown() {
    let index = 0;
    while (this.getleft(index) < this.heap.length) {
        let smallest = this.getleft(index);
        let right = this.getRight(index);

        if (right < this.heap.length && this.heap[smallest] > this.heap[right]) {
        smallest = right;
        }

        if (this.heap[index] > this.heap[smallest]) {
        this.swap(index, smallest);
        index = smallest;
        } else {
        break;
        }
    }
    }


  print() {
    console.log(this.heap)
  }
}

let mh = new MinHeap()
mh.insert(1)
mh.insert(2)
mh.insert(4)
mh.insert(6)
mh.remove()
mh.print() 

class MaxHeap{
    constructor(){
        this.heap = []
    }
    
    getParent(i) {
        return Math.floor((i - 1) / 2)
    }

    getLeft(i){
        return 2*i + 1 
    }

    getRight(i){
        2*i + 2
    }

    swap(i, j){
        [this.heap[i] , this.heap[j]] = [this.heap[j] , this.heap[i]]
    }

    insert(val){
        this.heap.push(val)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length -1 
        while(index > 0){
            let parent = this.getParent(index);
            if(this.heap[parent] < this.heap[index]){
                this.swap(index , parent);
                index = parent
            }else break
        }
    }

    remove(){
        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown()
    }

    heapifyDown(){
        let index = 0 
        while(this.getLeft(index) < this.heap.length){
            let max = this.getLeft(index)
            let right = this.getRight(index);
            if(this.heap[right] > this.heap[max]){
                max = right
            }

            if(this.heap[index] < this.heap[max]){
                this.swap(index , max)
                index = max 
            } else break
        }
    }

    print(){
        console.log(this.heap)
    }


}

let mxh = new MaxHeap()
mxh.insert(1)
mxh.insert(2)
mxh.insert(32)
mxh.insert(35)
mxh.print()
mxh.remove()
mxh.print()

// <--------------heap sort--------->
function heapSort(arr){
    let n = arr.length 

    for(let i = Math.floor(n/2) - 1; i>=0 ; i--){
        heapify(arr , n , i)
    }

    for(let i = n -1 ; i>0 ; i--){
        [arr[0] , arr[i]] = [arr[i] , arr[0]]

        heapify(arr , i , 0)
    }

    return arr 
}

function heapify(arr , n , i){
    let largest = i
    let left = 2*i+1
    let right = 2*i+2

    if(left < n && arr[largest] < arr[left]){
        largest = left
    }

    if(right < n && arr[largest] < arr[right]){
        largest = right
    }

    if(largest !== i ){
        [arr[i] , arr[largest]] = [arr[largest] , arr[i]]
        heapify(arr , n , largest)
    }

}

console.log(heapSort([1,5,1,8,9,3,2,1]))

// <---------------trie-------------->
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

// <-----------hash table------------>
class Hashtable {
    constructor(){
        this.table = new Array(100)
    }

    _hash(key){
        let hash = 0 
        for(let i = 0 ; i<key.length ; i++){
            hash += key.charCodeAt(i)
        }
        return hash % this.table.length
    }

    set(key , value){
        let index = this._hash(key);
        if(!this.table[index]){
            this.table[index] = []
        }

        this.table[index].push([key , value])
    }

    get(key){
        let index = this._hash(key);
        if(this.table[index]){
            for(let pair of this.table[index]){
                if(pair[0] === key){
                    return pair[1]
                }
            }
        }
        return undefined
    }

    delete(key){
        let index = this._hash(key)
        if(this.table[index]){
            this.table[index ] = this.table[index].filter(pair => pair[0] != key);
        }
    }

    display(){
        for(let i = 0 ; i<this.table.length ; i++){
            if(this.table[i]){
                console.log(i , this.table[i])
            }
        }
    }
}

let hashtable = new Hashtable()
hashtable.set('one' , 'amar')
hashtable.set('one' , 'fayis')
hashtable.set('two' , 'saju')
hashtable.set('three' , 'irfan');
hashtable.delete('three')
hashtable.display()
