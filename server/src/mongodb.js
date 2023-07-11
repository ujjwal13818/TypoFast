const mongoose = require('mongoose');
const connectDB = (url) =>{
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }) 
}

mongoose.set('strictQuery', false);  //important


//creating schema

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("Collection1",LogInSchema)
module.exports = {connectDB , collection}

