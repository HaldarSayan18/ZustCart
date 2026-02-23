require('dotenv').config();
const mongoose = require('mongoose');
const axios = require('axios');
const Product = require('../model/productModel');
const products_api = require('../APIs/api').products_api;

const fetchandSaveProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB successfully');

        const response = await axios.get(products_api);
        const products = response.data.products;
        // for (const product of products) {
        //     const existingProduct = await Product.findOne({ id: product.id });
        //     if (!existingProduct) {
        //         const newProduct = new Product(product);
        //         await newProduct.save();
        //     }
        // }
        // console.log('Products fetched and saved in db successfully');

        const data = await Product.insertMany(products, { ordered: true });
        console.log(`${data.length} Products fetched and saved in db successfully`);
    } catch (error) {
        console.error('Error fetching products:', error);
    } finally {
        console.log('Finished fetching products');
        mongoose.connection.close();
    }
};

module.exports = { fetchandSaveProducts };