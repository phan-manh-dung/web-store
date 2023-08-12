const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Lấy danh sách sản phẩm
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Thêm sản phẩm mới
router.post('/products', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
