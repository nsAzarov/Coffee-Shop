const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productID: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    oldPrice: {
        type: Number,
        required: true
    },
    newPrice: {
        type: Number,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    length: {type: Number, required: true},
    height: {type: Number, required: true},
    width: {type: Number, required: true},
    weight: {type: Number, required: true}
}, {collection: 'Products'});

module.exports = Product = mongoose.model('Product', ProductSchema);