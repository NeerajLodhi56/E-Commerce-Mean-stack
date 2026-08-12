const mongoose = require('mongoose');
const {schema} = mongoose;
const productSchema = new mongoose.Schema({
    name: String,
    shortDescription: String,
    description: String,
    price: Number,
    discount: Number,
    Images: Array(String),
    categoryId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    }]
});
const Product = mongoose.model('products', productSchema);
module.exports = Product;