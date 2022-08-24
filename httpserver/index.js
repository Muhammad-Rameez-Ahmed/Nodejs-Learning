const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {
    //   console.log(  req.url);

    if (req.url == '/') {
        res.end('hello from the home page');
    } else if (req.url == '/about') {
        res.end("hello  from about page")
    } else if (req.url == '/contact') {
        res.end("hello from contact page")
    } else if (req.url == '/api') {
        fs.readFile('E:/Nodejs Learning/httpserver/userAPI/userapi.json', "utf-8", (err, data) => {
            console.log(data)
            const objData = JSON.parse(data);
            res.end(objData[0].email)
        })
       
    } else if (req.url == '/photoapi') {
        fs.readFile("E:/Nodejs Learning/httpserver/userAPI/photoapi.json","utf-8",(err,data)=>{
                 console.log(data)
                 res.end(data)
        })
        
    }
    else {
        res.writeHead(404, { "content-type": "text/html" })
        res.end("404 error page ")
    }
})

server.listen(9000, "127.0.0.1", () => {
    console.log("listening to port number 9000")
})
