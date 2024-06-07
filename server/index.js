const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const express = require('express')
const dbConnect = require('./src/db/connection')
const cors = require('cors')
dbConnect()
const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()
const mongoose = require ('mongoose')
const{ Schema } = mongoose;


const userSchema = new Schema({
  fullName: String,
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
  // User.create({name:"kapil",address:"ktm"})
  // console.log(req.body.phoneNumber)
  // console.log(req.body.email)
const userExist =  await User.exists ({ email: req.body.email})
const hashPassword = await bcrypt.hash(req.body.password,saltRounds)
console.log(hashPassword)
req.body.password= hashPassword
if(userExist){
  return res.json ({msg:"Email is taken"})
}
  User.create(req.body)
  return res.json ({msg:"user register"})
  res.send('sent')  
})
app.get('/register', async(req, res) => {
  const data = await User.find()
  res.send(data)

})
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})