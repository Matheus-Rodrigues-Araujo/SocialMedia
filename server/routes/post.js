const express = require('express')
var router = express.Router()

router.get('/post', (req, res)=>{
    res.render('hi')
})

module.exports = router