const fs = require("fs");


// fs.writeFile("read.txt","my async file module", (err)=>{
//     console.log("file created");
// });


// fs.appendFile("read.txt", "  now i'm appending the data", (err)=>{
//     console.log("task completed");
// });


// fs.readFile("read.txt", "utf-8", (err, data)=>{
//     console.log("file reading");
//     console.log(data);
// });


//creating a folder named it vishu2
// fs.mkdir("vishu", (err)=>{
//     console.log("folder created");
// });



//create a file in it named bio.txt and data into it.
// fs.writeFile("./vishu/bio.txt", "this is my bio file",(err)=>{
//     console.log("file created");
// });


//add  data into the file at the end of the existing data.
// fs.appendFile("./vishu/bio.txt","  now appending the data", (err)=>{
//     console.log("append the data");
// });


//read the data without getting the buffer data at first.
// fs.readFile("./vishu/bio.txt","utf-8",(err, data)=>{
//     console.log("file reading");
//     console.log(data);
// });


//rename the file name to myBio.txt
// fs.rename("./vishu/bio.txt", "./vishu/myBio.txt",(err)=>{
//     console.log("rename the file");
//     console.log(err);
// });

//nw delete both the file and the folder.
// fs.unlink("./vishu/myBio.txt",(err)=>{
//     console.log("file deleted");
// });


// fs.rmdir("./vishu", (err)=>{
//     console.log("folder deleted");
// });