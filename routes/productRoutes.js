// productRoutes.js
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productControllers');
const productController = new ProductController();
const ValidateAccess = require('../middleWares/validateAccess'); // Importar la función de middleware correctamente
const validateAccess=new ValidateAccess()

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products',validateAccess.validateAccess(['any']), productController.createProduct);
router.put('/products/:id',validateAccess.validateAccess(['any']), productController.updateProduct);
router.delete('/products/:id',validateAccess.validateAccess(['any']), productController.deleteProduct);

module.exports = router;
