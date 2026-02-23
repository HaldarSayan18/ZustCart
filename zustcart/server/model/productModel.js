const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    "id": { required: true, type: Number, unique: true },
    "title": { type: String, required: true },
    "description": { type: String, required: true },
    "category": { type: String, required: true },
    "price": { type: Number, required: true },
    "discountPercentage": { type: Number, required: true },
    "rating": { type: Number, required: true },
    "stock": { type: Number, required: true },
    "tags": [
        "beauty",
        "mascara"
    ],
    "brand": { type: String },
    "sku": { type: String },
    "weight": { type: Number, required: true },
    "dimensions": {
        "width": { type: Number, required: true },
        "height": { type: Number, required: true },
        "depth": { type: Number, required: true }
    },
    "warrantyInformation": { type: String },
    "shippingInformation": { type: String },
    "availabilityStatus": { type: String },
    "reviews": [
        {
            "rating": { type: Number },
            "comment": { type: String },
            "date": { type: String },
            "reviewerName": { type: String },
            "reviewerEmail": { type: String }
        }
    ],
    "returnPolicy": { type: String },
    "minimumOrderQuantity": { type: Number },
    "meta": {
        "createdAt": { type: String },
        "updatedAt": { type: String },
        "barcode": { type: String },
        "qrCode": { type: String }
    },
    "images": [String],
    "thumbnail": { type: String }
}, { timestamps: true });

module.exports = mongoose.models.cart_products || mongoose.model('cart_products', productSchema);
