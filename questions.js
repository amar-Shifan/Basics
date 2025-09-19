
// let arr = [1,2,1,2,1,4,5]
// let freq = arr.reduce((acc ,val ) => {
//     if(acc[val]) {
//         acc[val]++
//     } else {
//         acc[val] = 1
//     }
//     return acc
// },{})
// console.log(freq)

// let str = 'Hai Hello Iam Amar'
// let words = str.split(' ');
// let rev = words.map(val => val.split('').reverse().join(''))
// console.log(rev.join(' '))

// class Node {
//     constructor(data){
//         this.data = data; 
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//     }
    
//     push(data) {
//         let newNode = new Node(data);
//         if(!this.head) {
//             this.head = newNode
//         } else {
//             let current = this.head
//             while(current.next) {
//                 current = current.next
//             }

//             current.next = newNode
//         }
//     }

//     delete(data) {
//         if(!this.head) return 
//         if(this.head.data == data) {
//             this.head = this.head.next 
//             return 
//         } 

//         let current = this.head
//         while(current.next && current.next.data != data){
//             current = current.next 
//         }

//         if(current.next){
//             current.next = current.next.next
//         }
//     } 

//     rev(){
//         let prev = null
//         let current = this.head

//         while(current) {
//             let next = current.next
//             current.next = prev 
//             prev = current
//             current = next 
//         }

//         this.head = prev
//     }

//     print(){
//         let res = []
//         let current = this.head

//         while(current){
//             res.push(current.data)
//             current = current.next 
//         }

//         console.log(res.join(' -> '))
//     }

//     middle(){
//         let slow = this.head
//         let fast = this.head
//         while(fast && fast.next) {
//             slow = slow.next
//             fast = fast.next.next
//         }

//         return slow.data || null
//     }
// }

// let ll = new LinkedList()
// ll.push(1)
// ll.push(2)
// ll.push(7)
// ll.push(5)
// ll.push(4)
// ll.push(3)
// ll.rev()
// ll.delete(3)
// ll.print()
// console.log('Middle element -> ',ll.middle())

// closure
// function outer (){
//     let count = 0
//     return (function innner() {
//         return ++count
//     })
// }

// const res = outer();
// console.log(res())
// console.log(res())
// console.log(res())

// promise 
// function isPalindrome(word) {
//     let rev = word.split('').reverse().join('')
//     return new Promise((res,rej) => {
//         if(rev === word) {
//             setTimeout(() => {
                //     res('word is palindrome')
                // },1000)
//         } else {
//             rej('word is not palindrome')
//         }
//     })
// }

// let promise =  isPalindrome('malayalam');
// promise
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })
// .finally(() => {
//     console.log('Finalised')
// })

// hoisting 
// console.log(a);
// let a = 'amar'

// composition function 
// let compose = (f,g) => (x) => f(g(x));
// let double = (x)=> x * 2 ;
// let sum = (x) => x + x;

// let res = compose(double , sum);
// console.log(res(5))

// factory function 
// function createUser (name ) {
//     return {
//         name : name ,
//         wish() {
//             console.log(`my name is ${name}`)
//         }
//     }
// }

// let res = createUser('amar');
// res.wish()

// generator function 
// function* generator(){
//     for(let i = 0 ; i<5 ; i++){
//         yield i 
//     }
// }

// let res = generator();
// console.log(res.next().value)
// console.log(res.next().value)
// console.log(res.next().value)

// constructor function
// function User(name) {
//     this.name = name;
//     this.greet = function () {
//         console.log(`my name is ${name}`)
//     }
// }

// let res = new User('amar');
// res.greet()

// currying 
// function curry(x){
//     return function(y){
//         return function(z) {
//             return x + y +z
//         }
//     }
// }

// console.log(curry(1)(2)(3))

//all race allsettled
// let p1 = Promise.resolve(1)
// let p2 = Promise.resolve(2)

// Promise.allSettled([p1 , p2])
// .then((data) => console.log(data))

// call apply bind
// function greet(){
//     console.log(`greetings to ${this.name}`)
// }
// let obj = {name: 'amar'}
// greet.apply(obj);

// callback
// function greet(name , callback){
//     console.log(`hi ${name}`)
//     callback()
// }

// function sayHai(){
//     console.log('Hi Hello')
// }

// greet('amar' , sayHai)

// callback Hell
// setTimeout(() => {
//     console.log('step 1')
//     setTimeout(() => {
//         console.log('step 2')
//         setTimeout(() => {
//             console.log('step 3')
//         },1000)
//     },1000)
// },1000)

// --------------------------Node JSSSSSS --------------------------------
//rounter chaining
// let server = express();
// server.route('/user')
// .get((req , res) => {

// })
// .post((req,res)=>{

// })

// const middleware = (req, res , next) => {
//     next()
// }

// ---------------------------DSA------------------------------
// bubble sort 
// function bubbleSort(arr) {
//     let n = arr.length
//     for(let i = 0 ; i<n-1 ; i++){
//         for(let j = 0 ; j<n-i-1 ; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort([4,1,6,8,1,2]))

// selection sort 
// function selectionSort(arr) {
//     let n = arr.length
//     for(let i = 0 ; i < n - 1 ; i++) {
//         let minIndex = i
//         for(let j = i + 1 ; j<n ; j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j
//             }
//         }

//         [arr[minIndex] , arr[i]] = [arr[i] , arr[minIndex]]
//     }
//     return arr
// }

// console.log(selectionSort([5,2,6,1,3]))

// insertion sort 
// function insertionSort(arr) {
//     let n = arr.length 
//     for(let i = 1 ; i < n ; i++){
//         let key = arr[i];
//         j = i - 1

//         while(j >= 0 && arr[j] > key){
//             arr[j+1] = arr[j];
//             j--
//         }

//         arr[j+1] = key
//     }

//     return arr
// }


// console.log(insertionSort([3,5,1,4,65,3]))

// Quick sort 
// function quickSort(arr) {
//     if(arr.length <= 1) return arr

//     let pivot = arr[arr.length - 1];
//     let left = []
//     let right = []

//     for(let i = 0 ; i< arr.length - 1 ; i++){
//         if(arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left) , pivot , ...quickSort(right)]
// }
// console.log(quickSort([5,23,6,2,1,6,1]))

// merge sort 
// function mergeSort(arr) {
//     if(arr.length <= 1) return arr

//     let mid = Math.floor(arr.length / 2);
//     let left = arr.slice(0 , mid);
//     let right = arr.slice(mid);

//     return merge(mergeSort(left) , mergeSort(right))
// }

// function merge(left , right ) {
//     let res = [];
//     let i = 0 
//     let j = 0
//     while(i < left.length && j< right.length) {
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

// console.log(mergeSort([6,4,3,7,2,1,8]))

// binary search 
// function binarySearch(arr , target = 5) {
//     let left = 0
//     let right = arr.length - 1

//     while(left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if(arr[mid] === target) {
//             return mid
//         } else if (arr[mid] < target) {
//             left = mid + 1
//         } else {
//             right = mid - 1
//         }
//     }

//     return -1
// }

// console.log(binarySearch([1,2,3,4,5]))

// function binary(arr , target , left = 0, right = arr.length - 1) {
//     if(left > right) return -1

//     const mid = Math.floor((left + right) /2);

//     if(arr[mid] === target ) return mid;
//     else if (arr[mid] < target) return binary(arr , target , mid + 1 , right)
//     else return binary(arr , target , left , mid - 1)
// }

// console.log(binary([12,3,4,5,6,7,2] , 3 ))

// linear search
// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i; // Return the index if found
//     }
//   }
//   return -1; // Return -1 if not found
// }

