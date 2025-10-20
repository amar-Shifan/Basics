//1.  Convert nested callbacks (callback hell) → Promise chain → async/await (practical conversion)
// function getUser(name , callback){
//     console.log('Name is : ' , name)
//     setTimeout(() => {
//         callback(10)
//     }, 1000)
// }

// function getDetails(id , callback){
//     console.log('Id is : ' , id);
//     setTimeout(() => {
//         callback('online')
//     },1000)
// }

// function getStatus(stat , callback){
//     console.log('status is : ' , stat)
//     setTimeout(() => {
//         callback('Done')
//     },1000)
// }

// callback hell
// getUser('amar' , (id) => {
//     getDetails(id , (stat) => {
//         getStatus(stat , (done) => {
//             console.log('All done : ' , done)
//         })
//     })
// })

// In Promise
// function getUser(name){
//     console.log('Name is : ' , name);
//     return new Promise((res , rej) => {
//         setTimeout(() => {
//             res(10); 
//         }, 1000);
//     })
// }

// function getDetails(id){
//     console.log('id is : ' , id);
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res('online')
//         },1000)
//     })
// }

// function getStatus(status){
//     console.log('status is : ', status);
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res('done')
//         },1000)
//     })
// }

// getUser('amar')
// .then((id) => getDetails(id))
// .then((status) => getStatus(status))
// .then((done) => console.log('all done : ' , done))

// // async await 
// const asyncFun = async function() {
//     try {
//         let pro1 = await getUser('amar')
//         let pro2 = await getDetails(pro1);
//         let pro3 = await getStatus(pro2)
//         console.log('all done ' , pro3)
//     } catch (error) {
//         console.log(error)
//     }
// } 
// asyncFun()

//2. Find second largest even number in array without sorting
// let arr = [5,1,8,3,9,2,7];
// function findSec(arr){
//     let largest = -Infinity
//     let sec = -Infinity

//     for(let i = 0 ; i<arr.length ; i++){
//         if(arr[i] > largest && arr[i]%2 === 0) {
//             sec = largest
//             largest = arr[i]
//         }else if (arr[i] > sec && sec !== largest && arr[i]%2 === 0){
//             sec = arr[i]
//         }
//     }
//     return sec
// }
// console.log(findSec(arr))

//3. Move all zeros in array to the right (in-place, minimal complexity)
// function moveRight(arr){
//     let j = 0 
//     for(let i = 0 ; i<arr.length ; i++){
//         if(arr[i] !== 0){
//             arr[j] = arr[i];
//             j++
//         }
//     }
//     while(j<arr.length){
//         arr[j] = 0
//         j++
//     }
//     return arr
// }
// console.log(moveRight([0,1,0,4,2,0,3]))
// function moveZerosRight(arr) {
//   let j = 0; // index for non-zero placement

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       // swap arr[i] and arr[j] if i ≠ j
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       j++;
//     }
//   }

//   return arr;
// }

//4. Create a generator that yields values (e.g., even numbers in reverse)
// function* gen(){
//     for(let i = 10 ; i>0 ; i--){
//         if(i%2==0) {
//             yield i
//         }
//     }
// }
// let res = gen()
// console.log(res.next().value)
// console.log(res.next().value)
// console.log(res.next().value)

//5. Find extra character between two strings (s,t problem)
// function findExtra(strg1 ,strg2){
//     let count = {}
//     for(let char of strg1){
//         count[char] = (count[char] || 0) + 1
//     }

//     for(let char of strg2){
//         if(!count[char]) console.log(char)
//         count[char]--;
//     }
// }
// findExtra('ama' , 'aman')

// map
// const nums = [1, 2, 3, 4];
// const squares = nums.map(n => n * n);
// console.log(squares); // [1, 4, 9, 16]

// const nums = [1, 2, 3];
// const strNums = nums.map(String);
// console.log(strNums); // ["1", "2", "3"]

// // filter
// const nums = [-2, 3, -1, 5, 0];
// const positives = nums.filter(n => n > 0);
// console.log(positives); // [3, 5]

// const nums = [1, 2, 3, 4, 5, 6];
// const evens = nums.filter(n => n % 2 === 0);
// console.log(evens); // [2, 4, 6]

// // reduce 
// const nums = [1, 2, 3, 4];
// const sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // 10

// const nums = [-2, 3, -1, 5, 0];
// const sumPositives = nums.reduce((acc, curr) => curr > 0 ? acc + curr : acc, 0);
// console.log(sumPositives); // 8

// const fruits = ['apple','banana','apple','orange','banana'];
// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});
// console.log(count); // { apple: 2, banana: 2, orange: 1 }

// // chaining
// const nums = [-2, 3, -1, 5, 0];
// const sumSquares = nums
//   .filter(n => n > 0)       // [3, 5]
//   .map(n => n * n)          // [9, 25]
//   .reduce((acc, n) => acc + n, 0); // 34

// console.log(sumSquares); // 34   

// 6.Implement BFS and DFS using adjacency list (practice traversal order)
class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1 , vertex2){
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1 , vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        for(let neigh of this.adjacencyList[vertex]){
            this.removeEdge(vertex , neigh)
        }
        delete this.adjacencyList[vertex]
    }

    DFS(start , visited = new Set()){
        if(!this.adjacencyList[start]) return null
        console.log(start);
        visited.add(start)

        for(let neigh of this.adjacencyList[start]){
            if(!visited.has(neigh)) {
                this.DFS(neigh  , visited)
            }
        }
    }

    BFS(start){
        let que = [start];
        let visted = new Set();
        visted.add(start)

        while(que.length){
            let vertex = que.shift()
            console.log(vertex)

            for(let neigh of this.adjacencyList[vertex]){
                if(!visted.has(neigh)){
                    que.push(neigh);
                    visted.add(neigh)
                }
            }
        }
    }
    print(){
        for(let adjVertex in this.adjacencyList){
            if(this.adjacencyList[adjVertex]){
                console.log(adjVertex + ' - > ' + [...this.adjacencyList[adjVertex]])
            }
        }
    }
}
// let graph = new Graph()
// graph.addVertex(1)
// graph.addVertex(2)
// graph.addVertex(4)
// graph.addVertex(3);
// graph.addEdge(1 , 2)
// graph.addEdge(3,4)
// graph.addEdge(3,1)
// graph.addEdge(4,2)
// graph.print()
// console.log('bfs')
// graph.BFS(1)
// console.log('dfs')
// graph.DFS(1)

// 7.Binary search & “insert position” function (given sorted array: return index or insert position)
function binarySearch(arr, tar , left = 0 , right = arr.length - 1){
    if(left > right) return -1
    let mid = Math.floor((left + right) / 2) + 1

    if(arr[mid] === tar) {
        return mid
    } else if (arr[mid] < tar){
        return binarySearch(arr, tar, left = mid + 1 , right)
    } else {
        return binarySearch(arr , tar , left , right = mid - 1)
    }
}
// console.log(binarySearch([1,3,4,5,6,7,8] , 4))

// 8.Heap sort and step-trace on small arrays
function heapSort(arr){
    let n = arr.length 

    for(let i = Math.floor(n/2) - 1 ; i>=0 ; i--){
        heapify(arr , n , i)
    }

    for(let i = n - 1 ;i>= 0 ; i--){
        [arr[0] , arr[i]] = [arr[i] , arr[0]];
        heapify(arr , i , 0)
    }
    return arr
}

function heapify(arr, n , i){
    let largest = i
    let left = 2*i+1
    let right = 2*i+2

    if(left < n && arr[left] > arr[largest]){
        largest = left
    }

    if(right < n && arr[right] > arr[largest]){
        largest = right
    }

    if(largest !== i){
        [arr[largest] , arr[i]] = [arr[i] , arr[largest]];
        heapify(arr , n , largest)
    }
}
// console.log(heapSort([3,1,5,3,2,8]))

class MaxHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(i){
        return Math.floor((i-1) /2)
    }

    getLeft(i){
        return 2 * i + 1
    }

    getRight(i){
        return 2 * i + 2
    }

    swap(i , j){
        [this.heap[i] , this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    insert(val){
        this.heap.push(val)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length - 1

        while(index >= 0){
            let parent = this.getParentIndex(index);
            if(this.heap[parent] < this.heap[index] ){
                this.swap(parent, index)
                index = parent
            } else break
        }
    }

    remove(){
        let max = this.heap[0];
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return max
    }

    heapifyDown(){
        let index = 0 

        while(this.getLeft(index) < this.heap.length){
            let largest = this.getLeft(index);
            let right = this.getRight(index);

            if(right < this.heap.length  && this.heap[largest] < this.heap[right]){
                largest = right
            }

            if(this.heap[index] < this.heap[largest]){
                this.swap(index , largest)
                index = largest
            } else break
        }
    }

    print(){
        console.log(this.heap)
    }

}
// let maxHeap = new MaxHeap()
// maxHeap.insert(2)
// maxHeap.insert(7)
// maxHeap.insert(1)
// maxHeap.insert(8)
// maxHeap.insert(3);
// maxHeap.remove();
// maxHeap.print()

// 8.BST: insert/delete/find min, height, pre-order, level-order traversals

// class Node{
//     constructor(data){
//         this.data = data
//         this.left = null
//         this.right = null
//     }
// }

class BST{
    constructor(){
        this.root = null
    }

    insert(data){
        let newNode = new Node(data);
        if(!this.root) {
            this.root = newNode
        } else {
            this.insertNode(newNode ,this.root)
        }
    }

    insertNode(newNode , root){

        if(newNode.data < root.data) {
            if(!root.left) {
                root.left = newNode
            } else {
                this.insertNode(newNode , root.left)
            }
        } else {
            if(!root.right){
                root.right = newNode
            } else {
                this.insertNode(newNode , root.right)
            }
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.data);
            this.inOrder(root.right)
        }
    }

    preOrder(root = this.root){
        if(root){
            console.log(root.data)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root  , value)
    }

    min(root){
        if(root.left){
            this.min(root.left)
        } else {
            return root.data
        }
    }
    deleteNode(root , value){
        if(root == null) return null

        if(root.data > value){
                root.left = this.deleteNode(root.left , value)
        } else if(root.data < value){
                root.right = this.deleteNode(root.right , value)
        } else {
            if(root.left && root.right){
                return null
            }

            if(!root.left) {
                return root.right
            } else if (!root.right){
                return root.left
            } 

            let min = this.min(root.right);
            root.data = min
            root.right = this.deleteNode(root.right , min)
        }
        return root
    }

    findHeight(node = this.root){
        if(!node) return null
        return Math.max(this.findHeight(node.left) , this.findHeight(node.right)) + 1
    }

    levelOrder(){
        let que = []
        que.push(this.root);

        while(que.length){
            let curr = que.shift();
            console.log(curr.data)
            if(curr.left){
                que.push(curr.left)
            }
            if(curr.right){
                que.push(curr.right)
            }
        }
    }
}


// let bst = new BST()
// bst.insert(6)
// bst.insert(2)
// bst.insert(5)
// bst.insert(1)
// bst.insert(8)
// // bst.delete(8)
// // bst.inOrder(bst.root)
// bst.preOrder(bst.root)
// console.log('level order')
// bst.levelOrder()
// console.log('height'+bst.findHeight())

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    insert(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
        } else {
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            if(!curr.next){
                curr.next = newNode
            }
        }
    }

    delete(data){
        if(this.head == null) return null
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
        while(curr){
            res.push(curr.data)
            curr  = curr.next
        }
        console.log(res.join(' -> '))
    }

    reverse(){
        let prev = null
        let curr = this.head

        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    findMiddle(){
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow.data
    }

    cyclic(){
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow= slow.next
            fast = fast.next.next
            if(slow === fast) return true 
        }
        return false
    }
}

// let ll = new LinkedList();
// ll.insert(1)
// ll.insert(2)
// ll.insert(3)
// ll.insert(4)
// ll.print()
// ll.delete(2)
// ll.reverse()
// ll.print()
// console.log(ll.findMiddle())

// bubble sort
function bubbleSort(arr){
    let n = arr.length
    for(let i = 0 ; i<arr.length ; i++){
        for(let j = 0 ; j<n - i - 1 ;j++){
            if(arr[j] > arr[j+1]){
                [arr[j] , arr[j+1]] = [arr[j+ 1] , arr[j]]
            }
        }
    }
    return arr
}
console.log(bubbleSort([5,1,3,7,2]))

// insertion sort
function insertionSort(arr){
    let n = arr.length 

    for(let i = 1 ; i<n ;i++){
        let key = arr[i];
        let j = i - 1
        while(j>= 0 && arr[j] > key){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
    return arr
}

console.log(insertionSort([5,12,1,5]))

// selection sort
function selectionSort(arr){
    let n = arr.length
    for(let i = 0 ; i<n -1 ; i++){
        let minIndex = i
        for(let j = i+1 ; j<n ; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        [arr[minIndex] , arr[i]] = [arr[i] , arr[minIndex]]
    }
    return arr
}
console.log(selectionSort([1,10,3,1,2]))

// quick sort
function quickSort(arr){
    if(arr.length <= 1) return arr
    
    let pivot = arr[arr.length - 1];
    let left = []
    let right = []

    for(let i = 0 ; i<arr.length - 1 ;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left) , pivot , ...quickSort(right)]
}
console.log(quickSort([5,1,7,1]))

// merge sort
function mergeSort(arr){
    if(arr.length <= 1) return arr

    let mid = Math.floor((arr.length /2))
    let left = arr.slice(0 , mid)
    let right = arr.slice(mid);

    return merge(mergeSort(left) , mergeSort(right))
}
function merge(left  , right){

    let res = [];
    let i = 0 , j = 0

    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
            res.push(left[i]);
            i++
        } else {
            res.push(right[j])
            j++
        }
    }

    return res.concat(left.slice(i)).concat(right.slice(j))
}
console.log( mergeSort([4,1,6,4,2]))

