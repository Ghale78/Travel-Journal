const express = require('express')
const app = express()
const port = 4000

app.get('/K', (req, res) => {
  res.send({
    name:"Kapil",
    balance:1000,
    address:"kalopol",
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})