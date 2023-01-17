const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const PORT = process.env.PORT || 4000

const routes = require('./routes/routes')
app.use(routes)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors())

app.get('/', (req, res)=>{
    res.send({message: 'we did it!'})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})