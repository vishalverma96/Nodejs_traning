const fs = require("fs");
const bioData = 
{
    name : "vishal",
    age : 26,
    id : "vishal.verma@infostride.com"
};

//obj to json
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// //json to obj
// const objData = JSON.parse(jsonData);
// console.log(objData);

//convert to json and create a file db.json file using fs
const jsonData = JSON.stringify(bioData);
// // fs.writeFile("db.json", jsonData, (err)=>{
// //     console.log("done");
// });


fs.readFile("db.json","utf-8",(err, data)=>{
    // console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
});