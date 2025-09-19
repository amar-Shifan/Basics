class Node{
    constructor(value) {
        this.value = value ;
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    insert(value){
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root , newNode)
        }
    }

    insertNode(root , newNode){
        if(newNode.value < root.value) {
            if(root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left , newNode)
            }
        } else {
            if(root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right , newNode)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.preOrder(root.left)
            console.log(root.value);
            this.preOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.preOrder(root.left)
            this.preOrder(root.right)
            console.log(root.value);
        }
    }

    findHeight(node = this.root) {
        if(!node )return -1
        return Math.max(this.findHeight(node.left) , this.findHeight(node.right)) + 1
    }

    //BFS
    levelOrder(){
        let queue = [];
        queue.push(this.root);
        while(queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left) {
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root , value)
    }
      
    deleteNode(root , value){
        if(root === null) { 
            return root 
        }

        if(value < root.value){
            root.left = this.deleteNode(root.left , value)
        } else if (value > root.value){
            root.right = this.deleteNode(root.right , value)
        } else {
            if(!root.left && !root.right) {
                return null
            }
            if(!root.left){
                return root.right
            } else if (!root.right){
                return root.left
            }

            let minValue = this.min(root.right);
            root.value = minValue
            root.right = this.deleteNode(root.right , minValue);
        }
        return root;
    }

    min(root){
        if(!root.left) {
            return root.value
        }  else {
            return this.min(root.left)
        }
    }
}

let bst = new BST();
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(1)
bst.insert(8)
bst.insert(10)
console.log('pre')
bst.preOrder(bst.root)
// console.log('in')
// bst.inOrder(bst.root)
// console.log('post')
// bst.postOrder(bst.root)
// console.log('height' , bst.findHeight())
bst.delete(8)
console.log('bfs');
// bst.preOrder(bst.root)
bst.levelOrder()
      