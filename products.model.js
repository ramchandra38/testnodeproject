// ProductModel.js
var mongoose = require('mongoose');
// Setup schema
var ProductSchema = mongoose.Schema({
    ProductId: {
        type: Number,
        required: true
    },
    categoryId: {
        type: Number,
        required: true,
    },
    ProductName: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Product model
var Product = module.exports = mongoose.model('Product', ProductSchema);
module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit);
}