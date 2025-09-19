class Hashtable {
    constructor(){
        this.table = new Array(100)
    }

    _hash(key){
        let hash = 0 
        for(let i = 0 ; i<key.length ; i++){
            hash += key.charCodeAt(i)
        }
        return hash % this.table.length
    }

    set(key , value){
        let index = this._hash(key);
        if(!this.table[index]){
            this.table[index] = []
        }

        this.table[index].push([key , value])
    }

    get(key){
        let index = this._hash(key);
        if(this.table[index]){
            for(let pair of this.table[index]){
                if(pair[0] === key){
                    return pair[1]
                }
            }
        }
        return undefined
    }

    delete(key){
        let index = this._hash(key)
        if(this.table[index]){
            this.table[index ] = this.table[index].filter(pair => pair[0] != key);
        }
    }

    display(){
        for(let i = 0 ; i<this.table.length ; i++){
            if(this.table[i]){
                console.log(i , this.table[i])
            }
        }
    }
}

let hashtable = new Hashtable()
hashtable.set('one' , 'amar')
hashtable.set('one' , 'fayis')
hashtable.set('two' , 'saju')
hashtable.set('three' , 'irfan');
hashtable.delete('three')
hashtable.display()
