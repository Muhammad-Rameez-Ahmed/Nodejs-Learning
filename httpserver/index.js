const http = require("http");



const server=http.createServer((req,res)=>{
//   console.log(  req.url);

if(req.url =='/'){
    res.end('hello from the home page');
}else if(req.url == '/about'){
    res.end("hello  from about page")
}else if(req.url == '/contact'){
    
    res.end("hello from contact page")
}else{
    res.writeHead(404,{"content-type":"text/html" })
    res.end("404 error page ")
}
})

server.listen(9000,"127.0.0.1",()=>{
    console.log("listening to port number 9000")
})
 