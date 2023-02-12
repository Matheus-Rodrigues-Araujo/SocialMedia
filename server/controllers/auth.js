const express = require('express')
const bcrypt = require('bcrypt') 
const jwt = require('jsonwebtoken')
const authController = express.Router()

const ObjectId = require('mongodb').ObjectId

// Login
authController.route('/api/login').post((req, res)=>{
   try {
    
   } catch (error) {
    
   }
})

// const db_connect = dbo.getDb('social_media')
//     db_connect
//     .collection('users')
//     .find({
//         email: req.body.email,
//         password: req.body.password
//     })
//     .toArray((err, result)=>{
//         if(err) throw new Error("Couldn't connect")
//         const userInfo = result[0]
//         console.log(userInfo)
//         res.json(userInfo)
//     })