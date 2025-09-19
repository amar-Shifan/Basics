
function factorial(num){
    if(num === 0 || num === 1) return 1
    return num * factorial(num - 1)
}


function fibonacci(num){
    if(num == 0 ) return 0
    if(num == 1 ) return 1
    return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(5))

function sum(n) {
    if(n === 0 ) return 0
    return n + sum(n - 1)
}

console.log(sum(2))

function print(n , i = 1) {
    if(i > n) return 
    console.log(i)
    print(n , i + 1)
}

print(5)

function printDown( n ) {
    if(n === 0) return 
    console.log(n)
    printDown(n - 1)
}

printDown(5)

function arrSum(arr , i = 0){
    if(arr)
    return sum + arrSum(arr[i + 1])
}


class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    push(data) {
        const newNode = new Node(data) 
        if(!this.head) this.head = newNode
        else {
            let current = this.head
            while(current.next) {
                current = current.next
            }

            current.next = newNode
        }
    }

    reverse(){
        let prev = null
        let current = this.head

        while(current) {
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }

        this.head = prev
    }

    print(){
        let current = this.head
        let res = []
        while(current) {
            res.push(current.data)
            current = current.next
        }

        console.log(res.join(' - > '))
    }
}

console.log('llllllll')
let ll = new LinkedList()
ll.push(1)
ll.push(2)
ll.push(3)
ll.reverse()
ll.print()