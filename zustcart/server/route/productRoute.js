const router = require('express').Router();
const Product = require('../model/productModel');

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({ success: true, data: products });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch products',error });
    }
});

module.exports = router;