const mongoose=require('mongoose')

const reviewSchema= new mongoose.Schema({
    title: String,
    spaceId: number,
    rating: number,
    createdAt: Date,
    description: String,
    votes: number

})