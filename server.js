const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/codingdesk')
mongoose.connection.on('error', (error) => console.error(error))
mongoose.connection.on('open', () => console.log('successfully connected with mongodb..'))

const app = express()

const spaceController = require('./controllers/space')
const userController = require('./controllers/user')
const reviewController = require('./controllers/review')
const blogController = require('./controllers/blog')
const pageController = require('./controllers/page')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.send("Hello World........");
})

app.get('/api/v1/spaces', spaceController.getAllSpaces);
app.get('/api/v1/spaces/:id', spaceController.getSpaceById);
app.post('/api/v1/spaces/new', spaceController.postCreateNewSpace);
app.put('/api/v1/spaces/:id', spaceController.putUpdateSpace);
app.delete('/api/v1/spaces/:id', spaceController.deleteSpace)

app.get('/api/v1/users', userController.getAllUsers);
app.post('/api/v1/users/new', userController.postUser);
app.get('/api/v1/users/:id', userController.getUserById);
app.put('/api/v1/users/:id', userController.updateUser);
app.delete('/api/v1/users/:id', userController.deleteUser);

app.get('/api/v1/reviews', reviewController.getAllReviews);
app.post('/api/v1/reviews/new', reviewController.postReview);
app.get('/api/v1/reviews/:id', reviewController.getReviewById);
app.put('/api/v1/reviews/:id', reviewController.updateReview);
app.delete('/api/v1/reviews/:id', reviewController.deleteReview);


app.get('/api/v1/blogs', blogController.getAllBlogs);
app.post('/api/v1/blogs/new', blogController.postBlog);
 app.get('/api/v1/blogs/:id', blogController.getBlogById);
 app.put('/api/v1/blogs/:id', blogController.updateBlog);
 app.delete('/api/v1/blogs/:id', blogController.deleteBlog);

 
app.get('/api/v1/pages', pageController.getAllPages);
app.post('/api/v1/pages/new', pageController.postPage);
 app.get('/api/v1/pages/:id', pageController.getPageById);
 app.put('/api/v1/pages/:id', pageController.updatePage);
 app.delete('/api/v1/pages/:id', pageController.deletePage);

app.listen(3000, () => console.log('Express server at 3000'))


