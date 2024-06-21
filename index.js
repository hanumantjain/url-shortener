const express = require('express')
const urlRoute = require('./routes/url')
const { connectMongoDB } = require('./connections/connect')
const URL = require('./models/url')

const app = express()
const PORT = 8001

connectMongoDB('mongodb://127.0.0.1:27017/short-url')
    .then( ()=> console.log('MongoDB connected'))

app.set('view engine', 'ejs')

app.use(express.json())

app.use('/url', urlRoute)

app.listen(PORT, ()=> console.log(`Server started at port : ${PORT}`))