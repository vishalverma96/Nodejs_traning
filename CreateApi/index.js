
const fs = require('fs');
const http = require('http');
const url = require('url');


const server = http.createServer((req, res)=>{

    const data= fs.readFileSync("userapi.json", "utf-8");
    const objData = JSON.parse(data);




    if(req.url == "/"){
        res.end("Hello from server");
    }else if(req.url == "/contact"){
        res.end("Hello from server/contact");
    }else if(req.url == "/about"){
        res.end("Hello from server/about");
    }else if(req.url == "/userapi"){
        // fs.readFile("userapi.json", "utf-8", (err, data)=>{
        //     console.log(data);
        //     const objData = JSON.parse(data);
        
            // res.end(data);
           
            
        // });
        res.writeHead(200, {"content-type":"application/json"});
        res.end(objData[0].name)
        console.log(data);
            
    }else{
        res.writeHead(404, {"Content-type": "text/html"});
        res.end("<h1>Page not found</h1>");
    }
});

server.listen(8000, ()=>{
    console.log("Server is listening to port 8000");
});