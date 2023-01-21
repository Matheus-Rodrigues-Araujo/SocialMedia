const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
require("dotenv").config({path: "./config.env"})
const cors = require('cors')
app.use(cors())

const apiRoutes = require("./routes/apiRoutes")
express.use(apiRoutes)
const dbo = require("./db/conn")

app.listen(PORT, ()=>{
    dbo.connectToServer((err)=>{
        if (err) console.error(err);
    })

    console.log(`Server is running on port ${PORT}`)
})