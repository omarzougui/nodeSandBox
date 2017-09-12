/**
 * Created by omar on 12/09/17.
 */
const express =require("express");
const  fs = require("fs");
let app=express();

app.use(express.static(__dirname+"/public"));
app.use((req,res,next)=>{
    let now = new Date().toLocaleDateString();
    let log =`${now} ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile("server.log",log+"\n",(err)=>{
        if(err){
            console.log("unable to append to server.log");
        }
    });
    next();

});






app.get("/",(req,res)=>{
    res.send({
        name:'omar',
        age:29,
        country:"tunisia",
        adresse:{
            city:"monastir",
            zip:5000
        }
    });
});

app.get("/about",(req,res)=>{
    res.send("about page");
});

app.get("/bad",(req,res)=>{
    res.send({
        errorMessage:"unable to show web page_"
    });
});




app.listen(3000,()=>{
    console.log("server running on port 3000");
});