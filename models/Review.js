const mongoose=require('mongoose')

const reviewSchema= new mongoose.Schema({
    title: String,
    spaceId: Number,
    rating: Number,
    createdAt: Date,
    votes: Number,
    description: String
  

})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;