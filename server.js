const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/codingdesk')
mongoose.connection.on('error', (error) => console.error(error))
mongoose.connection.on('open',()=>console.log('successfully connected with mongodb..'))
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/',(request,response)=>{
    response.send("Hello World........");
})


app.listen(3000, () => console.log('Express server at 3000'))
