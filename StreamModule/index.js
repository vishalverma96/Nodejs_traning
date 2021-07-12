const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on('request', (req, res)=>{

//1st way     
// fs.readFile("input.txt", (err, data)=>{
//         if(err) return console.error(err);
//         res.end(data.toString());
//     });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2nd way 
//Reading from a stream 
//Create a readable stream
//handle stream event --> data, end and error

// const rstream = fs.createReadStream("input.txt");

// rstream.on("data", (chunkdata)=>{
//     res.write(chunkdata);
// });

// rstream.on("end", ()=>{
//     res.end();
// });

// rstream.on("error",(err)=>{
//     console.log(err);
//     res.end("file not found")
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////
//3rd way using stream pipe()
const rstream = fs.createReadStream("input.txt");
rstream.pipe(res);


});
server.listen(8000, "127.0.0.1");