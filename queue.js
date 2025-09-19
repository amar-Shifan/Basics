class queue {
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    deqeueue(){
        if(this.items.length === 0) {
            return null
        }
        return this.items.shift()
    }

    display(){
        console.log(this.items.join('<-'))
    }
}
let q = new queue()
q.enqueue(1)
q.enqueue(1)
q.enqueue(3)
q.enqueue(4)
q.display()
q.deqeueue()
q.display()

// <------------- que using a stack ---------------->
class queusingStack{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(element){
        this.stack1.push(element)
    }

    deqeueue(){
        if(this.stack2.length === 0){
            while(this.stack1.length){
                this.stack2.push(this.stack1.pop())
            }
        }
        if(this.stack2.length === 0){
            console.log('empty')
        }

        return this.stack2.pop()
    }
}

let qu = new queusingStack()
qu.enqueue(1)
qu.enqueue(2)
qu.enqueue(3)
console.log(qu.deqeueue())