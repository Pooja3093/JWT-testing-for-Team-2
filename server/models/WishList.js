const mongoose = require('mongoose');

const { Schema } = mongoose;

const wishlistSchema = new Schema({
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

const WishList = mongoose.model('WishList', wishlistSchema);

module.exports = WishList;
