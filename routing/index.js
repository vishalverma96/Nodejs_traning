
const http = require('http');
const url = require('url');


const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.end("Hello from server");
    }else if(req.url == "/contact"){
        res.end("Hello from server/contact");
    }else if(req.url == "/about"){
        res.end("Hello from server/about");
    }else{
        res.writeHead(404, {"Content-type": "text/html"});
        res.end("<h1> error 404, Page not found</h1>");
    }
});

server.listen(8000, ()=>{
    console.log("Server is listening to port 8000");
});