const mongoose=require('mongoose')

const blogSchema=new mongoose.Schema({
    autherName: String,
    title: String,
    photo: Array,
    createdAt: Date,
    updatedAt: Date,
    description: String,
    likes: Number,
    username: String

})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;