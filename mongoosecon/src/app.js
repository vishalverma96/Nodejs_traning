const mongoose = require("mongoose");


//connection creation and creation a new db 
mongoose.connect("mongodb://localhost:27017/vishu",{ useNewUrlParser: true , useUnifiedTopology: true })
.then(()=> console.log("connection is succesfull...."))
.catch((err)=> console.log(err));