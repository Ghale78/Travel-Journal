const express = require('express')
const dbConnect = require('./src/db/connection')
dbConnect()
const app = express()
require('dotenv').config()
const mongoose = require ('mongoose')
const{ Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  address: String,
});
const User = mongoose.model('User', userSchema);
const port = process.env.PORT

app.post('/K', (req, res) => {
  User.create({name:"kapil",address:"ktm"})
})
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})