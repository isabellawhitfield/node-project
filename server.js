const http = require('http');

const server = http.createServer((req, res)=>{
    res.write("Hi");
    res.end();

});

server.listen(3000);