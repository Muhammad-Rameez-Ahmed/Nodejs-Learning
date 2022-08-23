const http = require("http");



const server=http.createServer((req,res)=>{
    res.end('hello from other side');
})

server.listen(9000,"127.0.0.1",()=>{
    console.log("listening tje port number 9000")
})
 