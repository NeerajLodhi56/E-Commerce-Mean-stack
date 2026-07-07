const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
 userID:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
 }],
 productsId: Array(String)
});
const Cart = mongoose.model('carts', cartSchema);
module.exports = Cart;