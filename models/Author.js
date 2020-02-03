const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    presentation: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {collection: 'Authors'});

module.exports = Author = mongoose.model('Author', AuthorSchema);