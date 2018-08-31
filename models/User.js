const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    passwordExpiry: Date,
    createdAt: Date,
    updatedAt: Date,
    firstName: String,
    lastName: String,
    middleName: String,
    facebbok: String,
    google:String,
    tokens:Array


})