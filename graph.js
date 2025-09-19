class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        this.adjacencyList[vertex] = new Set()
    }

    addEdge(vertex1 , vertex2){
        if(!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1 , vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return null
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex , adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    dfs(start , visited = new Set()){
        if(!this.adjacencyList[start]) return null
        console.log(start);
        visited.add(start)

        for(let neigh of this.adjacencyList[start]){
            if(!visited.has(neigh)){
                this.dfs(neigh , visited)
            }
        }
    }

    bfs(start){
        let que = [start]
        let visited = new Set();
        visited.add(start)
        
        while(que.length){
            let vertex = que.shift()
            console.log(vertex);

            for(let neigh of this.adjacencyList[vertex]){
                if(!visited.has(neigh)) {
                    visited.add(neigh)
                    que.push(neigh)
                }
            }
        }
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + '--' + [...this.adjacencyList[vertex]])
        }
    }

}

let graph = new Graph()
graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')
graph.addVertex('d')
graph.addEdge('a' , 'b');
graph.addEdge('a' , 'c');
graph.addEdge('b' , 'd');
// graph.removeEdge('d' , 'c')
// graph.removeVertex('d')
graph.dfs('a')
graph.display()
graph.bfs('a')