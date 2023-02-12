const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.port || 4000
const dotenv = require('dotenv')
dotenv.config({path: '.env'})


const authController = require('./controllers/auth')
const commentController = require('./controllers/comment')
const postController = require('./controllers/post')
const userController = require('./controllers/user')

mongoose.connect(process.env.ATLAS_URI, ()=> console.log('>>> DB is connected successfully!'))
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/auth', authController)
app.use('/comment', commentController)
app.use('/post', postController)
app.use('/user', userController)


app.listen(port, ()=>{
    dbo.connectToServer((err)=>{
        if (err) console.error(err);
    })

    console.log(`Server is running on port ${port}`)
})