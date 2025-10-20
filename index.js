// factory function 
function factory(name , age){
    return {
        name , 
        age ,
        greet(){
          console.log(this.name , this.age)  
        }
    }
}
const fac = factory('amar' , 20);
fac.greet()

// constructor function 
function constru(name , age){
    this.name = name,
    this.age = age,
    this.greet = function (){
        console.log(`His name is ${this.name}`)
    }
}
const con = new constru('amar' , 20)
con.greet()

// closure 
function outer (){
    let count = 0 
    return {
        increment:() => ++count,
        decrement:() => --count , 
        out: function(){console.log('ysss')}
    } 
}

const out = outer()
console.log(out.increment())
out.out()



// currying 
function add(a) {
    return function(b) {
        return function(c){
            return a + b + c
        }
    }
}

console.log(add(1)(2)(3));

// IIFE 
(function(){
    console.log('iife')
})()

// callback 
function fetch(callback){
    setTimeout(() => {
        callback('Data recieved')
    },1000)
}

fetch((data) => {
    console.log(data)
})
