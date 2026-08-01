// closure
function counter(){
    let count = 0
    return function(){
        count += 1
        return count
    }
}

let count = counter();
console.log(count())
console.log(count())
console.log(count())

// callback
function callback(){
    console.log('Yes its callback')
}

function greet(name , callback){
    console.log('Happy '+name );
    callback()
}

greet('amar' , callback)

function sample(){
    return new Promise((res , rej) => {
        setTimeout(() => {
            res('Yes its resolved')
        }, 1000);
    })
}
let promise = sample();
promise.then((data) => {
    console.log(data)
})

let func = async() => {
    console.log('its async')
    let task1 = await sample();
    console.log(task1)
    console.log('its await')
}
func()

let arr = [1,2,3,4,5];
let double = arr.map((num) => num*2);
console.log(double)
let even = arr.filter((num) => num%2==0);
console.log(even);
let sum = arr.reduce((acc , num) => acc + num )

let arr = [1,2,3,4,5];
let double = arr.map((num) => num*2);
console.log(double)
let even = arr.filter((num) => num%2==0);
console.log(even);
let sum = arr.reduce((acc , num) => acc + num )