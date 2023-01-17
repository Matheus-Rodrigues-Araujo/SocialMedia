const express = require('express')
var router = express.Router()
const data = [
  {
    username: "Bret",
    email: 'bret@gmail.com',
    password: '123'
  },
  {
    username: "Antonette",
    email: 'antonette@gmail.com',
    password: '123'
  },
  {
    username: "clementine",
    email: 'clementine@gmail.com',
    password: '123'
  },
  {
    username: "Thomas",
    email: 'thomas@gmail.com',
    password: '123'
  }
]

router.get('/', (req, res)=>{
    res.send(JSON.stringify(data))
})

module.exports = router