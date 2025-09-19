const http = require('http')

const server = http.createServer((req , res) =>{
    res.end('This is the server')
})

server.listen(3000 , () => {
    console.log('server is running')
})