const express = require('express')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const dbConnect = require('./src/db/connection')
const cors = require('cors')
dbConnect()
const app = express()
app.use(cors())
require('dotenv').config()
//body parser
app.use(express.json())
const mongoose = require('mongoose')
const { Schema } = mongoose;


const userSchema = new Schema({
  Name: String,
  email: String,
  password: String,
  phoneNumber: String,
  country: String,
});
const User = mongoose.model('User', userSchema);
const port = process.env.PORT

app.post('/login',async (req, res) => {
console.log(req.body)
const user=await User.findOne({ email: req.body.email})
if(User){
  const isMatched= await bcrypt.compare(req.body.password,user.password)
  if(isMatched){
    const token = jwt.sign({ foo: 'bar' }, process,env.SECRET_KEY);
    res.json({msg:"Authorized",token})
  }else{
    res.json({msg:"invalid access"})
  }
}
})

app.post('/register',async (req, res) => {
const userExist =  await User.exists ({ email: req.body.email})
const hashPassword = await bcrypt.hash(req.body.password,saltRounds)
console.log(hashPassword)
req.body.password= hashPassword
if(userExist){
  return res.json ({msg:"Email is taken"})
}
  User.create(req.body)
  return res.json ({msg:"Welcome"})
  res.send('sent')  
})
app.post('/login',async(req,res)=>{
  console.log(req.body)

  const user  = await User.findOne({email: req.body.email})
  if(user){
  const isMatched=  await bcrypt.compare(req.body.password, user.password);
    if(isMatched){
      const token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY);
      res.json({msg: "Authorized", token})
    }else{
      res.json({msg: "Invalid Password"})
    }
  }else{
    res.json({msg: "Email not registered"})
  }
  
})
app.get('/register', async(req, res) => {
  const data = await User.find()
  res.send(data)

})
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})