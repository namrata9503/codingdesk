const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/',(request,response)=>{
    response.send("Hello World");
})


app.listen(3000, () => console.log('Express server at 3000'))
