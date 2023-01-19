const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const PORT = process.env.PORT || 4000
require("dotenv").config({path: "./config.env"})

app.use(cors({
    origin: "http://localhost:3000/",
    methods: ["GET", "POST", "PUT", "DELETE"]
}))


const recordRoutes = require('./routes/record')
app.use(recordRoutes)

const dbo = require("./db/conn")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.static(__dirname + '/public'))

app.listen(PORT, ()=>{
    dbo.connectToServer((err)=>{
        if (err) console.error(err);
    })

    console.log(`Server is running on port ${PORT}`)
})