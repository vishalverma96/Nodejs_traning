const path = require("path");

console.log(path.dirname('C:/Users/Verma/Desktop/Nodejs_training/PathModule/path.js'));
console.log(path.extname('C:/Users/Verma/Desktop/Nodejs_training/PathModule/path.js'));
console.log(path.basename('C:/Users/Verma/Desktop/Nodejs_training/PathModule/path.js'));


console. log(path.parse('C:/Users/Verma/Desktop/Nodejs_training/PathModule/path.js'));


const myPath = path.parse('C:/Users/Verma/Desktop/Nodejs_training/PathModule/path.js');
console.log(myPath.root);
console.log(myPath.name);