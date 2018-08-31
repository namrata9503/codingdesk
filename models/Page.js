const mongoose= require('mongoose')

const pageSchema= new mongoose.Schema({
    title: String,
    body:{type:mongoose.Types.Mixed},
    slug: String
})