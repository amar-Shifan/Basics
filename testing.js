// function isPrime(num){
//     if(num < 2) return false

//     for(let i = 2 ; i < Math.sqrt(num) ; i++){
//         if(num%i === 0) return false
//     }

//     return true
// }

// function fizzbuzz(){
//     let res = [];
//     for(let i = 1 ; i < 100 ; i++){
//         if(i%3 === 0 || i%5 === 0){
//             res.push(i)
//             if(isPrime(i)){
//                 let next = i + 1
//                 while(!isPrime(next)){
//                     next++
//                 }
//                 res.push(next)
//             }
//         }
//     }
//     return res
// }
// console.log(fizzbuzz())

// let str = 'amar is awesome'
// let rev = ''
// let word = ''

// for(let i = 0 ; i<str.length ; i++){
//     if(str[i] !== ' '  && i !== str.length-1){
//         word+=str[i]        
//     } else {
//         while(word){
//             rev += word.slice(-1);
//             word = word.slice(0 , -1)
//         }
//         rev += ' '
//     }
// }

// console.log(rev)

// // custom map
// function myMap(arr , callback){
//     let res = []
//     for(let i = 0 ; i<arr.length ; i++){
//         res.push(callback(arr[i]))
//     }
//     return res 
// } 

// const nums = [1,2,3,4,5];
// console.log(myMap(nums , n => n*2))

// Array.prototype.myMap = function(callback) {
//     let arr = this
//     let res = []
//     for(let i = 0 ; i<arr.length ; i++){
//         res.push(callback(arr[i]))
//     }
//     return res 
// }

// console.log(nums.myMap(n=> n*3))

// function getName(name, callback){
//     console.log(name)
//     callback(12)
// }
// function gage(age,callback){
//     console.log(age)
//     callback('munnar')
// }


// getName('amar' , (age)=>{
//     gage(age , (place) =>{
//         console.log(place)
//     })
// })

// function* genetor(){
//     let i = 1
//     while(true){
        
//         yield i
        
//         i+=2
//     }
// }
// let gen = genetor()

// function print(){
//     console.log(gen.next().value);
//     setTimeout(() => {
//         print()
//     }, 1000);
// }
// print()

// let obj = {
//     name : 'amar',
//     age : 20,
// }
// let ref = structuredClone(obj);
// ref.age = 10
// console.log(obj.age)         



// function printFibonacci(n) {
//   function fib(num) {
//     if (num < 2) return num;
//     return fib(num - 1) + fib(num - 2);
//   }

//   for (let i = 0; i < n; i++) {
//     console.log(fib(i));
//   }
// }

// console.log('fibonacci series')
// printFibonacci(7)
// console.log('fibonacci series')

// // sum of fibonacci
// function fibonacci(n){
//     if(n<2) return n
//     return fibonacci(n-1) + fibonacci(n-2)
// }
// function findSum(n){
//     if(n===0) return 0
//     return fibonacci(n) + findSum(n-1);
// }

// console.log('sum ->'+findSum(6));

