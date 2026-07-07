const mongoose = require('mongoose');
const wishlistSchema = new mongoose.Schema({
 userID:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
 }],
 productsId: Array(String)
});
const Wishlist = mongoose.model('wishlists', wishlistSchema);
module.exports = Wishlist;