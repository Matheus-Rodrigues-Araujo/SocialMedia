var express = require('express')
var router = express.Router()
// const data = [
//     {
//       username: "Bret",
//       email: 'bret@gmail.com',
//       password: '123'
//     },
//     {
//       username: "Antonette",
//       email: 'antonette@gmail.com',
//       password: '123'
//     },
//     {
//       username: "clementine",
//       email: 'clementine@gmail.com',
//       password: '123'
//     },
//     {
//       username: "Thomas",
//       email: 'thomas@gmail.com',
//       password: '123'
//     }
//   ]

router.get('/api', (req, res)=>{
    res.send('Hello world')
})

// router.get('/users', (req, res)=>{
//     res.send({message: JSON.stringify(data)})
// })

router.get('/api/posts',(req, res)=>{
    res.send("posts")
})


module.exports = router