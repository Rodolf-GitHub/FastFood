// productRoutes.js
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');
const productController = new ProductController();

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
