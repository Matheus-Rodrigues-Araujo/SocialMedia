const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const PORT = process.env.PORT || 4000

const index = require('./routes/index')
const users = require('./routes/users')
const post = require('./routes/post')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors())


app.use('/', index)
app.use('/users', users)
app.use("/post", post)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})