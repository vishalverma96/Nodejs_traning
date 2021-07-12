const fs = require('fs');


//Creating a folder name vishu
// fs.mkdirSync("vishu");


//create a file or write content in a file.
// fs.writeFileSync('vishu/bio.txt', "my name is vishu verma");


//append content in a file
// fs.appendFileSync('vishu/bio.txt', "  and im from panipat");


//read data without getting the buffer data at first
// const data = fs.readFileSync("vishu/bio.txt", "utf-8");
// console.log(data);


//Rename the file name to mybio.txt
// fs.renameSync("vishu/bio.txt", "vishu/mybio.txt");

//now delete both the file and the folder
// fs.unlinkSync("vishu/mybio.txt");


//delete complete folder with file
// fs.rmdirSync("vishu");