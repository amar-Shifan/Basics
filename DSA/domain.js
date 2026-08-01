// recursion
function toOne(n){
    if(n === 0) return 
    console.log(n);
    toOne(n-1) 
}
// toOne(5)

function factorial(num){
    if(num === 0) return 1;
    return num*factorial(num - 1) 
}
// console.log(factorial(5))

function sumOf(n){
    if(n === 0) return 0;
    return n + sumOf(n - 1)
}
// console.log(sumOf(5))

function reverse(str){
    if(str.length === 0) return '';
    return reverse(str.slice(1)) + str[0]
}
// console.log(reverse('amar'))

function sumArr(arr , i=0){
    if(i === arr.length) return 0
    return arr[i] + sumArr(arr , i+1)
}
// console.log(sumArr([1,2,3,4]))

function fib(n){
    if(n <= 1) return 1
    return fib(n-1) + fib(n-2)
}
// console.log(fib(5))

function palindrome(str , left = 0 , right = str.length - 1){
    if(left >= right) return true

    if(str[left] !== str[right]) return false

    return palindrome(str , left + 1 , right - 1)
}
// console.log(palindrome('malayalam'))

// function max(arr , i = 0, maxValue = -Infinity){
//     if(i === arr.length) return maxValue
//     if(arr[i] > maxValue) {
//         maxValue = arr[i]
//     }
//     return max(arr , i + 1 , maxValue)
// }
function max(arr , i = 0 , maxVal = -Infinity){
    if(i === arr.length) return maxVal
    return max(arr , i + 1 , Math.max(maxVal , arr[i]))
}
// console.log(max([1,3,2,1]))

/// Sorting 

// bubbleSort

function bubbleSort(arr){
    for(let i = 0 ; i<arr.length - 1 ; i++){
        for(let j = 0 ; j<arr.length - i - 1 ; j++){
            if(arr[j] > arr[j+1]){
                [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
            }
        }
    }
    return arr
}
// console.log(bubbleSort([1,2,5,2,1,7,4]))

function insertionSort(arr){
    for(let i = 1 ; i<arr.length ; i++){
       let key = arr[i];
       let j = i - 1
       while(j>=0 && arr[j] > key){
        arr[j+1] = arr[j];
        j--
       }
       arr[j+1] = key
    }
    return arr
}
// console.log(insertionSort([5,12,5,1,2,3,4]))

function selectionSort(arr){
    for(let i = 0 ; i<arr.length - 1 ; i++){
        let minIndex = i
        for(let j = i + 1 ; j<arr.length ; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        [arr[minIndex] , arr[i]] = [arr[i] , arr[minIndex]]
    }
    return arr
}
// console.log(selectionSort([4,2,1,5,6,7]))

function quickSort(arr){
    if(arr.length <= 1 ) return arr
    
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for(let i = 0 ; i<arr.length - 1 ; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left) , pivot , ...quickSort(right)]
}
// console.log(quickSort([4,2,1,5,6,12]));


function mergeSort(arr){
    if(arr.length <= 1 ) return arr
    let mid = Math.floor(arr.length / 2) 
    let left = arr.slice(0 , mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left) , mergeSort(right))
}
function merge(left , right){
    let i = 0, j = 0
    let res = [];
    while(i < left.length && j <right.length){
        if(left[i] < right[j]){
            res.push(left[i]);
            i++
        } else {
            res.push(right[j]);
            j++
        }
    }
    return res.concat(left.slice(i)).concat(right.slice(j))
}
// console.log(mergeSort([5,3,1,5,1,32]))

function binarySearch(arr , tar , left = 0 , right = arr.length - 1){
    if(left > right) return -1
    let mid = Math.floor((left + right) / 2) + 1

    if(arr[mid] === tar) {
        return mid
    } else if(arr[mid] < tar){
        return binarySearch(arr , tar , mid + 1 , right)
    } else {
        return binarySearch(arr , tar , left , mid - 1)
    }
}
// console.log(binarySearch([1,2,3,4,5,6] , 3))

/// Linked List 

// class Node{
//     constructor(data){
//         this.data = data 
//         this.next = null
//     }
// }

class LL{
    constructor(){
        this.head = null
    }

    insert(data){
        let newNode = new Node(data);
        if(!this.head) {
            this.head = newNode
        } else {
            let curr = this.head 
            while(curr.next){
                curr = curr.next
            }
            curr.next = newNode
        }
    }

    findMid(){
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next 
            fast = fast.next.next
        }
        return slow.data || null
    }

    delete(data){
        if(!this.head) return 

        if(this.head.data === data){
            this.head = this.head.next
        }
        let curr = this.head
        while(curr.next && curr.next.data !== data){
            curr = curr.next
        }
        if(curr.next){
            curr.next = curr.next.next
        }
    }

    print(){
        let curr = this.head
        let res = []
        while(curr) {
            res.push(curr.data)
            curr = curr.next
        }
        console.log(res.join(' -> '))
    }
}
// let ll = new LL();
// ll.insert(4)
// ll.insert(2)
// ll.insert(1)
// ll.insert(6)
// ll.insert(7);
// ll.print()
// ll.delete(1)
// ll.print()
// console.log('mid --- ' + ll.findMid())

/// BST 

class Node{
    constructor(data){
        this.data = data 
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    insert(data){
        let newNode = new Node(data);
        if(!this.root) {
            this.root = newNode
        } else {
            this.insertNode(this.root , newNode)
        }
    }

    insertNode(root , newNode){
        if(newNode.data < root.data){
            if(root.left === null){
                root.left = newNode
            } else {
                return this.insertNode(root.left , newNode)
            }
        } else {
            if(root.right === null){
                root.right = newNode
            } else return this.insertNode(root.right , newNode)
        }
    }

    inOrder(root = this.root){
        if(root){
            this.inOrder(root.left)
            console.log(root.data);
            this.inOrder(root.right)
        }
    }

    bfs(){
        let queue = [];
        queue.push(this.root)

        while(queue.length){
            let curr = queue.shift()
            console.log(curr.data);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right) {
                queue.push(curr.right)
            }
        }
    }

    findHeight(root = this.root){
        if(!root) return - 1
        return Math.max(this.findHeight(root.left) , this.findHeight(root.right)) + 1
    }

    min(root){
        if(!root.left){
            return root.data
        } else {
            return this.min(root.left)
        }
    }

    delete(data){
        if(!this.root) return
        this.root = this.deleteNode(this.root , data)
    }

    deleteNode(root , data){
        if(root == null) return root 

        if(root.data > data) {
            root.left = this.deleteNode(root.left , data)
        } else if(root.data < data){
            root.right = this.deleteNode(root.right , data)
        } else {
            if(!root.left && !root.right ){
                return null
            }
            if(!root.left) {
                return root.right
            }
            if(!root.right) {
                return root.left
            }

            let minValue = this.min(root.right);
            root.data = minValue
            root.right = this.deleteNode(root.right , minValue)
        }
        return root
    }
}

// let bst = new BST();
// bst.insert(10)
// bst.insert(5)
// bst.insert(12)
// bst.insert(6)
// bst.insert(2)
// bst.insert(1)
// bst.inOrder()
// bst.delete(2)
// console.log('-------bfs--------')
// bst.bfs()
// console.log('height --- ' , bst.findHeight())

//// minHeap
class minHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(index){
        return Math.floor((index - 1) / 2)
    }

    getLeft(index){
        return 2*index + 1
    }

    getRight(index){
        return 2*index + 2
    }

    swap(i,j){
        [this.heap[j] , this.heap[i]] = [this.heap[i] , this.heap[j]]
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length - 1
        
        while(index > 0){
            let parentIndex = this.getParentIndex(index);
            if(this.heap[index] < this.heap[parentIndex]){
                this.swap(index , parentIndex);
                index = parentIndex
            } else break
        }
    }

    remove(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop();

        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown()
        return min
    }

    heapifyDown(){
        let index = 0

        while(this.getLeft(index) < this.heap.length){
            let smallest = this.getLeft(index);
            let right = this.getRight(index);

            if(this.heap[smallest] > this.heap[right]){
                smallest = right
            }

            if(this.heap[index] > this.heap[smallest]){
                this.swap(index , smallest);
                index = smallest
            } else break
        }
    }

    print(){
        console.log(this.heap)
    }

}
// let mh = new minHeap();
// mh.insert(4)
// mh.insert(1)
// mh.insert(2)
// mh.insert(6);
// mh.print()
// mh.remove()
// mh.print();

class maxHeap{
    constructor(){
        this.heap = []
    }
    
    getParentIndex(index){
        return Math.floor((index - 1) / 2)
    }

    getLeft(index){
        return 2*index + 1
    }

    getRight(index){
        return 2*index + 2
    }

    swap(i,j){
        [this.heap[j] , this.heap[i]] = [this.heap[i] , this.heap[j]]
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length - 1 
        while(index > 0){
            let parentIndex = this.getParentIndex(index);
            if(this.heap[index] > this.heap[parentIndex]){
                this.swap(index , parentIndex);
                index = parentIndex
            } else break
        }
    }

    remove(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop();
        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max
    }

    heapifyDown(){
        let index = 0
        while(this.getLeft(index) < this.heap.length){
            let max = this.getLeft(index);
            let right = this.getRight(index)

            if(this.heap[max] < this.heap[right] && right < this.heap.length){
                max = right
            }

            if(this.heap[index] < this.heap[max]){
                this.swap(index , max);
                index = max
            } else break
        }
    }

    print(){
        console.log(this.heap)
    }

}
// let mh = new maxHeap();
// mh.insert(4)
// mh.insert(9)
// mh.insert(1)
// mh.insert(3)
// mh.insert(10);
// mh.print()
// mh.remove()
// mh.print()

//// Stack
class stacktoQue{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    push(value){
        this.stack1.push(value);
    }

    pop(){
        if(this.stack2.length === 0) {
            while(this.stack1.length){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
}

// let que = new stacktoQue();
// que.push(1)
// que.push(2)
// que.push(3);
// console.log(que.pop())

class quetoStack{
    constructor(){
        this.qu1 = [];
        this.qu2 = [];
    }

    enqueue(value){
        this.qu1.push(value);
    }

    dequeue(){
        if(this.qu1.length === 0) return null;
        while(this.qu1.length > 1){
            this.qu2.push(this.qu1.shift())
        }
        let popelement = this.qu1.pop();
        [this.qu1 , this.qu2] = [this.qu2 , this.qu1];
        return popelement
    }
}

// let stack = new quetoStack();
// stack.enqueue(1)
// stack.enqueue(2)
// stack.enqueue(3)
// console.log(stack.dequeue())

// hashtable
class Hashtable{
    constructor(){
        this.table = new Array(100)
    }

    _hash(key){
        let hash = 0;
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
        this.table[index].push([key,value])
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
        let index = this._hash(key);
        if(this.table[index]){
            this.table[index] = this.table[index].filter(pair => pair[0] !== key)
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

// let hashtable = new Hashtable();
// hashtable.set('car','bmw');
// hashtable.set('lap','asus');
// hashtable.set('colour','red');
// console.log(hashtable.get('car'));
// hashtable.display()
// hashtable.delete('car');
// hashtable.display()

// heapSort
function heapSort(arr){
    let n = arr.length

    for(let i = Math.floor(n/2)- 1 ; i>=0 ; i--){
        heapify(arr , n , i)
    }

    for(let i = n -1 ; i>0 ; i--){
        [arr[0] , arr[i]] = [arr[i] , arr[0]];
        heapify(arr , i  ,0)
    }

    return arr
}

function heapify(arr , n , i){
    let largest = i
    let left = 2*i+1
    let right = 2*i+2;

    if(left < n && arr[left] > arr[largest]){
        largest = left
    }
    if(right < n && arr[right] > arr[largest]){
        largest = right
    }

    if(largest !== i) {
        [arr[largest] , arr[i]] = [arr[i] , arr[largest]]
        heapify(arr , n , largest)
    }
}

// console.log(heapSort([5,34,1,3,2,7]))

class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        this.adjacencyList[vertex] = new Set()
    }

    addEdge(vertex1 , vetex2){
        this.adjacencyList[vertex1].add(vetex2)
        this.adjacencyList[vetex2].add(vertex1)
    }

    removeEdge(vertex1 , vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            for(let neigh of this.adjacencyList[vertex]){
                this.removeEdge(neigh , vertex)
            }
        }
        delete this.adjacencyList[vertex]
    }

    dfs(vertex , visited = new Set()){
        if(!this.adjacencyList[vertex]) return null
        console.log(vertex);
        visited.add(vertex);

        for(let neigh of this.adjacencyList[vertex]){
            if(!visited.has(neigh)){
                this.dfs(neigh , visited)
            }
        }
    }

    bfs(start){
        let queue = [start];
        let visited = new Set();
        visited.add(start);

        while(queue.length){
            let vertex = queue.shift();
            console.log(vertex);

            for(let neigh of this.adjacencyList[vertex]){
                if(!visited.has(neigh)){
                    visited.add(neigh)
                    queue.push(neigh)
                }
            }
        }
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + '---'+[...this.adjacencyList[vertex]])
        }
    }
}

// let graph = new Graph();
// graph.addVertex('a')
// graph.addVertex('b')
// graph.addVertex('c')
// graph.addVertex('d')
// graph.addVertex('e')
// graph.addEdge('a','c');
// graph.addEdge('b','d');
// graph.addEdge('d','c');
// console.log('dfs')
// graph.dfs('a')
// console.log('bfs')
// graph.bfs('a')
// console.log('display')
// graph.display()