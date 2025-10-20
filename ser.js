let express = require('express');
let app = express();
let route = require('./routes')

app.use('/num/api' , route);

app.listen(3000 , () => {
    console.log('server is running ')
})