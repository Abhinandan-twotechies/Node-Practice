const http = require('http');

const server = http.createServer((req, res)=>{
    // res.end("Hello world");
    if(req.url === "/dataUser"){
        res.end("No data found")
    }
    res.end("Hi")
})

server.listen(8000,()=>{
    console.log("Server started");
});

// console.log('Hello world')