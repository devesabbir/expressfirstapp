const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const path = require('path')
const port = process.env.SERVER_PORT || 5000


app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/api/students', require(path.join(__dirname, './route/students')))

app.listen(port , (error) => error ? console.log(error):console.log(`Our Server Is Running on Port ${port}`))
    

 

 
 