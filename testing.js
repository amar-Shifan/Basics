function isPrime(num){
    if(num < 2) return false

    for(let i = 2 ; i < Math.sqrt(num) ; i++){
        if(num%i === 0) return false
    }

    return true
}

function fizzbuzz(){
    let res = [];
    for(let i = 1 ; i < 100 ; i++){
        if(i%3 === 0 || i%5 === 0){
            res.push(i)
            if(isPrime(i)){
                let next = i + 1
                while(!isPrime(next)){
                    next++
                }
                res.push(next)
            }
        }
    }

    return res
}
console.log(fizzbuzz())

let str = 'amar is awesome'
let rev = ''
let word = ''

for(let i = 0 ; i<str.length ; i++){
    if(str[i] !== ' '  && i !== str.length-1){
        word+=str[i]        
    } else {
        while(word){
            rev += word.slice(-1);
            word = word.slice(0 , -1)
        }
        rev += ' '
    }
}

console.log(rev)