const express = require('express')
const app = express()
require("dotenv").config({path: "./env/config.env"})
const port = process.env.port || 4000
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(require("./routes/apiRoutes"))
const dbo = require("./db/conn")

app.listen(port, ()=>{
    dbo.connectToServer((err)=>{
        if (err) console.error(err);
    })

    console.log(`Server is running on port ${port}`)
})