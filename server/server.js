const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 4000
const cors = require('cors')
app.use(cors())
require("dotenv").config({path: "./config.env"})

const apiRoutes = require('./routes/apiRoutes')
app.use(apiRoutes)

const dbo = require("./db/conn")

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(cookieParser())

app.listen(PORT, ()=>{
    dbo.connectToServer((err)=>{
        if (err) console.error(err);
    })

    console.log(`Server is running on port ${PORT}`)
})