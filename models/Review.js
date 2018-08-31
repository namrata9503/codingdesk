const mongoose=require('mongoose')

const reviewSchema= new mongoose.Schema({
    title: String,
    spaceId: Number,
    rating: Number,
    createdAt: Date,
    description: String,
    votes: Number

})