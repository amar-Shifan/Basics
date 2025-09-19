// class node {
//     constructor(data){
//         this.data = data
//     }
// }

// class LL{
//     constructor(){
//         this.head = null
//     }

//     insert(val){
//         let newNode = new node(val);
//         if(!this.head) {
//             this.head = newNode
//         } else{
//             let curr = this.head
//             while(curr.next){
//                 curr = curr.next
//             }
//             curr.next = newNode
//         }
//     }

//     delete(val){
//         if(this.head.data === val){
//             this.head = this.head.next
//         }

//         let curr = this.head
//         while(curr.next && curr.next.data !== val){
//             curr = curr.next
//         }

//         if(curr.next){
//             curr.next = curr.next.next
//         }
//     }

//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.data)
//             curr = curr.next
//         }
//     }
// }

// let ll = new LL()
// ll.insert(1)
// ll.insert(2)
// ll.insert(3)
// ll.delete(2)
// ll.delete(3)
// ll.print()

// binary search
// function binarySearch(arr , tar , left = 0 , right = arr.length -1){
//     if(left > right){
//         return -1
//     }
//     let mid = Math.floor((left + right)/ 2)

//     if(arr[mid] === tar){
//         return mid
//     }

//     if(arr[mid] < tar) {
//         return binarySearch(arr , tar , left = mid + 1 , right)
//     } else {
//         return binarySearch(arr , tar , left , right = mid -1)
//     } 
// }
// console.log(binarySearch([1,2,3,4] , 4 ))

// function sumOfDigit(num){
//     if(num < 10) return num
//     return (num % 10) + sumOfDigit(Math.floor(num / 10))
// }
// console.log(sumOfDigit(1234))

// function sum(num){
//     if(num <= 0) return 0
//     return num + sum(num - 1 )
// }

// console.log(sum(5))
let arr = [5,2,1,8,3,4]
// function bubbleSort(arr){
//     for(let i = 0 ; i<arr.length ; i++){
//         for(let j = 0 ; j<arr.length - i -1 ; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort(arr))

// function insertion(arr){
//     for(let i = 1 ; i<arr.length ; i++){
//         let key = arr[i]
//         let j = i - 1
//         while(j>=0 && arr[j] > key){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = key
//     }
//     return arr
// }
// console.log(insertion(arr))

// function selection(arr){
//     for(let i = 0 ; i<arr.length - 1 ; i++){
//         let minIndex = i
//         for(let j = i + 1 ; j < arr.length ; j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j
//             }
//         }
//         [arr[minIndex] , arr[i] ] = [arr[i] , arr[minIndex]]
//     }
//     return arr
// }

// console.log(selection(arr))

// function quick(arr) {
//     if (arr.length <= 1) return arr;
//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     return [...quick(left), pivot, ...quick(right)];
// }
// console.log(quick(arr));

// function mergeSort(arr){
//     if(arr.length <= 1) return arr

//     let mid = Math.floor((arr.length / 2));
//     let left = arr.slice(0 , mid);
//     let right = arr.slice(mid);

//     return merge(mergeSort(left) , mergeSort(right))
// }

// function merge(left , right){
//     let res = [];
//     let i = 0 , j = 0
//     while(i<left.length && j < right.length){
//         if(left[i] < right[j]){
//             res.push(left[i]);
//             i++
//         } else {
//             res.push(right[j]);
//             j++
//         }
//     }

//     return res.concat(left.slice(i)).concat(right.slice(j))
// }
// console.log(mergeSort(arr))

// class Node{
//     constructor(data){
//         this.data = data
//         this.left = null
//         this.right = null
//     }
// }

// class BST{
//     constructor(){
//         this.root = null
//     }

//     insert(data){
//         let newNode = new Node(data);
//         if(this.root == null) {
//             this.root = newNode
//         }else {
//             this.insertNode(this.root , newNode)
//         }

//     }

//     insertNode(root , newNode){
//         if(root.data  > newNode.data) {
//             if(root.left === null) {
//                 root.left = newNode
//             } else {
//                 this.insertNode(root.left , newNode)
//             }
//         } else {
//             if(root.right == null){
//                 root.right = newNode
//             } else {
//                 this.insertNode(root.right , newNode)
//             }
//         }
//     }

//     delete(val) {
//         this.root = this.deleteNode(this.root , val)
//     }
//     min(root) {
//         if(!root.left) {
//             return root.data
//         } else {
//             return this.min(root.left)
//         }
//     }

//     deleteNode(root , val){
//         if(root.data > val){
//             root.left = this.deleteNode(root.left , val)
//         } else if (root.data < val){
//             root.right = this.deleteNode(root.right , val)
//         } else {
//             if(!root.left && !root.right) {
//                 return null
//             }
//             if(!root.left) {
//                 return root.right
//             } 
//             if(!root.right) {
//                 return root.left
//             }

//             let minValue = this.min(root.right);
//             root.data = minValue
//             root.right = this.delete(root.right , minValue)

//         }
//         return root 
//     }

//     preOrder(root){
//         if(root) {
//             console.log(root.data)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     levelOrder(){
//         let que = []
//         que.push(this.root);

//         while(que.length) {
//             let curr = que.shift()
//             console.log(curr.data)
//             if(curr.left) {
//                 que.push(curr.left)
//             }
//             if(curr.right){
//                 que.push(curr.right)
//             }
//         }
//     }
// }

// let bst = new BST()
// bst.insert(10)
// bst.insert(2)
// bst.insert(15)
// bst.insert(4)
// // bst.delete(2)
// bst.preOrder(bst.root)
// bst.levelOrder()

// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         this.adjacencyList[vertex] = new Set()
//     }

//     addEdge(vertex1 , vertex2) {
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }

//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     removeEdge(vertex1 , vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }

//     removeVertex(vertex) {
//         for(let neigh of this.adjacencyList[vertex]) {
//             this.removeEdge(neigh , vertex)
//         }
//         delete this.adjacencyList[vertex]
//     }

//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex + '--' + [...this.adjacencyList[vertex]])
//         }
//     }

//     dfs(start , visited = new Set()){
//         if(!this.adjacencyList[start] ) return null
//         console.log(start)
//         visited.add(start)
//         for(let neigh of this.adjacencyList[start]) {
//             if(!visited.has(neigh)) {
//                 this.dfs(neigh , visited)
//             }
//         }
//     }

//     bfs(start){
//         let que = [start];
//         let visited =  new Set();
//         visited.add(start);

//         while(que.length){
//             let vertex = que.shift();
//             console.log(vertex)
//             for(let neigh of this.adjacencyList[vertex]){
//                 if(!visited.has(neigh)){
//                     que.push(neigh)
//                     visited.add(neigh)
//                 }
//             }
//         }

//     }
// }

// let graph = new Graph()
// graph.addVertex('a')
// graph.addVertex('b')
// graph.addVertex('c')
// graph.addEdge('a' , 'b')
// graph.addEdge('c' , 'b')
// // graph.removeVertex('a')
// graph.display()
// graph.dfs('a')
// graph.bfs('a')

// class stack{
//     constructor(){
//         this.items = []
//     }

//     push(element){
//         this.items.push(element)
//     }

//     pop(){
//         return this.items.pop()
//     }

//     display(){
//         console.log(this.items.join('->'))
//     }
// }
// let sta = new stack()
// sta.push(1)
// sta.push(12)
// sta.push(13)
// sta.display()
// sta.pop()
// sta.display()

// class quetostack{
//     constructor(){
//         this.qu1 = []
//         this.qu2 = []
//     }

//     push(element) {
//         this.qu1.push(element)
//     }
//     pop(){
//         while(this.qu1.length>1){
//             this.qu2.push(this.qu1.shift())
//         }

//         let pop = this.qu1.shift()
//         [this.qu1 , this.qu2] = [this.qu2 , this.qu1]
//         return pop
//     }
// }

// class stacktoq{
//     constructor(){
//         this.stack1 = []
//         this.stack2 = []
//     }

//     push(element){
//         this.stack1.push(element)
//     }

//     deque(){
//         while(this.stack1.length){
//             this.stack2.push(this.stack1.pop())
//         }

//         return this.stack2.pop()
//     }
// }

// class MinHeap{
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(i){
//         return Math.floor((i - 1) / 2)
//     }

//     getleft(i){
//         return 2 * i + 1
//     }

//     getRight(i){
//         return 2 * i + 2 
//     }

//     swap(i , j){
//         [this.heap[i] , this.heap[j]] = [this.heap[j] , this.heap[i]]
//     }

//     insert(element){
//        this.heap.push(element);
//        this.heapifyUp()

//     }

//     heapifyUp(){
//         let index = this.heap.length - 1

//         while(index > 0){
//             let parent = this.getParentIndex(index);
//             if(this.heap[parent] > this.heap[index]){
//                 this.swap(parent , index)
//                 index = parent
//             } else {
//                 break
//             }
//         }
//     }

//     remove(){
//         if(this.heap.length == 0) return null
//         if(this.heap.length === 1) return this.heap.pop();

//         let min = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown();
//         return min
//     }

//     heapifyDown(){
//         let index = 0

//         while(this.getleft(index) < this.heap.length){
//             let smallest = this.getleft(index);
//             let right = this.getRight(index);

//             if(right < this.heap.length && this.heap[smallest] > this.heap[right]){
//                 smallest = right
//             }

//             if(this.heap[index] > this.heap[smallest]){
//                 this.swap(index , smallest);
//                 index = smallest
//             } else{break} 
//         }
//     }

//     print(){
//         console.log(this.heap)
//     }
// }

// let mh = new MinHeap()
// mh.insert(3)
// mh.insert(1)
// mh.insert(10)
// mh.insert(15);
// mh.print()
// mh.remove()
// mh.print()

// function heapSort(arr){
//     let n = arr.length
//     for(let i = Math.floor(n / 2) -1 ; i >= 0 ; i--){
//         heapify(arr , n , i)
//     }

//     for(let i = n -1 ; i>0 ; i--){
//         [arr[0] , arr[i]] = [arr[i] , arr[0]]
//         heapify(arr , i , 0)
//     }
//     return arr
// }
// function heapify(arr , n , i){
//     let largest = i
//     let left = 2*i+1
//     let right = 2*i+2

//     if(left < n && arr[left] > arr[largest]){
//         largest = left
//     }

//     if(right < n && arr[right] > arr[largest]){
//         largest = right
//     }

//     if(largest !== i) {
//         [arr[i] , arr[largest]] = [arr[largest] , arr[i]];
//         heapify(arr , n , largest)
//     }

// }
// console.log(heapSort([5,1,6,2]))

// class TrieNode{
//     constructor(){
//             this.children = {}
//             this.isEndofWord = false 
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }

//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char] = new TrieNode()
//             }
//             node = node.children[char]
//         }
//         node.isEndofWord = true
        
//     }
//     search(word){
//         let node = this.root 
//         for(let char of word){
//             if(!node.children[char]){
//                 return false 
//             }
//             node = node.children[char]
//         }
//         return node.isEndofWord;
//     }
// }
// let trie = new Trie()
// trie.insert('amar')
// console.log(trie.search('amar'))

// class Hashtable{
//     constructor(){
//         this.table = new Array(100)
//     }

//     _hash(key){
//         let hash = 0 
//         for(let i = 0 ; i<key.length ; i++){
//             hash += key.charCodeAt(i)
//         }

//         return hash % this.table.length
//     }

//     set(key , val){
//         let index = this._hash(key);
//         if(!this.table[index]) {
//             this.table[index]= []
//         } 
//         this.table[index].push([key , val])
//     }

//     get(key){
//         let index = this._hash(key);
//         if(this.table[index]){
//             for(let pair of this.table[index]){
//                 if(pair[0] === key){
//                     return pair[1]
//                 }
//             }
//         }
//         return undefined
//     }

//     delete(key){
//         let index = this._hash(key)
//         if(this.table[index]){
//             this.table[index] = this.table[index].filter(pair => pair[0] !== key);
//         }
//     }

//     display(){
//         for(let i = 0 ; i<this.table.length ; i++){
//             if(this.table[i]){
//                 console.log(i , this.table[i])
//             }
//         }
//     }
// }

// let ht = new Hashtable()
// ht.set('car','LC')
// ht.set('rac','Defender')
// ht.set('bike' , 'GT')
// ht.display()
// ht.delete('car')
// ht.display()
