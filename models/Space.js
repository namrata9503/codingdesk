const mongoose=require('mongoose')

const spaceSchema = new mongoose.Schema({
    name: String,
    slug: String,
    address: {
        area: String,
        pincode: number,
        city: String,
        state: String,
        country: String,
        latitude: number,
        longitude: number
    },
    description: String,
    photos: Array,
    owners: String,
    managers: String,
    amanities: Array,
    size: number,
    timing: {
        monday: {
            start: Date,
            end: Date
        },
        tuesday: {
            start: Date,
            end: Date
        },
        wednesday: {
            start: Date,
            end: Date
        },
        thursday: {
            start: Date,
            end: Date
        },
        friday: {
            start: Date,
            end: Date
        },
        saturday: {
            start: Date,
            end: Date
        },
        sunday: {
            start: Date,
            end: Date
        }

    },
    social: {
        website: String,
        facebook: String,
        twitter: String
    },
    createdAt: Date,
    updatedAt: Date,
    createdBy: {type:mongoose.Types.ObjectId},
    review: Array
})