const Product = require('../models/productModel');

const getProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ message: 'Products retrieved successfully', products });
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while retrieving the products' });
    }
};

const createProduct = async (req, res) => {
    const { name, price, description, category, stock } = req.body; 

    try {
        const newProduct = new Product({ name, price, description, category, stock });
        const product = await newProduct.save();
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while creating the product' });
    }
};

const updateProduct = async (req, res) => {
    const { name, price, description, category, stock } = req.body; 
    const productId = req.params.id;

    try {
        const product = await Product.findByIdAndUpdate(
            productId,
            { name, price, description, category, stock },
            { new: true }
        );
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.status(200).json({ message: 'Product updated successfully', product });
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while updating the product' });
    }
};

const deleteProduct = async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await Product.findByIdAndDelete(productId);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while deleting the product' });
    }
};

module.exports = {
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};
