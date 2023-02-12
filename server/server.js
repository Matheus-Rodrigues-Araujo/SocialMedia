const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require("dotenv").config({path: ".env"})
const cors = require('cors')
const port = process.env.port || 4000

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



app.use(require("./routes/apiRoutes"))

const dbo = require("./db/conn")

app.listen(port, ()=>{
    dbo.connectToServer((err)=>{
        if (err) console.error(err);
    })

    console.log(`Server is running on port ${port}`)
})