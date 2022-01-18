const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const Course = new Schema({
    _id: {type: Number},
    name: {type: String, maxLength: 255, require: true},
    description: {type: String, maxLength: 600},
    image: {type: String, require: true},
    slug: {type: String, slug: 'name', unique: true},
    videoId: {type: String, require: true},
}, {
    _id: false,
    timestamps: true
})

//Add plugins
mongoose.plugin(slug)

Course.plugin(AutoIncrement,{inc_field: '_id'})
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true
})



module.exports = mongoose.model('Course', Course)