const mongoose = require('mongoose');

const dbConnect = async()=>{
    try{
        const connection= await mongoose.connect('mongodb://127.0.0.1:27017/Travel-Tournal');
        if(connection) console.log("Connected to mongoDB")
    }catch(err){
        console.log(err)
    }
}
module.exports = dbConnect