const express = require('express');
const { getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const productRoutes = express.Router();

productRoutes.get('/getProducts', getProduct);
productRoutes.post('/createProducts', createProduct);
productRoutes.put('/updateProducts/:id', updateProduct);
productRoutes.delete('/deleteProducts/:id', deleteProduct);

module.exports = productRoutes;
