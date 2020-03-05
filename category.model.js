// CategoryModel.js
var mongoose = require('mongoose');
// Setup schema
var CategorySchema = mongoose.Schema({
    categoryId: {
        type: Number,
        required: true
    },
    categoryName: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Category model
var Category = module.exports = mongoose.model('Category', CategorySchema );
module.exports.get = function (callback, limit) {
    Category.find(callback).limit(limit);
}