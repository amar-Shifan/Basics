// closure
function outer(){
    let count = 0 
    return function inner(){
        count++
        console.log(count)
    }
}
let count = outer()
count()
count()

/// callback 
function greet(name , callback){
    console.log('name is : ' , name)
    callback()
}
function after(){
    console.log('how are you')
}
greet('amar' , after)

// generator function 
function* generator(){
    for(let i = 0  ;i < 5 ; i++){
        yield i
    }
}
let gen = generator()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

// factory function 
function user (name){
    return {
        name , 
        sayHi(){
            console.log('hi' + name)
        }
    }
}
const users = user('amar')
users.sayHi()

// constructor function
function User(name) {
    this.name = name
    this.greet = function(){
        console.log('Hi ' , name)
    }
}
let use = new User('amar')
use.greet();

// iife
(function(){
    console.log('iife')
})();

(() => {
    console.log('arrow iife ')
})();

// currying 

// function cAdd(a){
//     return function(b){
//         return a + b
//     }
// }
const cAdd = (a) => (b) => a+b
let add = cAdd(5);
console.log(add(2))
console.log(add(3))
console.log(cAdd(5)(4))

// function composition 
const minus = (x) => x-1
const multiply = (x) => x * 2
const combine = (x) => multiply(minus(x));
console.log(combine(5))

// call apply bind
function greet(age){
    console.log(`${this.name} age is ${age}`)
}
let userThis = {name:'Amar'};
greet.call(userThis , 20)
greet.apply(userThis , [50])
let bind = greet.bind(user , 30)
bind()

let arrr = [1,1,[1,1],1,[1,[1]]];
function suma(arr  , sum = 0){

    for(let val of arr){
        if(Array.isArray(val)){
            sum += suma(val)
        } else {
           sum+=val
        }
    } 
    return sum
}
console.log("sum is " + suma(arrr))

function factorial(n){
    if(n == 0) return 1
    return n * factorial(n-1)
}
console.log(factorial(3))

function sumofN(n){
    if(n === 1) return 1
    return n + sumofN(n - 1)
}
console.log(sumofN(3))

function reverse(str){
    if(str.length === 0) return ''
    return reverse(str.slice(1)) + str[0] 
}
console.log(reverse('amar'))

function isPalindrome(str){
    if(str.length <= 1) return true 
    if(str[0] !== str[str.length - 1]){
        return false 
    }
    return isPalindrome(str.slice(1, -1))
}

console.log(isPalindrome('amar'))
console.log(isPalindrome('malayalam'))

function sum(arr){
    if(arr.length == 0) return 0
    return arr[0] + sum(arr.slice(1))
}
console.log(sum([1,2,3,4]))

function removeDup(arr){
    let freq = {}
    for(let i = 0 ; i<arr.length ;i++){
        if(!freq[arr[i]]) {
            freq[arr[i]] = 1
        } else {
            for(let j = i ; j<arr.length ; j++){
                arr[j] = arr[j+1]
             }
             i--
             arr.length--
        }
    }
    return arr
}
console.log(removeDup([1,1,3,4,2,1,3]))

function unique(arr){
    let freq = {}
    for(let i = 0 ; i<arr.length ; i++){
        freq[arr[i]] = (freq[arr[i]] || 0) + 1
    }
    for(let j = 0 ; j<arr.length ; j++){
        if(freq[arr[j]] > 1){
            for(let k = j ; k < arr.length ; k++){
                arr[k] = arr[k+1]
            }
            j--
            arr.length--
        }
    }
    return arr
}
console.log(unique([1,2,2,4,4,6,7,7]))