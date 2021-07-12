const path = require("path")
const express = require("express");
const app = express();
const hbs = require("hbs");
port = 3000;


//built in middleware
// const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname, "../templates/views");
const particalPath= path.join(__dirname,"../templates/particals");
//to set view engine
app.set("view engine" , "hbs");
app.set("views", templatePath);
hbs.registerPartials(particalPath);
// app.use(express.static(staticPath));


//template engine route
app.get("", (req, res)=>{
    res.render('index');
});


app.get("/about", (req, res)=>{
    res.render('about');
})

app.get("/about/*", (req, res)=>{
    res.render("404error", {
        errorcomemnt : "oops 404 error, about us page not found"
    });
});



app.get("*", (req, res)=>{
    res.render("404error", {
        errorcomemnt : "oops 404 error, page not found"
    });
});


// app.get("/", (req, res)=>{
//     res.send("hello world");
// });

// app.get("/about", (req, res)=>{
//     res.send("about page");
// });

// app.get("/contact", (req, res)=>{
//     res.send("contact us page");
// });

// app.get("/services", (req, res)=>{
//     res.send("services page");
// });


app.listen(port, ()=>{
    console.log(`running on port no ${port}`);
});