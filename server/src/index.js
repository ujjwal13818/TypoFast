const express = require("express");
require("mongoose");
require('dotenv').config();
const app = express();
const path = require("path");
const hbs = require("hbs");
const templatePath = path.join(__dirname,'../templates')
const mymongo = require("./mongodb");
const connectDB = mymongo.connectDB
const collection = mymongo.collection
app.use(express.static('public')); 
app.use(express.json());
app.set("view engine" , "hbs");
app.set("views" , templatePath);
app.use(express.urlencoded({extended:false}))
app.get("/" , (req , res)=>{
    res.render("home",{
        style:'home.css' 
    })
})
app.get("/login" , (req , res)=>{
    res.render("login", {
        style : 'login.css'
    })
})
app.get("/keyboard" , (req , res)=>{
    res.render("keyboard", {
        style: 'keyboard.css',
        script: 'practice.js'
    })
})
app.get("/features" , (req ,res) => {
    res.render("features" , {
        style:'features.css',
        script: 'features.js'
    })
})
app.get("/signup" , (req , res)=>{
    res.render("signup",{
        style:'signup.css'
    })
})

app.post("/signup" , async(req , res) =>{
    const data = {
        name:req.body.name,
        password:req.body.password
    }
    await collection.insertMany([data]);
    res.redirect("login");
})
app.post("/login" , async(req , res) =>{
    
    try {
       let{name , password} = req.body;
       name = name.trim();
       password = password.trim();
       collection.find({name}).then(data => {
        if(data){
            const existing = data[0].password
            if(existing === password){
                res.redirect("features");
            }
        }
        else{
            res.send("wrong password");
        }
       })
    } catch (error) {
                console.log(error)
    }
})
const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(2500,() => {
            console.log("mongoose connected");
        });
    } catch (err) {
        console.log(err);
    }
}
start();