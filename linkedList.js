class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    push(data) {
        let newNode = new Node(data)
        if(!this.head) {
            this.head = newNode
        } else {
            let current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = newNode
        }
    }

    print(){
        let current = this.head
        let res = []

        while(current){
            res.push(current.data)
            current = current.next
        }

        console.log(res.join(' -> '))
    }

    unshift(data){
        let newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }

    delete(value){
        if(!this.head) return

        if(this.head.data === value) {
            this.head = this.head.next
            return
        }

        let current = this.head
        while(current.next && current.next.data !== value){
            current = current.next
        }
        if(current.next) {
            current.next = current.next.next
        }
    }

    reverse(){
        let prev = null
        let current = this.head

        while(current ){
            let next = current.next
            current.next = prev
            prev = current 
            current = next
        }

        this.head = prev
    }

    findMiddle(){
        let slow = this.head
        let fast = this.head

        while(fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }

        return slow.data || null
    }

    hasCycle() {
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) return true;
        }
        return false;
    }

    removeDup(){
        let current = this.head

        while(current && current.next) {
            if(current.data === current.next.data){
                current.next = current.next.next
            } else {
                current = current.next
            }
        }
    }
}

let ll = new LinkedList()
ll.push(1)
ll.push(3)
ll.push(3)
ll.push(4)
ll.push(12)
ll.delete(1)
ll.reverse()
ll.removeDup()
ll.print()
console.log(ll.findMiddle())
console.log(ll.hasCycle())

