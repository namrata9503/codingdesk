const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/codingdesk')
mongoose.connection.on('error', (error) => console.error(error))
mongoose.connection.on('open', () => console.log('successfully connected with mongodb..'))

const app = express()

const spaceController = require('./controllers/space')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.send("Hello World........");
})
app.get('/api/v1/spaces', spaceController.getSpaces);
app.get('/api/v1/spaces/:id', spaceController.getSpaceById);
app.post('/api/v1/spaces/new', spaceController.postNewSpace);
app.put('/api/v1/spaces/:id',spaceController.editSpace);
app.delete('/api/v1/spaces/:id', spaceController.deleteSpace)


app.listen(3000, () => console.log('Express server at 3000'))
