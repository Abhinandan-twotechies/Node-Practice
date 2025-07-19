const http = require('http');

const server = http.createServer((req, res)=>{
    // res.end("Hello world");
    if(req.url === "/dataUser"){
        res.end("No data found")
    }
    res.end("H")
})

server.listen(7777,()=>{
    console.log("Server started");
});

// console.log('Hello world')