class stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.items.length == 0){
            return null
        }
        return this.items.pop()
    }

    display(){
        console.log(this.items.join('->'))
    }
}

let sta = new stack()
sta.push(1)
sta.push(12)
sta.push(13)
sta.display()
sta.pop()
sta.display()

class quetostack {
    constructor() {
        this.qu1 = [];
        this.qu2 = [];
    }

    push(element) {
        this.qu1.push(element);
    }

    pop() {
        if (this.qu1.length === 0) {
            return null;
        }

        while (this.qu1.length > 1) {
            this.qu2.push(this.qu1.shift());
        }

        let popelement = this.qu1.shift();

        [this.qu1, this.qu2] = [this.qu2, this.qu1];

        return popelement;
    }
}

let qs = new quetostack();
qs.push(1);
qs.push(2);
qs.push(3);

console.log(qs.pop()); 
console.log(qs.pop()); 