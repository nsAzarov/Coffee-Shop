const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    articleID: {
        type: Number,
        required: true
    },
    authorID: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
}, {collection: 'Articles'});

module.exports = Article = mongoose.model('Article', ArticleSchema);