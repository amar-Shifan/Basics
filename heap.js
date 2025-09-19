class MinHeap {
  constructor() {
    this.heap = []
  }

  getParent(index) {
    return Math.floor((index - 1) / 2)
  }

  getLeft(index) {
    return 2 * index + 1
  }

  getRight(index) {
    return 2 * index + 2
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  insert(val) {
    this.heap.push(val)
    this.heapifyUp()
  }

  heapifyUp() {
    let index = this.heap.length - 1
    while (index > 0) {
      let parentIndex = this.getParent(index)
      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex, index)
        index = parentIndex
      } else {
        break
      }
    }
  }

  remove() {
    if (this.heap.length == 0) return null
    if (this.heap.length == 1) return this.heap.pop()

    let min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifyDown() // ✅ fixed spelling
    return min
  }

  heapifyDown() {
    let index = 0
    while (this.getLeft(index) < this.heap.length) {
      let smallest = this.getLeft(index)
      let right = this.getRight(index)

      if (right < this.heap.length && this.heap[smallest] > this.heap[right]) {
        smallest = right
      }

      if (this.heap[index] > this.heap[smallest]) {
        this.swap(index, smallest)
        index = smallest
      } else {
        break
      }
    }
  }

  print() {
    console.log(this.heap)
  }
}

let mh = new MinHeap()
mh.insert(1)
mh.insert(2)
mh.insert(4)
mh.insert(6)
mh.remove()
mh.print() 

class MaxHeap{
    constructor(){
        this.heap = []
    }
    
    getParent(i) {
        return Math.floor((i - 1) / 2)
    }

    getLeft(i){
        return 2*i + 1 
    }

    getRight(i){
        2*i + 2
    }

    swap(i, j){
        [this.heap[i] , this.heap[j]] = [this.heap[j] , this.heap[i]]
    }

    insert(val){
        this.heap.push(val)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length -1 
        while(index > 0){
            let parent = this.getParent(index);
            if(this.heap[parent] < this.heap[index]){
                this.swap(index , parent);
                index = parent
            }else break
        }
    }

    remove(){
        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown()
    }

    heapifyDown(){
        let index = 0 
        while(this.getLeft(index) < this.heap.length){
            let max = this.getLeft(index)
            let right = this.getRight(index);
            if(this.heap[right] > this.heap[max]){
                max = right
            }

            if(this.heap[index] < this.heap[max]){
                this.swap(index , max)
                index = max 
            } else break
        }
    }

    print(){
        console.log(this.heap)
    }


}

let mxh = new MaxHeap()
mxh.insert(1)
mxh.insert(2)
mxh.insert(32)
mxh.insert(35)
mxh.print()
mxh.remove()
mxh.print()