const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: { type: String, required: true },
    product_category: { type: String, required: true },
    product_subcategory: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.models.products || mongoose.model('products', productSchema);