const express = require('express')
var router = express.Router()

router.get('/post', (req, res)=>{
    res.send({message: 'hi'})
})

module.exports = router