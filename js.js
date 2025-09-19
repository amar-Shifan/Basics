

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

